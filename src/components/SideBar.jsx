import { useSelector } from "react-redux";
import ItemMenu from "./ItemMenu";

function SideBar() {
  const role = useSelector((state)=> state.role.role)
  // console.log(".................state", state);
  return (
    <div className="py-8 px-3">
      <ItemMenu
        data={{
          url: ["/", "/table_status"],
          text: "Home",
          svg: {
            active: "/home_active.svg",
            inactive: "/home_def.svg",
          },
        }}
      />
     { role === "imperator" ? null : (
        <>
          <ItemMenu
            data={{
              url: ["/employees"],
              text: "Hodimlar",
              svg: {
                active: "/employee_active.svg",
                inactive: "/employee.svg",
              },
            }}
          />
          <ItemMenu
            data={{
              url: ["/tables"],
              text: "Stollar",
              svg: {
                active: "/list_active.svg",
                inactive: "/list.svg",
              },
            }}
          />
          <ItemMenu
            data={{
              url: ["/menus"],
              text: "Menu",
              svg: {
                active: "/menu_active.svg",
                inactive: "/menu.svg",
              },
            }}
          />
        </>
      )}
    </div>
  );
}

export default SideBar;
