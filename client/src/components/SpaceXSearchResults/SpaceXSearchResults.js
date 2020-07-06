import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Box from '@material-ui/core/Box';

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

// export default function SpaceXSearchResults(props) {
// console.log(props)
//   return (
//     <TableContainer component={Paper}>
//       <Table  aria-label="customized table">
//         <colgroup>
//           <col style={{width:'20%'}}/>
//           <col style={{width:'80%'}}/>
//         </colgroup>
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Launch Properties</StyledTableCell>
//             <StyledTableCell align="left">Results</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//             <StyledTableRow>
//               <StyledTableCell component="th" scope="row">Mission Name and Date</StyledTableCell>
//               <StyledTableCell align="left">{props.results.mission_name} (SpaceX launch number {props.results.flight_number}) was launched in {props.results.launch_year}</StyledTableCell>
//             </StyledTableRow>
//             <StyledTableRow>
//               <StyledTableCell component="th" scope="row">Mission Patch</StyledTableCell>
//               <StyledTableCell align="left"><img style={{width: "15%"}}src={props.results.links.mission_patch_small}/></StyledTableCell>
//             </StyledTableRow>
//             <StyledTableRow>
//               <StyledTableCell component="th" scope="row">Launch Details</StyledTableCell>
//               <StyledTableCell align="left">{props.results.details}</StyledTableCell>
//             </StyledTableRow>
//             <StyledTableRow>
//               <StyledTableCell component="th" scope="row">Mission Success?</StyledTableCell>
//               <StyledTableCell align="left">{props.results.launch_success.toString().toUpperCase()}</StyledTableCell>
//             </StyledTableRow>
//             <StyledTableRow>
//               <StyledTableCell component="th" scope="row">Rocket Name</StyledTableCell>
//               <StyledTableCell align="left">{props.results.rocket.rocket_name}</StyledTableCell>
//             </StyledTableRow>
//             <StyledTableRow>
//               <StyledTableCell component="th" scope="row">Launch Site</StyledTableCell>
//               <StyledTableCell align="left">{props.results.launch_site.site_name_long}</StyledTableCell>
//             </StyledTableRow>
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }


export default function SpaceXSearchResults(props) {
  console.log(props);
  const [open, setOpen] = React.useState(false);
    return (
      <TableContainer component={Paper}>
        <Table  aria-label="customized table">
          <colgroup>
            <col style={{width:'20%'}}/>
            <col style={{width:'80%'}}/>
          </colgroup>
          <TableHead>
            <TableRow>
              <StyledTableCell>Launch Properties</StyledTableCell>
              <StyledTableCell align="left">Results</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">Mission Name and Date</StyledTableCell>
                <StyledTableCell align="left">{props.results.mission_name} (SpaceX launch number {props.results.flight_number}) was launched in {props.results.launch_year}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">Mission Patch</StyledTableCell>
                <StyledTableCell align="left"><img style={{width: "15%"}}src={props.results.links.mission_patch_small}/></StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
              <StyledTableCell>
                <IconButton style={{fontFamily: "Roboto"}}aria-label="expand row" size="small" onClick={() => setOpen(!open)}>Launch details
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
              </StyledTableCell>
                <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                      <Typography variant="p" gutterBottom component="div">
                        {props.results.details}
                      </Typography>
                  </Collapse>
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">Mission Success?</StyledTableCell>
                <StyledTableCell align="left">{props.results.launch_success.toString().toUpperCase()}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">Rocket Name</StyledTableCell>
                <StyledTableCell align="left">{props.results.rocket.rocket_name}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">Launch Site</StyledTableCell>
                <StyledTableCell align="left">{props.results.launch_site.site_name_long}</StyledTableCell>
              </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }