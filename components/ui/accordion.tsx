import {
  AccordionDetails,
  AccordionSummary,
  Accordion as MUIAccordion,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface AccordionItem {
  title: string;
  content: string[];
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const accordionElements = items
    ? items.map((item) => (
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
              <Typography key={paragraph} my={1}>
                {paragraph}
              </Typography>
            ))}
          </AccordionDetails>
        </MUIAccordion>
      ))
    : null;

  return accordionElements;
}
