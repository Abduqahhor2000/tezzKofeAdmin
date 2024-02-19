import { Pen, Trash } from "../PenAndTrash";
import ThreeDots from "../ThreeDots";

function TableStatusCard() {
  function salom() {
    console.log("salom");
  }
  function qalay() {
    console.log("qalay");
  }
  return (
    <>
      <div className="w-[369px] bg-gray-100 p-4 flex rounded-lg">
        <div className="flex-grow">
          <div className="flex items-center pb-4">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
            <div className=" font-semibold text-xl leading-5">Stol-3</div>
          </div>

          <div className="text-gray-400 text-sm font-medium">Tesha Sobirov</div>
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
    </>
  );
}

export default TableStatusCard;
