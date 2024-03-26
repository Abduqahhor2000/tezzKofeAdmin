import { Button } from "@mui/material";
import { useSelector } from "react-redux";

function Header() {
  const role = useSelector(state=> state.role?.role)
  const admin = useSelector(state=> state.admin.admin)
  // console.log(admin);

  function logout() {
    if(localStorage.getItem("role") !== "imperator"){
      localStorage.clear()
      window.location.href = "/signin"
    }else{
      localStorage.clear()
      window.location.href = "/login"
    }
  }

  return (
    <div className="py-3 px-8 bg-[#262626] flex justify-between">
      <span className="font-ClashDisplay font-semibold text-white text-2xl">
        {admin?.restaurant?.name || "TEZZCAFE"}
      </span>
      <Button onClick={()=>logout()} variant="contained" className="!px-0 !bg-slate-300 !w-8" >
        <img className="w-5 h-5" src="/logout.svg" alt="" />
      </Button>
    </div>
  );
}

export default Header;
