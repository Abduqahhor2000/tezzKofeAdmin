import { useEffect, useState } from "react";
import withLayout from "./Mean";
import { Box, Tab, Tabs } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import AddTable from "../components/modals/AddTableModal";
import TablesByType from "../components/TablesByType";
import CustomTabPanel from "../components/CustomTabPanel";
import { useGet } from "../api";
import { setTables } from "../store/reducer/tables";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TableMenegment() {
  const dispatch = useDispatch();
  const { types, tables } = useSelector((state) => state);
  const [value, setValue] = useState(0);

  console.log(tables);

  useEffect(() => {
    getTable();
  }, []);

  function getTable() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGet("/tables")
      .then(({ data }) => {
        dispatch(setTables(data));
      })
      .catch((e) => console.log(e));
  }

  return (
    <div className="h-[calc(100vh-56px)] overflow-y-auto overflow-x-hidden p-5 pb-0 flex flex-col">
      <div className="flex justify-between border-b-[1px] border-gray-200">
        <Tabs
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          arida-label="basic tabs example"
        >
          {types.types.map((item, index) => {
            return (
              <Tab
                key={item.id}
                className="!text-base !leading-4 !font-medium !normal-case !h-10"
                label={item.name}
                {...a11yProps(index)}
              />
            );
          })}
        </Tabs>

        <div>
          <AddTable />
        </div>
      </div>
      <div className="flex-grow overflow-y-auto pt-10">
        {types.types.map((item, index) => {
          return (
            <CustomTabPanel key={item._id} index={index} value={value}>
              <TablesByType type={item} />
            </CustomTabPanel>
          );
        })}
      </div>
    </div>
  );
}

export default withLayout(TableMenegment);
