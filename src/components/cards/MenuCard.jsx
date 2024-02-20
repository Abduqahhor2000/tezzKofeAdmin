import { useState } from "react";
import { Pen, Trash } from "../PenAndTrash";
import ThreeDots from "../ThreeDots";
import DeleteMenu from "../modals/DeleteMenuModal";
import EditMenu from "../modals/EditMenuModal";

function MenuCard({ item }) {
  const [delOpen, setDelOpen] = useState();
  const [editOpen, setEditOpen] = useState();

  function salom() {
    setEditOpen(true)
    console.log("salom");
  }
  function qalay() {
    setDelOpen(true);
    console.log("qalay");
  }
  return (
    <>
      <div className="bg-gray-100 p-3 pr-5 flex rounded-lg">
        <img
          className="w-[120px] h-20 rounded-lg object-cover"
          src="/osh.png"
          alt=""
        />
        <div className="pl-3 text-sm flex-grow">
          <div className="pb-1 font-semibold">{item.name}</div>
          <div className="text-gray-400 font-medium">Taomlar</div>
        </div>
        <div className="relative -top-2.5 -right-4">
          <ThreeDots
            data={[
              {
                func: salom,
                content: <Pen />,
              },
              {
                func: qalay,
                content: <Trash />,
              },
            ]}
          />
        </div>
      </div>
      <DeleteMenu open={delOpen} setOpen={setDelOpen} id={item.id} />
      {editOpen ? (
        <EditMenu open={editOpen} setOpen={setEditOpen} menu={item} />
      ) : null}
    </>
  );
}

export default MenuCard;
