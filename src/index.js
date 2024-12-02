// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';
import '../src/styles/styles.css';  // Ensure your styles are imported

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// Watch for dark mode toggle and update the body class
const updateBodyClass = (darkMode) => {
  const body = document.body;
  if (darkMode) {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
};

// Monitor the theme changes from the context provider and update the body class
const themeContext = document.querySelector('[data-theme]');
if (themeContext) {
  updateBodyClass(true); // Ensure theme is applied immediately
}
