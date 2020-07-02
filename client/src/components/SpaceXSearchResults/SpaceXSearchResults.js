import React from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./SpaceXSearchResults.css";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default function SpaceXSearchResults(props) {
console.log(props)
  return (
    <TableContainer component={Paper}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Launch Properties</StyledTableCell>
            <StyledTableCell align="left">Results</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">Mission Name and Date</StyledTableCell>
              <StyledTableCell align="left">{props.results.mission_name} (flight number {props.results.flight_number}) launched in {props.results.launch_year}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">Launch Details</StyledTableCell>
              <StyledTableCell align="left">{props.results.details}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">Successful?</StyledTableCell>
              <StyledTableCell align="left">{props.results.launch_success}</StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
