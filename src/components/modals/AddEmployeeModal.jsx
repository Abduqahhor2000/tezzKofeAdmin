import { IconButton, LinearProgress, Modal } from "@mui/material";
import { useEffect, useState } from "react";
import BaseInput from "../formItems/BaseInput";
import PrimerButton from "../PrimerButton";
import ImageInput from "../formItems/ImageInput";
import PasswordInput from "../formItems/PasswordInput";
import { useDispatch } from "react-redux";
import { usePost } from "../../api";
import { addEmployee } from "../../store/reducer/employees";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function AddEmployee() {
  const dispatch = useDispatch();

  const [avatar, setAvatar] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

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
    setPassword("");
    setAvatar("");
    setError("");
    setFirstName("");
    setLastName("");
    setPhone("");
  }, [open]);

  function addEmployeeFunc(e) {
    e.preventDefault();
    setLoading(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    usePost("/waiters", {
      phone,
      password,
      firstName,
      lastName,
      ...(avatar ? {avatar} : {}),
    })
      .then(({ data }) => {
        // console.log(data);
        setLoading(false);
        setOpen(false);
        dispatch(addEmployee(data));
      })
      .catch((e) => {
        console.log(e.message);
        setLoading(false);
        setError(e.message);
      });
  }

  return (
    <>
      <PrimerButton onClick={handleOpen}>+ Hodim qo`shish</PrimerButton>
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
              <div className="text-xl font-semibold">Hodim qo`shish</div>
              <IconButton onClick={handleClose} sx={{ p: "5px" }}>
                <img
                  src="/x.svg"
                  alt=""
                  className="cursor-pointer"
                />
              </IconButton>
            </div>
            <form onSubmit={addEmployeeFunc}>
              <div className="grid grid-cols-1 gap-4">
                <ImageInput file={avatar} setFile={setAvatar} />
                <BaseInput
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  placeholder="Ism"
                  label="Ism"
                />
                <BaseInput
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  placeholder="Familiya"
                  label="Familiya"
                />
                <BaseInput
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  placeholder="941236767"
                  label="Telefon"
                  subText={
                    <span className="flex justify-center w-[24px]">
                    <img src="/person.svg" />
                  </span>
                  }
                />
                <PasswordInput
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
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

export default AddEmployee;
