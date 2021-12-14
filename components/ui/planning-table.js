import propTypes from 'prop-types';

// MUI IMPORTS
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

// COMPONENTS IMPORTS
import PlanningRow from './planning-row';

function createData(organization, place, date, players, price, url) {
  return {
    organization, place, date, players, price, url, results: [
      {
        position: 1,
        teamName: 'Les Jouve',
        players: 'Louis Jouve & Thomas Jouve',
        points: 120,
      },
      {
        position: 2,
        teamName: 'Pour Combien ?',
        players: 'Robin Florinda & Dorian Améziane',
        points: 80,
      },
      {
        position: 3,
        teamName: 'M&N',
        players: 'Charles Mordacq & Benoit Nguyen',
        points: 45,
      },
    ],
  };
}

const rows = [
  createData('Roundnet Paris', 'Vincennes', '2022-03-05', 120, 16.0, 'https://www.google.com'),
  createData('Roundnet Rennes', 'Rennes', '2022-04-15', 65, 19.0, 'https://www.google.com'),
  createData('Roundnet Lyon', 'Lyon', '2022-05-11', 85, 16.0, 'https://www.google.com'),
  createData('Roundnet Toulouse', 'Toulouse', '2022-06-22', 105, 17, 'https://www.google.com'),
  createData('Titans Roundnet', 'Nantes', '2022-07-19', 140, 16.0, 'https://www.google.com'),
];


function PlanningTable({ resultsTable }) {
  return (
    <TableContainer variant="outlined" component={Paper}>
      <Table size="medium" aria-label="simple table">
        <TableHead sx={{ backgroundColor: "primary.lighter" }}>
          <TableRow>
            {resultsTable && <TableCell padding="checkbox" />}
            <TableCell>Organisateur</TableCell>
            <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }}>Lieu</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right" sx={{ display: { xs: 'none', sm: 'table-cell' } }}>Nombre de joueurs</TableCell>
            {resultsTable || <TableCell align="right">Prix</TableCell>}
            <TableCell align="right">{resultsTable ? 'Résultats' : 'Inscription'}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => <PlanningRow
            key={row.date}
            row={row}
            resultsTable={resultsTable}
          />
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

PlanningTable.propTypes = {
  resultsTable: propTypes.bool,
}

PlanningTable.defaultProps = {
  resultsTable: false,
}

export default PlanningTable
