import { IconButton, LinearProgress, Modal, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import BaseInput from "../formItems/BaseInput";
import PrimerButton from "../PrimerButton";
import ImageInput from "../formItems/ImageInput";
import PasswordInput from "../formItems/PasswordInput";
import { usePost } from "../../api";
import { useDispatch } from "react-redux";
import { addCafe } from "../../store/reducer/cafes";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function AddCafe() {
  const dispatch = useDispatch()

  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [popap, setPopap] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setAddress("");
    setPassword("");
    setAvatar("");
    setError("");
    setFullName("");
    setName("");
    setPhone("");
  }, [open]);

  function addCafeFunc(e) {
    e.preventDefault();
    setLoading(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    usePost("/restaurants", {
      phone,
      name,
      address,
      location: address,
      photo: avatar ? avatar : null,
      director: { fullName, phone, password, avatar: avatar ? avatar : null },
    })
      .then(({ data }) => {
        console.log(data);
        setLoading(false);
        setOpen(false);
        dispatch(addCafe(data))
      })
      .catch((e) => {
        console.log(e.message);
        setLoading(false);
        setError(e.message);
      });
  }

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
          className="w-[360px] overflow-hidden bg-white rounded-xl"
        >
          <div className="py-6 px-5">
            <div className="flex justify-between mb-6">
              <div className="text-xl font-semibold">Kafe yaratish</div>
              <IconButton onClick={handleClose} sx={{ p: "5px" }}>
                <img
                  src="/x.svg"
                  alt=""
                  className="cursor-pointer"
                />
              </IconButton>
            </div>
            <form onSubmit={addCafeFunc}>
              <div className="grid grid-cols-1 gap-4">
                <ImageInput
                  file={avatar}
                  value={avatar}
                  setFile={setAvatar}
                />
                <BaseInput
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Nomi"
                  label="Nomi"
                />
                <BaseInput
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  placeholder="Direktor"
                  label="Direktor"
                />
                <BaseInput
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="941236767"
                  label="Telefon"
                  required
                  subText={
                    <span className="!text-sm !leading-5 !font-light">{`+998`}</span>
                  }
                />
                <PasswordInput
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <BaseInput
                  placeholder="Manzil"
                  label="Manzil"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  subText={
                    <span className="flex justify-center w-[24px]">
                      <img src="/locate.svg" />
                    </span>
                  }
                />
              </div>
              <div className="pt-6">
                <PrimerButton type="submit" disabled={loading}>
                  Qo`shish
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
      <Snackbar
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
      </Snackbar>
    </>
  );
}

export default AddCafe;
