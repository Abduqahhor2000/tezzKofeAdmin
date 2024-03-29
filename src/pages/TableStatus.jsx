import { useEffect, useState } from "react";
import withLayout from "./Mean";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import OrderCard from "../components/cards/OrderCard";

function TableStatus() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [table, setTable] = useState(null);
  const { tables } = useSelector((state) => state.tables);

  // console.log("sadadasdasd", table, params.table_id);

  useEffect(() => {
    setTable(tables.find((table) => table._id === params.table_id));
  }, []);

  return (
    <div className="h-[calc(100vh-56px)] overflow-y-auto overflow-x-hidden p-5 pb-0 flex flex-col">
      <div className="flex justify-between border-b-[1px] border-gray-200">
        <div
          onClick={() => navigate("/")}
          className="text-sm leading-none rounded-lg py-3 px-5 text-primary bg-[rgb(243,216,242)] mb-2 cursor-pointer font-semibold font-SFProDisplay"
        >
          {table?.name}
        </div>
        <div className="text-lg leading-5 text-gray-500 font-semibold font-SFProDisplay">{table?.totalOrders?.totalPrice || 0} {`so'm`}</div>
      </div>
      <div className="flex-grow overflow-y-auto pt-10">
        <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4">
          {/* {table?.activeOrders?.products?.length > 0
            ? table?.activeOrders.products.map((item) => {
                return <OrderCard key={item.id} order={item} />;
              })
            : null} */}
          {table?.totalOrders?.products?.length > 0
            ? table?.totalOrders.products.map((item) => {
                return <OrderCard key={item._id} order={item} time={table?.totalOrders?.updatedAt}/>;
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default withLayout(TableStatus);
