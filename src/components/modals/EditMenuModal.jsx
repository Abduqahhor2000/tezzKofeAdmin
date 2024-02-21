import { IconButton, LinearProgress, Modal } from "@mui/material";
import { useState } from "react";
import BaseInput from "../formItems/BaseInput";
import PrimerButton from "../PrimerButton";
import ImageInput from "../formItems/ImageInput";
import { usePut } from "../../api";
import { useDispatch } from "react-redux";
import { editMenu } from "../../store/reducer/menus";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function EditMenu({open, setOpen, menu}) {
  const dispatch = useDispatch();

  const [name, setName] = useState(menu.name);
  const [photo, setPhoto] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function editMenuFunc(e) {
    e.preventDefault();
    setLoading(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    usePut(`/categories/${menu.id}`, {
      name,
      photo: photo ? photo : null,
    })
      .then(({ data }) => {
        console.log(data);
        dispatch(editMenu(data));
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
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <div
          style={{ ...style }}
          className="w-[360px] overflow-hidden bg-white rounded-xl"
        >
          <div className="py-6 px-5">
            <div className="flex justify-between mb-6">
              <div className="text-xl font-semibold">Menu taxrirlash</div>
              <IconButton onClick={() => setOpen(false)} sx={{ p: "5px" }}>
                <img
                  src="/x.svg"
                  alt=""
                  className="cursor-pointer"
                />
              </IconButton>
            </div>
            <form onSubmit={editMenuFunc}>
              <div className="grid grid-cols-1 gap-4">
                <ImageInput />
                <BaseInput
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Nomi"
                  label="Nomi"
                />
              </div>
              <div className="pt-6">
                <PrimerButton disabled={loading} type="submit">
                  Taxrirlash
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
      </Modal>
    </>
  );
}

export default EditMenu;
