import { useEffect } from "react";
import { useGet } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { setTypes } from "../store/reducer/types";
import CategoryCard from "./cards/CategoryCard";
import { setTables } from "../store/reducer/tables";

function Sections() {
  const types = useSelector((state) => state.types.types);
  console.log(types);
  const dispatch = useDispatch();

  useEffect(() => {
    getTypes();
    getTables();
  }, []);

  function getTypes() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGet("/tables/type")
      .then(({ data }) => {
        dispatch(setTypes(data));
      })
      .catch((e) => console.log(e));
  }
  function getTables() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGet("/tables")
      .then(({ data }) => {
        dispatch(setTables(data));
      })
      .catch((e) => console.log(e));
  }

  return (
    <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 pt-10">
      {types.map((item) => {
        return <CategoryCard key={item._id} item={item} />;
      })}
    </div>
  );
}

export default Sections;
