import { Pen, Trash } from "../PenAndTrash";
import ThreeDots from "../ThreeDots";

function EmployeeCard() {
  function salom() {
    console.log("salom");
  }
  function qalay() {
    console.log("qalay");
  }
  return (
    <>
      <div className="bg-gray-100 p-4 flex rounded-lg">
        <img
          className="w-20 h-20 rounded-[10px] object-cover"
          src="/employee.png"
          alt=""
        />
        <div className="pl-3 text-sm flex-grow">
          <div className="pb-1 font-semibold">Davlatov Qudrat</div>
          <div className="text-gray-400">Komil o’g’li</div>
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

export default EmployeeCard;
