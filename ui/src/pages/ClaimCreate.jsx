import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ClaimForm from '../components/ClaimForm';

const API = 'http://localhost:3001/api/claims';

export default function ClaimCreate() {
  const [form, setForm] = useState({
    customerName: '',
    brand: '',
    phoneModel: '',
    serialNumber: '',
    issueType: '',
    description: '',
    incidentLocation: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    let body = {
      customerName: form.customerName,
      deviceInfo: {
        brand: form.brand,
        model: form.phoneModel,
        serialNumber: form.serialNumber,
      },
      incidentDetails: {
        incidentDate: new Date().toISOString(),
        incidentType: form.issueType,
        description: form.description,
        location: form.incidentLocation,
      },
    };
    await axios.post(API, body);
    navigate('/');
  };

  return (
    <Container>
      <Typography variant='h5' gutterBottom>
        Create New Claim
      </Typography>
      <ClaimForm form={form} setForm={setForm} handleSubmit={handleSubmit} />
    </Container>
  );
}
