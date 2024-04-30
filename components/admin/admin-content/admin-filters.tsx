/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, type Dispatch, type SetStateAction } from "react";

import {
  Typography,
  Box,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

interface AdminFiltersProps<T> {
  data: T[];
  setData: Dispatch<SetStateAction<T[]>>;
}

export const AdminFilters = <T extends { title?: string; name?: string }>({
  data,
  setData,
}: AdminFiltersProps<T>) => {
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
      // Filter by title or name
      const itemTitle = item.title?.toLowerCase() || item.name?.toLowerCase();
      const searchValueLowerCase = searchValue.toLowerCase();
      return itemTitle?.includes(searchValueLowerCase);
    });
    setData(filteredData);
  }, [searchValue]);

  return (
    <Box mb={4} width='100%'>
      <Typography variant='h5' color='initial' sx={{ mb: 2 }}>
        Rechercher
      </Typography>
      <TextField
        id='outlined-basic'
        fullWidth
        value={searchValue}
        onChange={handleSearchChange}
        color='primary'
        size='small'
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Button onClick={handleReset} sx={{ mt: 2 }}>
        Réinitialiser
      </Button>
    </Box>
  );
};
