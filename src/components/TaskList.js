// src/components/TaskList.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, toggleTaskCompletion, setFilter, setSearch, reorderTasks, editTask } from '../redux/ taskSlice';
import { Grid, Card, Button, Typography, TextField } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TaskList = ({ openTaskForm }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.tasks.filter);
  const search = useSelector((state) => state.tasks.search);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    if (filter === 'overdue') return new Date(task.dueDate) < new Date();
    return true;
  }).filter((task) => task.title.toLowerCase().includes(search.toLowerCase()));

  const handleFilter = (filterType) => {
    dispatch(setFilter(filterType));
  };

  const handleSearchChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination || source.index === destination.index) return;

    const reorderedTasks = Array.from(tasks);
    const [movedTask] = reorderedTasks.splice(source.index, 1);
    reorderedTasks.splice(destination.index, 0, movedTask);

    dispatch(reorderTasks(reorderedTasks));
  };

  const handleEditClick = (task) => {
    openTaskForm(task); // Pass the task to be edited to the form dialog
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>Task List</Typography>
      <TextField
        label="Search Tasks"
        value={search}
        onChange={handleSearchChange}
        fullWidth
        margin="normal"
      />
      <Button onClick={() => handleFilter('all')}>All Tasks</Button>
      <Button onClick={() => handleFilter('completed')}>Completed</Button>
      <Button onClick={() => handleFilter('pending')}>Pending</Button>
      <Button onClick={() => handleFilter('overdue')}>Overdue</Button>
      
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="taskList">
          {(provided) => (
            <Grid container spacing={2} ref={provided.innerRef} {...provided.droppableProps}>
              {filteredTasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                  {(provided) => (
                    <Grid item xs={12} sm={6} md={4} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <Card>
                        <Typography variant="h6">{task.title}</Typography>
                        <Typography variant="body2">{task.description}</Typography>
                        <Typography variant="body2" color="textSecondary">{task.dueDate}</Typography>
                        <Button onClick={() => dispatch(toggleTaskCompletion(task.id))}>
                          {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
                        </Button>
                        <Button onClick={() => handleEditClick(task)}>Edit</Button> {/* Edit Button */}
                        <Button onClick={() => dispatch(deleteTask(task.id))}>Delete</Button>
                      </Card>
                    </Grid>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Grid>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TaskList;
