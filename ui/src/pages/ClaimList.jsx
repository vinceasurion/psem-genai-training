//@ts-nocheck
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
} from '@mui/material';
import axios from 'axios';

const API = 'http://localhost:3001/api/claims';

/**
 * ClaimList component displays a paginated table of phone insurance claims.
 * Fetches claims from API and allows editing or deleting each claim.
 */
function ClaimList() {
  // State for all claims
  const [claims, setClaims] = useState([]);
  // State for pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  /**
   * Fetches claims from the API and updates state.
   */
  const fetchClaims = async () => {
    const res = await axios.get(API);
    setClaims(res.data);
  };

  /**
   * Handles deleting a claim by id and refreshes the list.
   * @param {string|number} id - The claim id to delete
   */
  const handleDelete = async id => {
    await axios.delete(`${API}/${id}`);
    fetchClaims();
  };

  /**
   * Handles page change in pagination.
   * @param {object} event - The event object
   * @param {number} newPage - The new page number
   */
  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  /**
   * Handles change in rows per page in pagination.
   * @param {object} event - The event object
   */
  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  useEffect(() => {
    fetchClaims();
  }, []);

  // Calculate the claims to display for the current page
  const paginatedClaims = claims.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Container>
      <Typography variant='h4' gutterBottom>
        Phone Insurance Claims
      </Typography>
      <Button
        color='secondary'
        variant='outlined'
        component={Link}
        to='/create'
        sx={{ mb: 2 }}>
        Create New Claim
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Brand</TableCell>
            <TableCell>Phone Model</TableCell>
            <TableCell>Issue</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedClaims.map(claim => (
            <TableRow key={claim.id}>
              <TableCell>{claim.customerName}</TableCell>
              <TableCell>{claim.deviceInfo?.brand}</TableCell>
              <TableCell>{claim.deviceInfo?.model}</TableCell>
              <TableCell>{claim.incidentDetails?.incidentType}</TableCell>
              <TableCell>{claim.status}</TableCell>
              <TableCell>
                <Button
                  variant='outlined'
                  component={Link}
                  to={`/edit/${claim.id}`}
                  sx={{ mr: 1 }}>
                  Edit
                </Button>
                <Button
                  variant='outlined'
                  color='error'
                  onClick={() => handleDelete(claim.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component='div'
        count={claims.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Container>
  );
}

export default ClaimList;
