import { IconButton, LinearProgress, Modal } from "@mui/material";
import { useEffect, useState } from "react";
import BaseInput from "../formItems/BaseInput";
import PrimerButton from "../PrimerButton";
import { useDispatch } from "react-redux";
import { usePost } from "../../api";
import { addType } from "../../store/reducer/types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function AddSection() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [popap, setPopap] = useState(false);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setName("");
  }, [open]);

  function addSectionFunc(e) {
    e.preventDefault();
    setLoading(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    usePost("/tables/type", {
      name,
    })
      .then(({ data }) => {
        // console.log(data);
        dispatch(addType(data))
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
      <PrimerButton onClick={() => setOpen(true)}>
        + Kategoriya qo’shish
      </PrimerButton>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <div style={{ ...style }} className="w-[360px] overflow-hidden bg-white rounded-xl">
          <div className="py-6 px-5">
            <div className="flex justify-between mb-6">
              <div className="text-xl font-semibold">Kategoriya qo’shish</div>
              <IconButton onClick={() => setOpen(false)} sx={{ p: "5px" }}>
                <img
                  src="/x.svg"
                  alt=""
                  className="cursor-pointer"
                />
              </IconButton>
            </div>
            <form onSubmit={addSectionFunc}>
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
                <PrimerButton disabled={loading} type="submit">Qo`shish</PrimerButton>
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
      </Modal>
    </>
  );
}

export default AddSection;
