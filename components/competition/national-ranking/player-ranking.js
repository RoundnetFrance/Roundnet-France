import { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';

// MUI IMPORTS
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Masonry from '@mui/lab/Masonry';
import IconButton from '@mui/material/IconButton';

// MUI TABLE IMPORTS
import TablePagination from '@mui/material/TablePagination';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';

// MUI ICONS
import EqualizerIcon from '@mui/icons-material/Equalizer';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';


function TablePaginationActions(props) {
  const theme = useTheme();
  const {
    count, page, rowsPerPage, onPageChange,
  } = props;

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
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <LastPageIcon />
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function PlayerRanking() {

  // Fake Data
  const rankingList = [
    {
      playerId: 121,
      rank: 1,
      points: 500,
      player: {
        name: "Thomas",
        surname: "Jouve"
      }
    },
    {
      playerId: 122,
      rank: 2,
      points: 500,
      player: {
        name: "Louis",
        surname: "Jouve"
      }
    },
    {
      playerId: 120,
      rank: 3,
      points: 400,
      player: {
        name: "Charles",
        surname: "Mordacq"
      }
    },
    {
      playerId: 119,
      rank: 4,
      points: 400,
      player: {
        name: "Benoit",
        surname: "Nguyen"
      }
    },
    {
      playerId: 107,
      rank: 5,
      points: 232,
      player: {
        name: "Benoît",
        surname: "Durand"
      }
    },
    {
      playerId: 118,
      rank: 6,
      points: 210,
      player: {
        name: "Dorian",
        surname: "Améziane"
      }
    },
    {
      playerId: 117,
      rank: 7,
      points: 210,
      player: {
        name: "Cebastien",
        surname: "Page"
      }
    },
    {
      playerId: 106,
      rank: 8,
      points: 195,
      player: {
        name: "Erwan",
        surname: "Chapelière"
      }
    },
    {
      playerId: 116,
      rank: 9,
      points: 165,
      player: {
        name: "Robin",
        surname: "Souriau"
      }
    },
    {
      playerId: 115,
      rank: 10,
      points: 165,
      player: {
        name: "Alexandre",
        surname: "Marti"
      }
    },
    {
      playerId: 113,
      rank: 11,
      points: 110,
      player: {
        name: "Tristan",
        surname: "Olin"
      }
    },
    {
      playerId: 114,
      rank: 12,
      points: 110,
      player: {
        name: "Nicolas",
        surname: "Brun"
      }
    },
    {
      playerId: 111,
      rank: 13,
      points: 109,
      player: {
        name: "Timothée",
        surname: "Dunglas"
      }
    },
    {
      playerId: 112,
      rank: 14,
      points: 109,
      player: {
        name: "Jean",
        surname: "Delloye"
      }
    },
    {
      playerId: 109,
      rank: 15,
      points: 108,
      player: {
        name: "Lancelot",
        surname: "Touzé"
      }
    },
    {
      playerId: 110,
      rank: 16,
      points: 108,
      player: {
        name: "Jan-Peter",
        surname: "Geringer"
      }
    },
    {
      playerId: 108,
      rank: 17,
      points: 107,
      player: {
        name: "Axel",
        surname: "Degiorgis"
      }
    },
    {
      playerId: 105,
      rank: 18,
      points: 70,
      player: {
        name: "Valentin",
        surname: "Perraud"
      }
    },
    {
      playerId: 103,
      rank: 19,
      points: 69,
      player: {
        name: "Gabriel",
        surname: "Rodriguez"
      }
    },
    {
      playerId: 104,
      rank: 20,
      points: 69,
      player: {
        name: "Ryan",
        surname: "Danekas"
      }
    },
  ];
  

  // Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Avoid a layout jump when reaching the last page with empty rankingList.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rankingList.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const itemData = [
    {
      img: '/images/ranking-masonry/roundnet-france-ranking1.jpg',
      title: 'Fern',
    },
    {
      img: '/images/ranking-masonry/roundnet-france-ranking3.jpg',
      title: 'Mushrooms',
    },
    {
      img: '/images/ranking-masonry/roundnet-france-ranking4.jpg',
      title: 'Tower',
    },
    {
      img: '/images/ranking-masonry/roundnet-france-ranking6.jpg',
      title: 'Honey',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ position: 'relative', mb: 4 }}>

      <Typography
        variant="h4"
        align="center"
        color="primary"
        mt={4}
      >
        <Box textAlign="center">
          <EqualizerIcon color="primary" sx={{ fontSize: 80 }} />
        </Box>
        Le classement
      </Typography>
      <Typography variant="subtitle1" align="center" color="secondary" mb={4}>
        Dernière mise à jour :
        {' '}
        {new Date().toLocaleDateString()}
      </Typography>

      {/* TABLE */}
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems="center">

        <TableContainer component={Paper} variant="outlined" sx={{ width: { xs: '100%', md: '50%' } }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Rang</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Joueur.se</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }} align="right">Points</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? rankingList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : rankingList
              ).map((row) => (
                <TableRow
                  key={row.playerId}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:nth-of-type(odd)': { background: '#c5cef0' } }}
                >
                  <TableCell component="th" scope="row">
                    {row.rank}
                  </TableCell>
                  <TableCell>
                    {row.player.name}
                    {' '}
                    {row.player.surname}
                  </TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }} align="right">{row.points}</TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 15, { label: 'Tous', value: -1 }]}
                  colSpan={3}
                  count={rankingList.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'résultats par page',
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>

        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
        <Masonry columns={2} spacing={1}>
        {itemData.map((item) => (
          <Stack key={item.title}>
            <img
              src={`${item.img}?w=162&auto=format`}
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{ borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}
            />
          </Stack>
        ))}
      </Masonry>
        </Box>
      </Stack>

    </Container>
  );
}

export default PlayerRanking;