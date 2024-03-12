import { useState } from "react";
import { Pen, Trash } from "../PenAndTrash";
import ThreeDots from "../ThreeDots";
import DeleteEmployee from "../modals/DeleteEmployeeModal";
import EditEmployee from "../modals/EditEmployeeModal";
import ImageDownloader from "../ImageDownloader";

function EmployeeCard({item}) {
  const [openDel, setOpenDel] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  // console.log(item);
  function salom() {
    // console.log("salom");
    setOpenEdit(true)
  }
  function qalay() {
    // console.log("qalay");
    setOpenDel(true)
  }
  return (
    <>
      <div className="bg-gray-100 p-4 flex rounded-lg">
        <ImageDownloader
          className="w-20 h-20 rounded-[10px] object-cover"
          url={item.avatar}
          alt=""
        />
        <div className="pl-3 text-sm flex-grow">
          <div className="pb-1 font-semibold font-unbounded">{item.firstName} {item.lastName}</div>
          <div className="text-gray-400 font-SFProDisplay font-medium"></div>
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
      <DeleteEmployee open={openDel} setOpen={setOpenDel} id={item?.id} />
      {
        openEdit ? <EditEmployee open={openEdit} setOpen={setOpenEdit} employee={item} /> : null
      }
    </>
  );
}

export default EmployeeCard;
