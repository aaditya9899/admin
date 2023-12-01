import React from 'react';
import TablePagination from '@mui/material/TablePagination';

const Pagination = ({ count, page, onPageChange, onRowsPerPageChange }) => {
  const rowsPerPage = 10;
  
  return (
    <TablePagination
      component="div"
      count={count}
      page={page}
      onPageChange={onPageChange}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={onRowsPerPageChange}
      rowsPerPageOptions={[10]}
    />
  );
};

export default Pagination;
