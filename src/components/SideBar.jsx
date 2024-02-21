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
            active: "/src/assets/home_active.svg",
            inactive: "/src/assets/home_def.svg",
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
                active: "/src/assets/employee_active.svg",
                inactive: "/src/assets/employee.svg",
              },
            }}
          />
          <ItemMenu
            data={{
              url: ["/tables"],
              text: "Stollar",
              svg: {
                active: "/src/assets/list_active.svg",
                inactive: "/src/assets/list.svg",
              },
            }}
          />
          <ItemMenu
            data={{
              url: ["/menus"],
              text: "Menu",
              svg: {
                active: "/src/assets/menu_active.svg",
                inactive: "/src/assets/menu.svg",
              },
            }}
          />
        </>
      )}
    </div>
  );
}

export default SideBar;
