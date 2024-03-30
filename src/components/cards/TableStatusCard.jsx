import { Download, Pen, Trash } from "../PenAndTrash";
import ThreeDots from "../ThreeDots";
import DeleteTable from "../modals/DeleteTableModal";
import { useState } from "react";
import EditTable from "../modals/EditTableModal";
import { useGetPhoto } from "../../api";

function TableStatusCard({ table }) {

  const [delOpen, setDelOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  function salom() {
    setEditOpen(true);
    // console.log("salom");
  }
  function qalay() {
    setDelOpen(true);
    // console.log("qalay");
  }
  async function yukla(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const response = await useGetPhoto("/uploads/" + table?.qrCode, {
      responseType: "arraybuffer",
    });

    // Convert the binary data to a blob
    const blob = new Blob([response.data], {
      type: response.headers["content-type"],
    });
     
    const imageUrl = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = table?.qrCode; 
  
    link.click();
    
    window.URL.revokeObjectURL(url);
  }
  console.log(table);

  return (
    <>
      <div className="bg-gray-100 p-4 flex rounded-lg">
        <div className="flex-grow">
          <div className="flex items-center pb-4">
            <div
              className={`w-3 h-3 rounded-full mr-1 ${
                table.setWaiterByAdmin
                 ? "bg-green-500" : "bg-red"
              }`}
            ></div>
            <div className="font-unbounded font-semibold text-xl leading-5">
              {table.name}
            </div>
          </div>

          <div className="text-gray-400 text-sm font-SFProDisplay font-medium">
            {table?.setWaiterByAdmin
              ? `${table?.waiter?.firstName} ${table?.waiter?.lastName}`
              : "Umumiy"}
          </div>
        </div>
        <div className="relative -top-2.5 -right-4">
          <ThreeDots
            data={[
              {
                func: yukla,
                content: <Download />,
              },
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
      <DeleteTable setOpen={setDelOpen} open={delOpen} id={table._id} />
      {editOpen ? (
        <EditTable open={editOpen} setOpen={setEditOpen} table={table} />
      ) : null}
    </>
  );
}

export default TableStatusCard;
