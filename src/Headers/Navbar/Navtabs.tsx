import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tabpanel from "./Tabpanel";

export default function CenteredTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <TabList
          centered
          sx={{
            "& button": {
              color: "gray",
              margin: "4px 10px",
              fontSize: "16px",
              textTransform: "capitalize",
              fontWeight: "520",
              padding: "5px 0px 0px",
              minWidth: "auto",
              minHeight: "auto",
            },
            "& button.Mui-selected": { color: "black" },
            "& .MuiTabs-indicator": { bgcolor: "black" },
            minHeight: "inherit",
            padding: "18px 0px 9px",
            fontFamily: "Atkinson Hyperlegible",
          }}
          onChange={handleChange}
          aria-label="lab API tabs example"
        >
          <Tab disableRipple label="Stays" value="1" />
          <Tab disableRipple label="Experiences" value="2" />
        </TabList>

        <TabPanel value="1">
          <Tabpanel />
        </TabPanel>
        <TabPanel value="2">Two</TabPanel>
      </TabContext>
    </Box>
  );
}
