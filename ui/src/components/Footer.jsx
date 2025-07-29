import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        mt: 5,
        py: 2,
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'white',
        position: 'fixed',
        bottom: '0',
        width: '100%',
      }}>
      <Typography variant='body2'>
        © {new Date().getFullYear()} Asurion. All rights reserved.
      </Typography>
    </Box>
  );
}
