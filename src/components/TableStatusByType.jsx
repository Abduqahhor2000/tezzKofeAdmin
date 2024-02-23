
import { useSelector } from "react-redux"
import TableCard from "./cards/TableCard"

function TableStatusByType({type}) {
    const {tables} = useSelector(state => state)
    console.log(tables);
  return (
    <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-3">
       {
        tables.tables.map((item)=>{
            if(item.typeOfTable._id !== type._id){
                return null
            } 
            return <TableCard key={item.id} table={item} />
        })
       }
    </div>
  )
}

export default TableStatusByType