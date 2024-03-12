import { useSelector } from "react-redux"
import TableStatusCard from "./cards/TableStatusCard"

function TablesByType({type}) {
    const {tables} = useSelector(state => state.tables)
  return (
    <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-3">
       {
        tables.map((item)=>{
            if(item.typeOfTable._id !== type._id){
                return null
            } 
            return <TableStatusCard key={item._id} table={item} />
        })
       }
    </div>
  )
}

export default TablesByType