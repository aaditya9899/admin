import React from 'react';
import TablePagination from '@mui/material/TablePagination';
import './Pagination.css'

const Pagination = ({ count, page, rowsPerPage, onPageChange, onRowsPerPageChange }) => {
 return (
  <TablePagination
    component="div"
    count={count}
    page={page}
    onPageChange={onPageChange}
    rowsPerPage={rowsPerPage}
    onRowsPerPageChange={onRowsPerPageChange}
    rowsPerPageOptions={[10]}
    ActionsComponent={TablePaginationActions}
  />
 );
};

function TablePaginationActions(props) {
 const { count, page, rowsPerPage, onPageChange } = props;

 const handleFirstPageButtonClick = (event) => {
  onPageChange(event, 0);
 };

 const handleBackButtonClick = (event) => {
  onPageChange(event, page - 1);
 };

 const handleNextButtonClick = (event) => {
  onPageChange(event, page + 1);
 };

 const handleLastPageButtonClick = (event) => {
  onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
 };

 return (
  <div>
    <button className="first-page" onClick={handleFirstPageButtonClick}>1</button>
    <button className="previous-page" onClick={handleBackButtonClick}>{page}</button>
    <button className="next-page" onClick={handleNextButtonClick}>{page + 2}</button>
    <button className="last-page" onClick={handleLastPageButtonClick}>{Math.ceil(count / rowsPerPage)}</button>
  </div>
 );
}

export default Pagination;
