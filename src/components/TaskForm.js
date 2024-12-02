import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../redux/ taskSlice';
import { TextField, Button, Grid, Typography, Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const TaskForm = ({ taskToEdit, onCloseDialog }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('medium'); // New priority state

  // Request Notification Permission on Component Mount
  useEffect(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          console.log('Notification permission granted.');
        } else {
          console.log('Notification permission denied.');
        }
      });
    }
  }, []);

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setDueDate(taskToEdit.dueDate);
      setPriority(taskToEdit.priority || 'medium'); // Set priority for existing task
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { title, description, dueDate, completed: false, priority, id: taskToEdit ? taskToEdit.id : Date.now() };

    if (taskToEdit) {
      dispatch(editTask({ id: taskToEdit.id, updatedTask: task }));
    } else {
      dispatch(addTask(task));
      setReminder(task);  // Set the reminder when a new task is added
    }

    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('medium'); // Reset priority after submission
    onCloseDialog(); // Close dialog after saving
  };

  const setReminder = (task) => {
    const dueDateTime = new Date(task.dueDate);
    const currentTime = new Date();
    const reminderTime = dueDateTime - currentTime;  // Calculate time difference in milliseconds

    console.log('Task Due Date:', dueDateTime);
    console.log('Current Time:', currentTime);
    console.log('Reminder Time (in ms):', reminderTime);

    // If the reminder time is in the future, set the alarm
    if (reminderTime > 0) {
      console.log('Setting Reminder...');
      setTimeout(() => {
        console.log('Reminder triggered for task:', task.title);
        // Trigger browser notification
        if (Notification.permission === 'granted') {
          new Notification('Task Reminder', {
            body: `It's time to complete the task: ${task.title}`,
            icon: '/icon.png', // Optional: add a custom icon if needed
          });
        } else {
          console.log('Notification permission not granted');
        }
      }, reminderTime);
    } else {
      console.log('Reminder time has already passed.');
    }
  };

  return (
    <Box sx={{ width: '99%', padding: 1 }}>
      <Typography variant="h5" gutterBottom>
        {taskToEdit ? 'Edit Task' : 'Add New Task'}
      </Typography>
      <form  onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              multiline
              rows={4}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Due Date"
              type="datetime-local"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              fullWidth
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          {/* Priority Selection */}
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Priority</InputLabel>
              <Select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                label="Priority"
                required
              >
                <MenuItem value="low">Low</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="high">High</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ width: '100%' }}
            >
              {taskToEdit ? 'Save Changes' : 'Add Task'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default TaskForm;
