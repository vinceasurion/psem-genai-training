import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Paper } from '@mui/material';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Login submitted:', form);
    // TODO: Implement authentication logic here (e.g. call /auth/login API)
  };

  return (
    <Container maxWidth='sm'>
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Typography variant='h5' gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box display='flex' flexDirection='column' gap={2}>
            <TextField
              label='Username'
              value={form.username}
              onChange={e => setForm({ ...form, username: e.target.value })}
              required
            />
            <TextField
              label='Password'
              type='password'
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              required
            />
            <Button type='submit' variant='outlined' color='secondary'>
              Log In
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}
