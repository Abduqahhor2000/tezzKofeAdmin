import withLayout from "./Mean";
import AddSectionModal from "../components/modals/AddSectionModal";
import { Box, Tab, Tabs } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Sections from "../components/Sections";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Tables() {
  const navigate = useNavigate();
  return (
    <div className="h-[calc(100vh-56px)] overflow-y-auto overflow-x-hidden p-5 pb-0 flex flex-col">
      <div className="flex justify-between border-b-[1px] border-gray-200">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={0} aria-label="basic tabs example">
            <Tab
              className="!text-base !leading-4 !font-medium !normal-case !h-10"
              label="Katigoriya"
              {...a11yProps(0)}
            />
            <Tab
              onClick={() => navigate("/tables/type")}
              className="!text-base !leading-4 !font-medium !normal-case !h-10"
              label="Stollar"
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <div>
          <AddSectionModal />
        </div>
      </div>
      <div className="flex-grow overflow-y-auto">
        <Sections />
      </div>
    </div>
  );
}

export default withLayout(Tables);
