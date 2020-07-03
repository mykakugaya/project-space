import React from "react";
// import "./AsteroidSearchResults.css";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

export default function AsteroidSearchResults(props) {

  return (
    <TableContainer component={Paper}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Asteroid Properties</StyledTableCell>
            <StyledTableCell align="left">Results</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">Asteroid Name</StyledTableCell>
              <StyledTableCell align="left">{props.results.name}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">Orbiting Body</StyledTableCell>
              <StyledTableCell align="left">{props.results.close_approach_data[0].orbiting_body}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">Dangerous to Life on Earth?</StyledTableCell>
              <StyledTableCell align="left">{props.results.is_potentially_hazardous_asteroid.toString().toUpperCase()}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">Should Miss Earth by...</StyledTableCell>
              <StyledTableCell align="left">{parseInt(props.results.close_approach_data[0].miss_distance.miles).toLocaleString()} miles</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">Relative Velocity</StyledTableCell>
              <StyledTableCell align="left">{parseInt(props.results.close_approach_data[0].relative_velocity.miles_per_hour).toLocaleString()} mph</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">Minimum Diameter</StyledTableCell>
              <StyledTableCell align="left">{props.results.estimated_diameter.feet.estimated_diameter_min.toFixed(0).toLocaleString()} feet</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">Maximum Diameter</StyledTableCell>
              <StyledTableCell align="left">{props.results.estimated_diameter.feet.estimated_diameter_max.toFixed(0).toLocaleString()} feet</StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
