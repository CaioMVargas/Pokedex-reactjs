import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { typeHandler } from "../../utils";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function PokemonTable({ pokemonData }) {
  const { height, weight, types } = pokemonData;
  return (
    <TableContainer component={Paper} sx={{height:"fit-content", maxWidth:"250px"}}>
      <Table aria-label="customized table" >
        {/*<TableHead>
          <TableRow>
            <StyledTableCell>Altura</StyledTableCell>
            <StyledTableCell>Peso</StyledTableCell>
            <StyledTableCell>Tipo</StyledTableCell>
          </TableRow>
        </TableHead>*/}
        <TableBody>
          <StyledTableRow>
            <StyledTableCell>Height:</StyledTableCell>
            <StyledTableCell>{height + "cm"}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell>Weight:</StyledTableCell>
            <StyledTableCell>{weight + "g"}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell>Tipo:</StyledTableCell>
            <StyledTableCell>{typeHandler(types)}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
