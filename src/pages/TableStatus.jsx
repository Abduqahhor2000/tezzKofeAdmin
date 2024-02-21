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

  console.log(tables, params.table_id);

  useEffect(() => {
    setTable(tables.find((table) => table._id === params.table_id));
  }, []);

  return (
    <div className="h-[calc(100vh-56px)] overflow-y-auto overflow-x-hidden p-5 pb-0 flex flex-col">
      <div className="flex justify-between border-b-[1px] border-gray-200">
        <div
          onClick={() => navigate("/")}
          className="text-sm leading-none rounded-lg py-3 px-5 text-primary bg-[rgb(243,216,242)] mb-2 cursor-pointer"
        >
          {table?.name}
        </div>
        <div></div>
      </div>
      <div className="flex-grow overflow-y-auto pt-10">
        <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4">
          {table
            ? table.totalOrders.map((item) => {
                return <OrderCard key={item} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default withLayout(TableStatus);
