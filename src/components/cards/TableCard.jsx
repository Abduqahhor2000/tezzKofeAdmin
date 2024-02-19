function TableCard() {
  return (
    <div className="p-5 border-[rgb(230, 230, 230)] border-[1px] rounded-xl">
      <div className="flex justify-between pb-6">
        <div>
          <div className="text-[32px] font-semibold leading-10">Stol-7</div>
          <p className="pt-1 text-sm leading-[17px] text-gray-400">
            Diyorbek Jamolov
          </p>
        </div>
        <div className="w-16 h-16 p-2 rounded-2xl bg-[#DBFA19]/20">
          <img
            className="object-cover h-[50px] w-[50px] rounded-lg"
            src="/emploe.png"
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="self-end text-lg leading-[21px] text-gray-500 font-semibold">234 500 so’m</div>
        <div className="pl-1 pr-5 bg-[rgba(255,0,28,0.1)] rounded-full flex items-center">
            <img src="/src/assets/bell.svg" alt="" />
            <span className="pl-1 text-red text-base leading-4 font-medium py-2">Chaqiruv</span>
        </div>
      </div>
    </div>
  );
}

export default TableCard;
