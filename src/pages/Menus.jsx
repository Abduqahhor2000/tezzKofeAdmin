import withLayout from "./Mean";
import AddSectionModal from "../components/modals/AddSectionModal";
import { Box, Tab, Tabs } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Sections from "../components/Sections";
import AddCategory from "../components/modals/AddCategoryModal";
import MenuSection from "../components/MenuSection";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Menus() {
  const navigate = useNavigate();
  return (
    <div className="h-[calc(100vh-56px)] overflow-y-auto overflow-x-hidden p-5 pb-0 flex flex-col">
      <div className="flex justify-between border-b-[1px] border-gray-200">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={0} aria-label="basic tabs example">
            <Tab
              className="!text-base !leading-4 !font-medium !normal-case !h-10"
              label="Menular"
              {...a11yProps(0)}
            />
            <Tab
              onClick={() => navigate("/menus/products")}
              className="!text-base !leading-4 !font-medium !normal-case !h-10"
              label="Taomlar"
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <div>
          <AddCategory />
        </div>
      </div>
      <div className="flex-grow overflow-y-auto">
        <MenuSection />
      </div>
    </div>
  );
}

export default withLayout(Menus);
