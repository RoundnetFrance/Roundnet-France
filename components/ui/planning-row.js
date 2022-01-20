import { useState, Fragment } from 'react';

// MUI IMPORTS
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import Collapse from '@mui/material/Collapse';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Stack';

// MUI ICONS
import LinkIcon from '@mui/icons-material/Link';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';


function PlanningRow({ row, resultsTable }) {

  const [expanded, setExpanded] = useState(false);

  // Making the date readable
  const humanReadableDate = new Date(row.date).toLocaleDateString('fr-FR', { year: "numeric", month: "short", day: "2-digit" });


  return (
    <Fragment>

      {/* MAIN TABLE */}
      <TableRow
        sx={{
          '&:last-child td, &:last-child th': { border: 0 },
          // '& > *': { borderBottom: 'unset' },
        }}
      >
        {resultsTable && (
          <TableCell padding="checkbox">
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
        )}
        <TableCell component="th" scope="row">
          {row.organization}
        </TableCell>
        <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }}>{row.place}</TableCell>
        <TableCell align="right">{humanReadableDate}</TableCell>
        <TableCell align="right" sx={{ display: { xs: 'none', sm: 'table-cell' } }}>{row.players}</TableCell>
        {resultsTable || (
          <TableCell align="right">{row.price}€</TableCell>
        )}
        <TableCell align="right">
          <Button
            variant={resultsTable ? 'contained' : 'outlined'}
            color="primary"
            size="small"
            endIcon={resultsTable ?
              <EmojiEventsIcon sx={{ display: { xs: 'none', sm: 'table-cell' } }} />
              :
              <LinkIcon sx={{ display: { xs: 'none', sm: 'table-cell' } }} />}>
            {resultsTable ? 'Consulter' : 'S\'inscrire'}
          </Button>
        </TableCell>
      </TableRow>

      {/* COLLAPSABLE SUBTABLE */}
      {row.results && (
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Box sx={{ margin: { xs: 1, sm: 2 } }}>
                <Typography variant="h6" gutterBottom component="div">
                  Podium
                </Typography>
                <Table size="small" sx={{ maxWidth: '600px' }} aria-label="tournament podium">
                  <TableHead>
                    <TableRow>
                      <TableCell>Pos.</TableCell>
                      <TableCell>Equipe</TableCell>
                      <TableCell>Joueurs</TableCell>
                      <TableCell align="right">Points</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.results.map((result) => (
                      <TableRow key={result.teamName}>
                        <TableCell component="th" scope="row">
                          {result.position}
                        </TableCell>
                        <TableCell>{result.teamName}</TableCell>
                        <TableCell>{result.players}</TableCell>
                        <TableCell align="right">{result.points}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Divider />
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}

    </Fragment>
  )
}

export default PlanningRow
