import { useEffect, useState } from "react";
import Cafe from "../components/cards/Cafe";
import AddCafe from "../components/modals/AddCafeModal";
import withLayout from "./Mean";
import { useGet } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { setCafes } from "../store/reducer/cafes";
import CafeSceleton from "../components/skeletons/CafeSceleton";
// eslint-disable-next-line react-refresh/only-export-components
function CafeShops() {
  const cafes = useSelector((state) => state.cafes.value);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGet("/restaurants")
      .then(({ data }) => {
        // console.log(data);
        dispatch(setCafes(data));
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, []);

  return (
    <div className="h-[calc(100vh-56px)] overflow-y-auto overflow-x-hidden">
      <div className="flex justify-end px-8">
        <div className="py-2">
          <AddCafe />
        </div>
      </div>
      <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-3 p-4 py-8 ">
        {loading && cafes.length < 1
          ? [1, 2, 3].map((item) => {
              return <CafeSceleton key={item} />;
            })
          : cafes.map((item) => {
              return <Cafe key={item.id} item={item} />;
            })}
      </div>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default withLayout(CafeShops);
