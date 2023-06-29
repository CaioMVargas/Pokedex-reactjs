import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styles from './/Loader.module.css';

export default function Loader() {
  return (
    <Box sx={{ display: 'center' }} className={styles.container}>
      <CircularProgress color="inherit"/>
    </Box>
  );
}

