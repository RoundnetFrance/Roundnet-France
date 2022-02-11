/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useState, useEffect } from "react";

// MUI IMPORTS
import {
  Typography,
  Box,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";

// MUI ICONS
import SearchIcon from "@mui/icons-material/Search";

// COMPONENT IMPORTS

export default function AdminFilters({ data, setData }) {
  const [searchValue, setSearchValue] = useState("");
  function handleSearchChange(event) {
    setSearchValue(event.target.value);
  }
  function handleReset() {
    setSearchValue("");
    setData(data);
  }

  useEffect(() => {
    const filteredData = data?.filter((item) => {
      const itemTitle = item.title.toLowerCase();
      const searchValueLowerCase = searchValue.toLowerCase();
      return itemTitle.includes(searchValueLowerCase);
    });
    setData(filteredData);
  }, [searchValue]);

  return (
    <Fragment>
      <Box mb={4} width="100%">
        <Typography variant="h5" color="initial" sx={{ mb: 2 }}>
          Rechercher
        </Typography>
        <TextField
          id="outlined-basic"
          fullWidth
          value={searchValue}
          onChange={handleSearchChange}
          color="primary"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button onClick={handleReset} sx={{ mt: 2 }}>
          Réinitialiser
        </Button>
      </Box>
      {/* <Typography variant="h5" color="initial">
        Filtrer
      </Typography> */}
    </Fragment>
  );
}
