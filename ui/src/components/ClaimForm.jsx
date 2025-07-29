import React from 'react';
import {
  TextField,
  Button,
  Stack,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';

export default function ClaimForm({ form, setForm, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label='Customer Name'
          value={form.customerName}
          onChange={e => setForm({ ...form, customerName: e.target.value })}
          required
        />
        <FormControl required fullWidth>
          <InputLabel id='brand-label'>Brand</InputLabel>
          <Select
            labelId='brand-label'
            label='Brand'
            value={form.brand || ''}
            onChange={e => setForm({ ...form, brand: e.target.value })}>
            <MenuItem value='Google'>Google</MenuItem>
            <MenuItem value='Apple'>Apple</MenuItem>
            <MenuItem value='Samsung'>Samsung</MenuItem>
            <MenuItem value='Xiaomi'>Xiaomi</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label='Phone Model'
          value={form.phoneModel}
          onChange={e => setForm({ ...form, phoneModel: e.target.value })}
          required
        />
        <FormControl required fullWidth>
          <InputLabel id='issueType-label'>Issue Type</InputLabel>
          <Select
            labelId='issueType-label'
            label='Issue Type'
            value={form.issueType || ''}
            onChange={e => setForm({ ...form, issueType: e.target.value })}>
            <MenuItem value='damage'>Damage</MenuItem>
            <MenuItem value='loss'>Loss</MenuItem>
            <MenuItem value='theft'>Theft</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label='Description'
          value={form.description}
          multiline
          rows={4}
          onChange={e => setForm({ ...form, description: e.target.value })}
        />
        <TextField
          label='Serial Number'
          value={form.serialNumber}
          onChange={e => setForm({ ...form, serialNumber: e.target.value })}
          required
        />
        <TextField
          label='Location'
          value={form.incidentLocation}
          onChange={e => setForm({ ...form, incidentLocation: e.target.value })}
          required
        />
        <Button type='submit' variant='contained'>
          Submit
        </Button>
      </Stack>
    </form>
  );
}
