import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/SignIn";
import CafeShops from "./pages/CafeShops";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import Tables from "./pages/Tables";
import Menus from "./pages/Menus";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import TableMenegment from "./pages/TableMenegment";
import ProductMenegment from "./pages/ProductMenegment";
import TableStatus from "./pages/TableStatus";

function App() {
    const role = useSelector(state=> state.role.role)
    console.log(role);
  const router = createBrowserRouter([
    {
      path: "/",
      element:
        role === "imperator" ? <CafeShops /> : <Home />,
    },
    {
      path: "/table_status/:table_id",
      element: <TableStatus />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/employees",
      element: <Employees />,
    },
    {
      path: "/tables",
      element: <Tables />,
    },
    {
      path: "/tables/type",
      element: <TableMenegment />,
    },
    {
      path: "/menus",
      element: <Menus />,
    },
    {
      path: "/menus/products",
      element: <ProductMenegment />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
