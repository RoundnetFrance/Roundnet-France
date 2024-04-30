import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import type { FC } from "react";
import PlanningRow from "./planning-row";
import type { PlanningRow as PlanningRowType } from "../../models/Planning";

interface PlanningTableProps {
  resultsTable: boolean;
  items: PlanningRowType[];
}

const PlanningTable: FC<PlanningTableProps> = ({ resultsTable, items }) => {
  return (
    <TableContainer variant='outlined' component={Paper}>
      <Table size='medium' aria-label='simple table'>
        <TableHead sx={{ backgroundColor: "primary.lighter" }}>
          <TableRow>
            {resultsTable && <TableCell padding='checkbox' />}
            <TableCell>Organisateur</TableCell>
            <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
              Lieu
            </TableCell>
            <TableCell align='right'>Date</TableCell>
            <TableCell
              align='right'
              sx={{ display: { xs: "none", sm: "table-cell" } }}
            >
              Nombre de joueurs
            </TableCell>
            {resultsTable || <TableCell align='right'>Prix</TableCell>}
            <TableCell align='right'>
              {resultsTable ? "Résultats" : "Inscription"}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row) => (
            <PlanningRow key={row._id} row={row} resultsTable={resultsTable} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PlanningTable;
