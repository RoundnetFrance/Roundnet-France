

// MUI IMPORTS
import { Accordion as MUIAccordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';

// MUI ICONS
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Accordion({ items }) {
  const accordionElements = items ? items.map((item) => (
    <MUIAccordion key={item.title}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
        id="panel-header"
      >
        <Typography variant="h6">{item.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {item.content.map((paragraph) => (
          <Typography key={paragraph} my={1}>{paragraph}</Typography>
        ))}
      </AccordionDetails>
    </MUIAccordion>
  )) : null;

  return accordionElements;
}
