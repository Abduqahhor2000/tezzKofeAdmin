import { IconButton, Modal } from "@mui/material";
import { useState } from "react";
import BaseInput from "../formItems/BaseInput";
import PrimerButton from "../PrimerButton";
import ImageInput from "../formItems/ImageInput";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function AddCategory() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <PrimerButton onClick={handleOpen}>+ Bo`lim qo`shish</PrimerButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <div
          style={{ ...style }}
          className="w-[360px] py-6 px-5 bg-white rounded-xl"
        >
          <div className="flex justify-between mb-6">
            <div className="text-xl font-semibold">Bo`lim qo`shish</div>
            <IconButton sx={{ p: '5px' }}>
               <img
              onClick={handleClose}
              src="/src/assets/x.svg"
              alt=""
              className="cursor-pointer"
            />
            </IconButton>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <ImageInput />
            <BaseInput placeholder="Nomi" label="Nomi" />
          </div>
          <div className="pt-6">
            <PrimerButton>Qo`shish</PrimerButton>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default AddCategory;
