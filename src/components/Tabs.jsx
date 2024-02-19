import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { forwardRef } from "react";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Tablo = forwardRef(function BasicTabs({ data, ...props }, ref) {
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs aria-label="basic tabs example" ref={ref} {...props}>
        {data.map((item) => {
          return (
            <Tab
              key={item.id}
              className="!text-base !leading-4 !font-medium !normal-case !h-10"
              label={item.label}
              {...a11yProps(item.id)}
            />
          );
        })}
      </Tabs>
    </Box>
  );
});

export default Tablo;
