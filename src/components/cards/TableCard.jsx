import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function TableCard({table}) {
  const {employees} = useSelector(state => state.employees)
  const [waiter, setWaiter] = useState()
  const navigate = useNavigate()
  console.log(table);

  useEffect(()=>{ getWaiter()}, [employees])
  
  function getWaiter(){
    const waiter = employees.find((item)=> item._id === table.waiter)
    setWaiter(waiter)
  }

  return (
    <div onDoubleClick={() => navigate(`/table_status/${table._id}`)} className="p-5 border-[rgb(230, 230, 230)] border-[1px] cursor-pointer rounded-xl font-SFProDisplay">
      <div className="flex justify-between pb-6">
        <div>
          <div className="text-[32px] font-semibold leading-10">{table.name}</div>
          <p className="pt-1 text-sm leading-[17px] text-gray-400 font-medium">
            {waiter ? `${waiter.firstName} ${waiter.lastName}` :  null}
          </p>
        </div>
        {
          waiter ? <div className="w-16 h-16 p-2 rounded-2xl bg-[#DBFA19]/20">
          <img
            className="object-cover h-[50px] w-[50px] rounded-lg"
            src="/emploe.png"
          />
        </div> : null
        }
       
      </div> 
      <div className="flex justify-between items-center">
        <div className="self-end text-lg leading-[21px] text-gray-500 font-semibold">{table.totalPrice || 0} so’m</div>
        {
          table.activeItems > 0 ? <div className="pl-1 pr-5 bg-[rgba(255,0,28,0.1)] rounded-full flex items-center">
            <img src="/bell.svg" alt="" />
            <span className="pl-1 text-red text-base leading-4 font-medium py-2">Chaqiruv</span>
        </div> : null
        }
        
      </div>
    </div>
  );
}

export default TableCard;
