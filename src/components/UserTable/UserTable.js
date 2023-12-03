// UsersTable.js
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';

const UsersTable = ({ users, setUsers }) => {
  const [editIdx, setEditIdx] = useState(-1);
  const [tempData, setTempData] = useState({});

  const handleEdit = (index, user) => {
    setEditIdx(index);
    setTempData(user);
  };

  const handleSave = (index) => {
    users[index] = tempData;
    setEditIdx(-1);
  };

  const handleDelete = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  const handleChange = (e, name) => {
    setTempData({ ...tempData, [name]: e.target.value });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={user.id}>
              <TableCell>
                {user.id}
              </TableCell>
              <TableCell>
                {editIdx === index ? (
                  <TextField value={tempData.name} onChange={(e) => handleChange(e, 'name')} />
                ) : (
                  user.name
                )}
              </TableCell>
              <TableCell>
                {editIdx === index ? (
                  <TextField value={tempData.email} onChange={(e) => handleChange(e, 'email')} />
                ) : (
                  user.email
                )}
              </TableCell>
              <TableCell>
                {editIdx === index ? (
                  <TextField value={tempData.role} onChange={(e) => handleChange(e, 'role')} />
                ) : (
                  user.role
                )}
              </TableCell>
              <TableCell>
                {editIdx === index ? (
                  <button onClick={() => handleSave(index)}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(index, user)}>Edit</button>
                )}
                <button onClick={() => handleDelete(index)}>Delete</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
