import { useState } from "react";
import { Pen, Trash } from "../PenAndTrash";
import ThreeDots from "../ThreeDots";
import DeleteType from "../modals/DeleteTypeModal";
import EditType from "../modals/EditTypeModal";

function CategoryCard({item}) {
  const [editOpen, setEditOpen] = useState(false)
  const [delOpen, setDelOpen] = useState(false)
  
  function salom() {
    console.log("salom");
    setEditOpen(true)
  }
  function qalay() {
    console.log("qalay");
    setDelOpen(true)
  }
  return (
    <>
      <div className="bg-gray-100 p-4 flex rounded-lg">
        <div className="pl-3 text-sm flex-grow">
          <div className="pb-3 font-bold text-[32px] leading-8">{item.name}</div>
          <div className="text-gray-400 text-sm font-medium">
            7 ta stol mavjud
          </div>
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
      <DeleteType setOpen={setDelOpen} open={delOpen} id={item._id} />
      {
        editOpen ? <EditType open={editOpen} setOpen={setEditOpen} type={item} /> : null
      }
    </>
  );
}

export default CategoryCard;
