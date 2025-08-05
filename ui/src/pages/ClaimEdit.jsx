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
      let data = res.data.data;

      setForm({
        customerName: data.customerName,
        brand: data.deviceInfo.brand,
        phoneModel: data.deviceInfo.model,
        serialNumber: data.deviceInfo.serialNumber,
        issueType: data.incidentDetails.incidentType,
        description: data.incidentDetails.description,
        incidentLocation: data.incidentDetails.location,
      });
    });
  }, [id]);

  const handleSubmit = async e => {
    e.preventDefault();
    let data = {
      ...form,
      deviceInfo: {
        brand: form.brand,
        model: form.phoneModel,
        serialNumber: form.serialNumber,
      },
      incidentDetails: {
        incidentType: form.issueType,
        description: form.description,
        location: form.incidentLocation,
      },
    };
    await axios.put(`${API}/${id}`, data);
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
