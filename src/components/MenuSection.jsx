import { useEffect } from "react";
import { useGet } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { setMenus } from "../store/reducer/menus";
import MenuCard from "./cards/MenuCard";

function MenuSection() {
  const {menus} = useSelector(state => state.menus)
  const {admin} = useSelector(state => state.admin)
  // console.log(menus, admin);
  const dispatch = useDispatch();

  useEffect(() => {
    getMenus();
  }, []);

  function getMenus() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGet(`/categories?restaurant=${admin?.restaurant}`)
      .then(({ data }) => {
        // console.log(data);
        dispatch(setMenus(data));
      })
      .catch((e) => console.log(e));
  }

  return <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 pt-10">{
     menus.map((item)=> {
      return <MenuCard key={item._id} item={item}/>
     })
  }</div>;
}

export default MenuSection;
