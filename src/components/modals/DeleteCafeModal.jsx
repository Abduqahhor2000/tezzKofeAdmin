import { useState } from "react";
import PrimerButton from "../PrimerButton";
import BoxModal from "./BoxModal";
import { useDelete } from "../../api";
import { useDispatch } from "react-redux";
import { DelCafe } from "../../store/reducer/cafes";
import { LinearProgress } from "@mui/material";

// eslint-disable-next-line react/prop-types
function DeleteCafe({ open, setOpen, id }) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  function delCafeFunc() {
    setLoading(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useDelete(`/restaurants/${id}`)
      .then((e) => {
        // console.log(e);
        dispatch(DelCafe(id));
        setLoading(false);
        setOpen(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }

  return (
    <>
      <BoxModal open={open} onClose={() => setOpen(false)}>
        <div className="w-[360px]  overflow-hidden bg-white rounded-xl">
          <div className="py-6 px-5">
            <div className="font-semibold text-center">
            Siz rostdan ham o`chirishni istaysizmi?
          </div>
          <div className="flex justify-between items-baseline pt-5">
            <PrimerButton onClick={delCafeFunc} disabled={loading}>
              Ha, albatta.
            </PrimerButton>
            <span className="px-5"></span>
            <PrimerButton onClick={() => setOpen(false)} color="error">
              Yo`q
            </PrimerButton>
          </div>
          </div>
           <LinearProgress
          determinate="true"
          size="sm"
          value={25}
          className={loading ? "visible" : "invisible"}
        />
        </div>
       
      </BoxModal>
    </>
  );
}

export default DeleteCafe;
