import { useState } from 'react';

// MUI IMPORTS
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

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
    <TableRow
      sx={{ 
        '&:last-child td, &:last-child th': { border: 0 },
        '& > *': { borderBottom: 'unset' },
      }}
    >
      {resultsTable && (
        <IconButton
          aria-label="expand row"
          size="small"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
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
  )
}

export default PlanningRow
