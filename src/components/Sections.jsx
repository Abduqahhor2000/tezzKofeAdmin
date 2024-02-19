import { useEffect } from "react";
import { useGet } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { setTypes } from "../store/reducer/types";
import CategoryCard from "./cards/CategoryCard";

function Sections() {
  const types = useSelector((state => state.types.types))
  console.log(types);
  const dispatch = useDispatch();

  useEffect(() => {
    getTypes();
  }, []);

  function getTypes() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGet("/tables/type")
      .then(({ data }) => {
        dispatch(setTypes(data));
      })
      .catch((e) => console.log(e));
  }

  return <div className="grid grid-cols-3 gap-4 pt-10">{
     types.map((item)=> {
      return <CategoryCard key={item._id} item={item}/>
     })
  }</div>;
}

export default Sections;
