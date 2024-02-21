function OrderCard() {
  return (
    <>
      <div className="rounded-xl p-4 bg-gray-100">
        <div className="pb-2 flex justify-between border-b-[1px] border-gray-200">
          <div className="flex items-center">
            <span className="block w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="px-2 text-gray-500 text-base ">Chaqiruv</span>
            <span className="text-xs leading-tight text-gray-400 pt-1">/ 12:00</span>
          </div>
          <img src="/x.svg" alt=""/>
        </div>
        <div className="pt-3 flex">
            <img className="w-20 h-20 rounded-[10px] object-cover" src="/shashlik.png" alt=""/>
            <div className="pl-3">
             <div className="pb-2 text-sm font-semibold">G’ijduvon shashlik Ajoyib shashlik</div>
             <div className="text-xs text-gray-400">56 000 uzs</div>
             <div className="pt-1 text-sm font-semibold text-gray-500"><span className="text-primary"> 3 ta : </span> 168 000 uzs</div>
            </div>
        </div>
      </div>
    </>
  );
}

export default OrderCard;
