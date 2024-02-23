import { IconButton, LinearProgress, Modal } from "@mui/material";
import { useState } from "react";
import BaseInput from "../formItems/BaseInput";
import PrimerButton from "../PrimerButton";
import ImageInput from "../formItems/ImageInput";
import PasswordInput from "../formItems/PasswordInput";
import { useDispatch } from "react-redux";
import { usePut } from "../../api";
import { editEmployee } from "../../store/reducer/employees";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function EditEmployee({ open, setOpen, employee }) {
  const dispatch = useDispatch();

  const [avatar, setAvatar] = useState(employee.avatar);
  const [phone, setPhone] = useState(employee.phone);
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState(employee.firstName);
  const [lastName, setLastName] = useState(employee.lastName);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [popap, setPopap] = useState(false);

  function editEmployeeFunc(e) {
    e.preventDefault();
    setLoading(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    usePut(`/waiters/${employee.id}`, {
      phone,
      firstName,
      lastName,
      avatar: avatar ? avatar : null,
      ...(password ? { password } : {}),
    })
      .then(({ data }) => {
        console.log(data);
        dispatch(editEmployee({...employee, phone, firstName, lastName, avatar}));
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
              <div className="text-xl font-semibold">Hodim tahrirlash</div>
              <IconButton onClick={() => setOpen(false)} sx={{ p: "5px" }}>
                <img
                  src="/x.svg"
                  alt=""
                  className="cursor-pointer"
                />
              </IconButton>
            </div>
            <form onSubmit={editEmployeeFunc}>
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
                    <span className="!text-sm !leading-5 !font-light">{`+998`}</span>
                  }
                />
                <PasswordInput
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className="pt-6">
                <PrimerButton disabled={loading} type="submit">Tahrirlash</PrimerButton>
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

export default EditEmployee;
