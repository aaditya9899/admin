// Dashboard.js
import React, { useEffect, useState, useMemo } from 'react';
import { fetchUsers } from '../../api/api';
import UsersTable from '../UserTable/UserTable';
import SearchBar from '../SearchBar/searchBar';
import Pagination from '../Pagination/Pagination';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const getUsers = async () => {
      const usersFromApi = await fetchUsers();
      setUsers(usersFromApi);
    };
    getUsers();
  }, []);

  const onPageChange = (event, newPage) => {
    setPage(newPage);
  };

  const onRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredUsers = useMemo(() => {
    return users.filter(user => 
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [users, searchQuery]);

  return (
    <div>
      <SearchBar setSearchQuery={setSearchQuery} />
      <UsersTable users={filteredUsers} setUsers={setUsers} />
      <Pagination
        count={filteredUsers.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
      />
    </div>
  );
};

export default Dashboard;
