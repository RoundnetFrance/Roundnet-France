// MUI IMPORTS
import { Button, IconButton, Stack } from '@mui/material';

// MUI ICONS
import { InsertLink, Facebook, Instagram } from '@mui/icons-material';

export default function LinkButtons({ links }) {

  // If links is a single string link, display it as is
  if (typeof links === 'string') {
    // Check if link is an external link
    const isExternal = links.startsWith('http');

    return (
      <Button
        sx={{
          width: 'fit-content',
        }}
        variant="contained"
        color="secondary"
        href={link}
        target={isExternal ? '_blank' : '_self'}
        rel={isExternal ? 'noopener noreferrer' : ''}
        startIcon={isExternal ? <InsertLink /> : null}
      >
        Lien
      </Button>
    );
  }

  // If links is an array of links, display them as buttons
  return (
    <Stack direction="row" spacing={0}>
      {links.map(link => {
        // If no link is provided, skip the render
        if (!link.url) {
          return
        }

        const isExternal = link.url.startsWith('http');
        console.log(isExternal)
        switch (link.source) {
          case 'website':
            return (
              <Button
                key={link.url}
                sx={{
                  width: 'fit-content',
                  mr: 1
                }}
                variant="contained"
                size="small"
                color="secondary"
                href={link.url}
                target={isExternal ? '_blank' : '_self'}
                rel={isExternal ? 'noopener noreferrer' : ''}
                startIcon={isExternal ? <InsertLink /> : null}
              >
                Site
              </Button>
            );

          default:
            return (
              <IconButton
                key={link.url}
                aria-label={link.source + ' icon'}
                href={link.url}
                color="secondary"
                size="small"
                target={isExternal ? '_blank' : '_self'}
                rel={isExternal ? 'noopener noreferrer' : ''}
              >
                {link.source === 'facebook' ? <Facebook /> : <Instagram />}
              </IconButton>
            );
        }
      })
      }
    </Stack>
  );
}

