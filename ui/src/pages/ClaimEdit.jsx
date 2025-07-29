import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography } from '@mui/material';
import ClaimForm from '../components/ClaimForm';

const API = 'http://localhost:3001/api/claims';

export default function ClaimEdit() {
  const { id } = useParams();
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

  useEffect(() => {
    axios.get(`${API}/${id}`).then(res => {
      console.log(res);

      setForm({
        customerName: res.data.customerName,
        brand: res.data.deviceInfo.brand,
        phoneModel: res.data.deviceInfo.model,
        serialNumber: res.data.deviceInfo.serialNumber,
        issueType: res.data.incidentDetails.incidentType,
        description: res.data.incidentDetails.description,
        incidentLocation: res.data.incidentDetails.location,
      });
    });
  }, [id]);

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.put(`${API}/${id}`, form);
    navigate('/');
  };

  return (
    <Container>
      <Typography variant='h5' gutterBottom>
        Edit Claim
      </Typography>
      <ClaimForm form={form} setForm={setForm} handleSubmit={handleSubmit} />
    </Container>
  );
}
