import Link from 'next/link';

// MUI IMPORTS
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

// MUI ICONS
import LinkIcon from '@mui/icons-material/Link';

function createData(organization, place, date, players, price, url) {
  return { organization, place, date, players, price, url };
}

const rows = [
  createData('Roundnet Paris', 'Vincennes', '2022-03-05', 120, 16.0, 'https://www.google.com'),
  createData('Roundnet Rennes', 'Rennes', '2022-04-15', 65, 19.0, 'https://www.google.com'),
  createData('Roundnet Lyon', 'Lyon', '2022-05-11', 85, 16.0, 'https://www.google.com'),
  createData('Roundnet Toulouse', 'Toulouse', '2022-06-22', 105, 17, 'https://www.google.com'),
  createData('Titans Roundnet', 'Nantes', '2022-07-19', 140, 16.0, 'https://www.google.com'),
];


function PlanningTable() {
  return (
    <TableContainer variant="outlined" component={Paper}>
      <Table size="medium" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Organisateur</TableCell>
            <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }}>Lieu</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right" sx={{ display: { xs: 'none', sm: 'table-cell' } }}>Nombre de joueurs</TableCell>
            <TableCell align="right">Prix</TableCell>
            <TableCell align="right">Inscription</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            const humanReadableDate = new Date(row.date).toLocaleDateString('fr-FR', { year: "numeric", month: "short", day: "2-digit" });
            return (
              <TableRow
                key={row.place}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.organization}
                </TableCell>
                <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }}>{row.place}</TableCell>
                <TableCell align="right">{humanReadableDate}</TableCell>
                <TableCell align="right" sx={{ display: { xs: 'none', sm: 'table-cell' } }}>{row.players}</TableCell>
                <TableCell align="right">{row.price}€</TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    endIcon={<LinkIcon sx={{ display: { xs: 'none', sm: 'table-cell' } }} />}> S&apos;inscrire </Button>
                </TableCell>
              </TableRow>
            )
          }
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default PlanningTable
