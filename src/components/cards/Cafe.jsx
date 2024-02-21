import { useState } from "react";
import { Pen, Trash } from "../PenAndTrash";
import ThreeDots from "../ThreeDots";
import DeleteCafe from "../modals/DeleteCafeModal";
import EditCafe from "../modals/EditCafeModal";

// eslint-disable-next-line react/prop-types
function Cafe({item}) {
  const [openDel, setOpenDel] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)

  function salom() {
    console.log("salom");
    setOpenEdit(true)
  }
  function qalay() {
    console.log("qalay");
    setOpenDel(true)
  }
  return (
    <div className="rounded-xl border-2 border-gray-100 p-5 text-sm text-gray-400 font-RedHat">
      <div className="flex justify-between items-start mb-7 font-RedHat">
        <div>{new Date(item?.createdAt).toLocaleDateString()}</div>
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
      <div className="flex justify-between items-start mb-7">
        <div>
          <h4 className="text-3xl text-black font-semibold font-RedHat">
            {item?.name}
          </h4>
          <p className="font-RedHat">{item?.director?.fullName}</p>
          <p className="font-RedHat">{item?.director?.phone}</p>
        </div>
        <div className="w-16 h-16 p-2 rounded-2xl bg-[#DBFA19]/20">
          <img
            className="object-cover h-[50px] w-[50px] rounded-lg"
            src="/emploe.png"
          />
        </div>
      </div>
      <div className="flex items-center bg-gray-100 rounded-lg px-2">
        <img src="/locate.svg" alt="" />
        <span className="block text-black text-xs px-1 py-2">
          {item?.address}
        </span>
      </div>
      <DeleteCafe open={openDel} setOpen={setOpenDel} id={item?.id} />
      {
        openEdit ? <EditCafe open={openEdit} setOpen={setOpenEdit} cafe={item} /> : null
      }
      
    </div>
  );
}

export default Cafe;
