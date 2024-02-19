import { Pen, Trash } from "../PenAndTrash";
import ThreeDots from "../ThreeDots";

function MenuCard() {
  function salom() {
    console.log("salom");
  }
  function qalay() {
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
          <div className="pb-1 font-semibold">Oshlar</div>
          <div className="text-gray-400 font-medium">Taomlar</div>
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

export default MenuCard;
