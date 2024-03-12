import { IconButton, LinearProgress, Modal, Snackbar } from "@mui/material";
import { useState } from "react";
import BaseInput from "../formItems/BaseInput";
import PrimerButton from "../PrimerButton";
import SelectInput from "../formItems/SelectInput";
import CheckBox from "../formItems/CheckBox";
import { useDispatch, useSelector } from "react-redux";
import { usePut } from "../../api";
import { editTable } from "../../store/reducer/tables";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function EditTable({ open, setOpen, table }) {
  const { employees } = useSelector((state) => state.employees);
  const { types } = useSelector((state) => state.types);
  const dispatch = useDispatch();

  const [typeOfTable, setTypeOfTable] = useState(table.typeOfTable._id);
  const [name, setName] = useState(table.name);
  const [waiter, setWaiter] = useState(table.waiter ? table.waiter._id : "");
  const [forAll, setForAll] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function editTableFunc(e) {
    e.preventDefault();
    setLoading(true);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    usePut(`/tables/${table._id}`, {
      typeOfTable,
      name,
      waiter: waiter && !forAll ? waiter : null,
    })
      .then(({ data }) => {
        // console.log(data);
        dispatch(editTable(data));
        setLoading(false);
        setOpen(false);
      })
      .catch((e) => {
        console.log(e.message);
        setLoading(false);
        setError(e?.response?.data?.error[0]);
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
              <div className="text-xl font-semibold">Stol taxrirlash</div>
              <IconButton onClick={() => setOpen(false)} sx={{ p: "5px" }}>
                <img src="/x.svg" alt="" className="cursor-pointer" />
              </IconButton>
            </div>
            <form onSubmit={editTableFunc}>
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
      <Snackbar
        autoHideDuration={5000}
        color="danger"
        size="md"
        open={error}
        onClose={() => setError(() => "")}
        variant="outlined"
        content="salom"
        contextMenu="salom"
      >
        <span className="border-red border-2 p-4 py-2 rounded-xl text-red bg-white">
          {error}
        </span>
      </Snackbar>
    </>
  );
}

export default EditTable;
