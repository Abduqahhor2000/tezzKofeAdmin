import { useSelector } from "react-redux";
import { Pen, Trash } from "../PenAndTrash";
import ThreeDots from "../ThreeDots";
import DeleteTable from "../modals/DeleteTableModal";
import { useState } from "react";
import EditTable from "../modals/EditTableModal";

function TableStatusCard({table}) {
  const {employees} = useSelector(state => state)

  const [delOpen, setDelOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)

  function salom() {
    setEditOpen(true)
    console.log("salom");
  }
  function qalay() {
    setDelOpen(true)
    console.log("qalay");
  }

  function waiterFullName(){
    const waiter = employees.employees.find((item)=> item._id === table.waiter)
    console.log(waiter);
    return waiter ? `${waiter.firstName} ${waiter.lastName}` : ""
  }

  return ( 
    <>
      <div className="bg-gray-100 p-4 flex rounded-lg">
        <div className="flex-grow">
          <div className="flex items-center pb-4">
            <div className={`w-3 h-3 rounded-full mr-1 ${table.waiter ? "bg-green-500": "bg-red"}`}></div>
            <div className=" font-semibold text-xl leading-5">{table.name}</div>
          </div>

          <div className="text-gray-400 text-sm font-medium">{waiterFullName()}</div>
        </div>
        <div className="relative -top-2.5 -right-4">
          <ThreeDots
            data={[
              {
                func: salom,
                content: <Pen/>,
              },
              {
                func: qalay,
                content: <Trash/>,
              },
            ]}
          />
        </div>
      </div> 
      <DeleteTable setOpen={setDelOpen} open={delOpen} id={table._id} />
      {
        editOpen ? <EditTable open={editOpen} setOpen={setEditOpen} table={table} /> : null
      }
    </>
  );
}

export default TableStatusCard;
