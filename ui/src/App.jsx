// client/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import ClaimList from './pages/ClaimList';
import ClaimCreate from './pages/ClaimCreate';
import ClaimEdit from './pages/ClaimEdit';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Header />
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path='/' element={<ClaimList />} />
          <Route path='/create' element={<ClaimCreate />} />
          <Route path='/edit/:id' element={<ClaimEdit />} />
          <Route path='*' element={<Typography variant='h4'>404 Not Found 😭</Typography>} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
