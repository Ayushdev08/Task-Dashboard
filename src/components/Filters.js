// src/components/Filters.js

import React from 'react';
import { Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/ taskSlice';

const Filters = () => {
  const dispatch = useDispatch();

  return (
    <Box sx={{ marginBottom: 2 }}>
      <Button variant="outlined" onClick={() => dispatch(setFilter('all'))}>
        All Tasks
      </Button>
      <Button variant="outlined" onClick={() => dispatch(setFilter('completed'))}>
        Completed Tasks
      </Button>
      <Button variant="outlined" onClick={() => dispatch(setFilter('pending'))}>
        Pending Tasks
      </Button>
      <Button variant="outlined" onClick={() => dispatch(setFilter('overdue'))}>
        Overdue Tasks
      </Button>
    </Box>
  );
};

export default Filters;
