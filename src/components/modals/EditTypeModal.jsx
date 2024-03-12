import { IconButton, LinearProgress} from "@mui/material";
import { useState } from "react";
import BaseInput from "../formItems/BaseInput";
import PrimerButton from "../PrimerButton";
import { usePut } from "../../api";
import { useDispatch } from "react-redux";
import BoxModal from "./BoxModal";
import { editType } from "../../store/reducer/types";

function EditType({ open, setOpen, type }) {
  const dispatch = useDispatch();

  const [name, setName] = useState(type.name);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function editTypeFunc(e) {
    e.preventDefault();
    setLoading(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    usePut(`/tables/type/${type._id}`, {
      name,
    })
      .then(({ data }) => {
        // console.log(data);
        dispatch(editType({ ...type, ...data }));
        setLoading(false);
        setOpen(false);
      })
      .catch((e) => {
        console.log(e.message);
        setLoading(false);
        setError(e.message);
      });
  }

  return (
    <>
      <BoxModal open={open} onClose={() => setOpen(false)}>
        <div className="w-[360px]  overflow-hidden bg-white rounded-xl">
          <div className="py-6 px-5">
            <div className="flex justify-between mb-6">
              <div className="text-xl font-semibold">Kategoriyani tahrirlash</div>
              <IconButton onClick={() => setOpen(false)} sx={{ p: "5px" }}>
                <img
                  src="/x.svg"
                  alt=""
                  className="cursor-pointer"
                />
              </IconButton>
            </div>
            <form onSubmit={editTypeFunc}>
              <div className="grid grid-cols-1 gap-4">
                <BaseInput
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nomi"
                  label="Nomi"
                  required
                />
              </div>
              <div className="pt-6">
                <PrimerButton disabled={loading} type="submit">
                  Tahrirlash
                </PrimerButton>
              </div>
            </form>
          </div>
          <LinearProgress
            determinate="true"
            size="sm"
            value={25}
            className={loading ? "visible" : "invisible"}
          />
        </div>
      </BoxModal>
      {/* <Snackbar
        autoHideDuration={5000}
        color="danger"
        size="md"
        open={popap}
        onClose={setPopap}
        variant="outlined"
        content="salom"
        contextMenu="salom"
      >
        <span className="border-red border-2 p-4 py-2 rounded-xl text-red">
          {error}
        </span>
      </Snackbar> */}
    </>
  );
}

export default EditType;
