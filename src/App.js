import React, { useState, useEffect } from 'react';
import { Container, Button, Typography, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { ThemeProvider, useTheme } from './context/ThemeContext'; // Import theme context
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

const App = () => {
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [darkMode]);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const [openDialog, setOpenDialog] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const openTaskForm = (task) => {
    setTaskToEdit(task); // Pass the task to be edited
    setOpenDialog(true);
  };

  const closeTaskForm = () => {
    setTaskToEdit(null); // Reset task data when closing
    setOpenDialog(false);
  };

  return (
    <MUIThemeProvider theme={theme}>
      <Container className="container">
        <Typography variant="h3" gutterBottom>
          Task Dashboard
        </Typography>
        <div className="button-container">
          <Button variant="contained" onClick={() => openTaskForm(null)}>
            Add New Task
          </Button>
          <Button
            onClick={toggleTheme}
            variant="outlined"
          >
            Toggle {darkMode ? 'Light' : 'Dark'} Mode
          </Button>
        </div>
        <TaskList openTaskForm={openTaskForm} />
        <Dialog open={openDialog} onClose={closeTaskForm}>
          <DialogTitle>{taskToEdit ? 'Edit Task' : 'Add New Task'}</DialogTitle>
          <DialogContent>
            <TaskForm taskToEdit={taskToEdit} onCloseDialog={closeTaskForm} />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeTaskForm}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </MUIThemeProvider>
  );
};

const AppWithThemeProvider = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default AppWithThemeProvider;
