// src/context/ThemeContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Persist the theme preference in local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedTheme);
  }, []);

  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode); // Save preference to local storage
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
