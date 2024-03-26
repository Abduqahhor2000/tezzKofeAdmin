import { useSelector } from "react-redux";
import TableCard from "./cards/TableCard";
import TableSceleton from "./skeletons/TableSceleton";

function TableStatusByType({ type }) {
  const { tables, tableLoading } = useSelector((state) => state.tables);

  return (
    <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-3">
      {tableLoading && tables.length < 1
        ? [1, 2, 3].map((item) => {
            return <TableSceleton key={item} />;
          })
        : tables.map((item) => {
            if (item.typeOfTable._id !== type._id || !item.occupied) {
              return null;
            }
            return <TableCard key={item._id} table={item} />;
          })}
      {}
      {}
    </div>
  );
}

export default TableStatusByType;
