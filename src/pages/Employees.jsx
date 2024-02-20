import withLayout from "./Mean";
import AddEmployeeModal from "../components/modals/AddEmployeeModal";
import { Box, Tab, Tabs } from "@mui/material";
import EmployeesSection from "../components/EmployeesSection";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Employees() {
  return (
    <div className="h-[calc(100vh-56px)] overflow-y-auto overflow-x-hidden p-5 pb-0 flex flex-col">
      <div className="flex justify-between border-b-[1px] border-gray-200">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={0} aria-label="basic tabs example">
            <Tab
              className="!text-base !leading-4 !font-medium !normal-case !h-10"
              label="Afitsant"
              {...a11yProps(0)}
            />
          </Tabs>
        </Box>
        <div>
          <AddEmployeeModal />
        </div>
      </div>
      <div className="flex-grow overflow-y-auto">
        <EmployeesSection />
      </div>
    </div>
  );
}

export default withLayout(Employees);
