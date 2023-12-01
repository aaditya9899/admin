// Dashboard.js
import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../../api/api';
import UsersTable from '../UserTable/UserTable';
import SearchBar from '../SearchBar/searchBar';
import Pagination from '../Pagination/Pagination';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const getUsers = async () => {
      const usersFromApi = await fetchUsers();
      setUsers(usersFromApi);
    };
    getUsers();
  }, []);

  return (
    <div>
      <SearchBar setSearchQuery={setSearchQuery} />
      <UsersTable users={users} searchQuery={searchQuery} setUsers={setUsers} />
      <Pagination />
    </div>
  );
};

export default Dashboard;
