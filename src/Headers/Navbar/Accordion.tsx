import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";

export default function BasicAccordion() {
  const [visibility, setVisibility] = React.useState("visible");
  return (
    <div>
      <Accordion defaultExpanded="true">
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography sx={{ visibility: { visibility } }}>Where To</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            onClick={() => setVisibility("hidden")}
            sx={{
              display: "flex",
              gap: 2,
              p: 2,
              border: "1px solid grey",
              borderRadius: "8px",
            }}
          >
            <AiOutlineSearch size={20} />
            {/* <p style={{ cursor: "text" }}>Search destination</p> */}
            <input
              type="text"
              placeholder="Search Destination"
              style={{ outline: "none" }}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ visibility: { visibility } }}>
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ visibility: { visibility } }}>
        <AccordionSummary aria-controls="panel3a-content" id="panel3a-header">
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
