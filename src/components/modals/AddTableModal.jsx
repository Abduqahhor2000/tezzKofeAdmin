import { IconButton, LinearProgress, Modal } from "@mui/material";
import { useEffect, useState } from "react";
import BaseInput from "../formItems/BaseInput";
import PrimerButton from "../PrimerButton";
import SelectInput from "../formItems/SelectInput";
import CheckBox from "../formItems/CheckBox";
import { useDispatch, useSelector } from "react-redux";
import { usePost } from "../../api";
import { addTable } from "../../store/reducer/tables";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function AddTable() {
  const { employees } = useSelector((state) => state?.employees);
  const { types } = useSelector((state) => state?.types);
  const dispatch = useDispatch();

  const [typeOfTable, setTypeOfTable] = useState("");
  const [name, setName] = useState("");
  const [waiter, setWaiter] = useState("");
  const [forAll, setForAll] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTypeOfTable("");
    setName("");
    setWaiter("");
    setForAll(false);
  }, [open]);

  function addTableFunc(e) {
    e.preventDefault();
    setLoading(true);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    usePost("/tables", {
      typeOfTable,
      name,
      waiter: waiter && !forAll ? waiter : null,
    })
      .then(({ data }) => {
        // console.log(data);
        dispatch(addTable(data));
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
      <PrimerButton onClick={() => setOpen(true)}>+ Stol qo`shish</PrimerButton>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <div style={{ ...style }} className="w-[360px] overflow-hidden bg-white rounded-xl">
          <div className="py-6 px-5">
            <div className="flex justify-between mb-6">
              <div className="text-xl font-semibold">Stol qo`shish</div>
              <IconButton onClick={() => setOpen(false)} sx={{ p: "5px" }}>
                <img
                  src="/x.svg"
                  alt=""
                  className="cursor-pointer"
                />
              </IconButton>
            </div>
            <form onSubmit={addTableFunc}>
              <div className="grid grid-cols-1 gap-4">
                <SelectInput
                  value={typeOfTable}
                  onChange={(e) => setTypeOfTable(e.target.value)}
                  label="Kategoriya"
                  options={types?.map((item) => ({
                    value: item._id,
                    label: item.name,
                  }))}
                  required
                />
                <BaseInput
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Nomi"
                  label="Nomi"
                  required
                />
                <div>
                  <SelectInput
                    disabled={forAll}
                    value={waiter}
                    onChange={(e) => setWaiter(e.target.value)}
                    className="mb-2.5"
                    label="Afitsant"
                    options={employees?.map((item) => ({
                      value: item._id,
                      label: `${item.firstName} ${item.lastName}`,
                    }))}
                  />
                  <CheckBox
                    checked={forAll}
                    onClick={() => setForAll(!forAll)}
                  />
                </div>
              </div>
              <div className="pt-6">
                <PrimerButton disabled={loading} type="submit">
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
    </>
  );
}

export default AddTable;
