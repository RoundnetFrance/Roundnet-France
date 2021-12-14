import { Fragment } from 'react'

// MUI IMPORTS
import Box from '@mui/material/Box';

function ColoredBackground({ children }) {
  return (
    <Fragment>
      <Box sx={{
        mb: -1,
        mt: -16,
      }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f50057" fillOpacity="1" d="M0,96L60,128C120,160,240,224,360,234.7C480,245,600,203,720,192C840,181,960,203,1080,218.7C1200,235,1320,245,1380,250.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" /></svg>
      </Box>
      <Box sx={{
        background: 'linear-gradient(180deg, rgba(245,0,87,1) 0%, rgba(171,0,60,1) 100%);',
        pb: 8,
      }}
      >
        {children}
      </Box>

    </Fragment>
  )
}

export default ColoredBackground
