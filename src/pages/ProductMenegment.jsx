import { useEffect, useState } from "react";
import withLayout from "./Mean";
import { Tab, Tabs } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CustomTabPanel from "../components/CustomTabPanel";
import { useGet } from "../api";
import { setProducts } from "../store/reducer/products";
import AddProduct from "../components/modals/AddProductModal";
import ProductsByMenu from "../components/ProductsByMenu";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ProductMenegment() {
  const dispatch = useDispatch();
  const { menus, products, admin } = useSelector((state) => state);
  const [value, setValue] = useState(0);

  console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGet(`/products?restaurant=${admin.admin?.restaurant}`)
      .then(({ data }) => {
        dispatch(setProducts(data));
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
          {menus.menus.map((item, index) => {
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
          <AddProduct />
        </div>
      </div>
      <div className="flex-grow overflow-y-auto pt-10">
        {menus.menus.map((item, index) => {
          return (
            <CustomTabPanel key={item._id} index={index} value={value}>
              <ProductsByMenu menu={item} />
            </CustomTabPanel>
          );
        })}
      </div>
    </div>
  );
}

export default withLayout(ProductMenegment);
