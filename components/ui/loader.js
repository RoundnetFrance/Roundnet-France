import { Stack, CircularProgress } from '@mui/material';


export default function loader() {
  return (
    <Stack sx={{ width: '100%' }} justifyContent="center" alignItems="center">
      <CircularProgress />
    </Stack>
  )
}
