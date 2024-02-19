import { useEffect} from "react";
import Cafe from "../components/cards/Cafe";
import AddCafe from "../components/modals/AddCafeModal";
import withLayout from "./Mean";
import { useGet } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { setCafes } from "../store/reducer/cafes";
// eslint-disable-next-line react-refresh/only-export-components
function CafeShops() {
  const cafes = useSelector(state => state.cafes.value)
  const dispatch = useDispatch()
  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGet("/restaurants").then(({data}) => {
      // console.log(data);
      dispatch(setCafes(data))
    }).catch((e)=> console.log(e))
  }, []);

  return (
    <div className="h-[calc(100vh-56px)] overflow-y-auto overflow-x-hidden">
      <div className="flex justify-end px-8">
        <div className="py-2">
          <AddCafe />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 p-4 py-8 ">
        {
          cafes.map((item)=>{
            return (<Cafe key={item.id} item={item}/>)
          })
        }
      </div>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default withLayout(CafeShops);
