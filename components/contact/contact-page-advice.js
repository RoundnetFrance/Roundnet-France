// MUI IMPORTS
import { Container, Paper, Box, Typography, Divider, Stack, Button } from '@mui/material';

// COMPONENT IMPORTS
import Link from '../../components/ui/link';

// CONTENT
import { contactElements } from '../../contents/contact/index';

export default function ContactPageAdvice({ value }) {
  // Get content from value === content._id. If no content, return null.
  const content = contactElements.find(element => element._id === value);
  if (!content) return null;

  return (
    <Container maxWidth="sm" sx={{ my: 4 }}>
      <Paper
        id="who-are-we"
        sx={{
          margin: '0 auto',
          padding: { xs: 2, sm: 4 },
        }}
      >
        <Box textAlign="center">
          {content.icon}
        </Box>
        <Box mb={3}>
          <Typography align="center" variant="h4">
            {content.title}
          </Typography>
        </Box>
        <Divider variant="middle" />
        <Stack spacing={2} mt={4}>
          <Typography align="center" variant="body1" component="div">
            {content.content}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
          >
            <Link href={content.href} color="#fff" underline="none">
              En savoir plus
            </Link>
          </Button>
        </Stack>
      </Paper>
    </Container>
  )
}
