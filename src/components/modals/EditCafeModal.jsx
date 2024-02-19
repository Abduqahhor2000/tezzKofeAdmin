import { IconButton, LinearProgress, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import BaseInput from "../formItems/BaseInput";
import PrimerButton from "../PrimerButton";
import ImageInput from "../formItems/ImageInput";
import PasswordInput from "../formItems/PasswordInput";
import { usePut } from "../../api";
import { useDispatch } from "react-redux";
import { editCafe } from "../../store/reducer/cafes";
import BoxModal from "./BoxModal";

function EditCafe({ open, setOpen, cafe }) {
  const dispatch = useDispatch();

  const [avatar, setAvatar] = useState(cafe.photo);
  const [name, setName] = useState(cafe.name);
  const [fullName, setFullName] = useState(cafe?.director?.fullName);
  const [phone, setPhone] = useState(cafe.director.phone);
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState(cafe.address);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [popap, setPopap] = useState(false);

  function editCafeFunc(e) {
    e.preventDefault();
    setLoading(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    usePut(`/restaurants/${cafe.id}`, {
      name,
      address,
      location: address,
      photo: avatar ? avatar : null,
      ...(password ? {password} : {}),
      director:{
        ...cafe.director,
        avatar: avatar ? avatar : null,
        phone,
        fullName,
        ...(password ? {password} : {}),
      },
    })
      .then(({ data }) => {
        console.log(data);
        setLoading(false);
        setOpen(false);
        dispatch(editCafe({...cafe, ...data, director:{...cafe.director, fullName, phone}}));
        setPassword("")
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
              <div className="text-xl font-semibold">Kafeni tahrirlash</div>
              <IconButton onClick={() => setOpen(false)} sx={{ p: "5px" }}>
                <img
                  src="/src/assets/x.svg"
                  alt=""
                  className="cursor-pointer"
                />
              </IconButton>
            </div>
            <form onSubmit={editCafeFunc}>
              <div className="grid grid-cols-1 gap-4">
                <ImageInput
                  value={avatar}
                  onChange={(e) => setAvatar(e.target.value)}
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
                />
                <BaseInput
                  placeholder="Manzil"
                  label="Manzil"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  subText={
                    <span className="flex justify-center w-[24px]">
                      <img src="/src/assets/locate.svg" />
                    </span>
                  }
                />
              </div>
              <div className="pt-6">
                <PrimerButton type="submit" disabled={loading}>
                  Yangilash
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

export default EditCafe;
