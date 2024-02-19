import { IconButton, Modal } from "@mui/material";
import { useState } from "react";
import BaseInput from "../formItems/BaseInput";
import PrimerButton from "../PrimerButton";
import ImageInput from "../formItems/ImageInput";
import SelectInput from "../formItems/SelectInput";
import TextareaInput from "../formItems/TextareaInput";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function AddProduct() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <PrimerButton onClick={handleOpen}>+ Kafe yaratish</PrimerButton>
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
            <div className="text-xl font-semibold">Kafe yaratish</div>
            <IconButton sx={{ p: "5px" }}>
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
            <SelectInput label="Kategoriya" />
            <BaseInput placeholder="Ovqat nomi" label="Nomi" />
            <BaseInput placeholder="10 000" label="Narxi" type="number"  />
            <TextareaInput
              multiline
              maxRows={4}
              placeholder="Tarkibini kiriting"
              label="Tarkibi"
            />
          </div>
          <div className="pt-6">
            <PrimerButton>Qo`shish</PrimerButton>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default AddProduct;
