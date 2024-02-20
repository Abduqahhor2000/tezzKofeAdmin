import { useSelector } from "react-redux"
import TableStatusCard from "./cards/TableStatusCard"

function TablesByType({type}) {
    const {tables} = useSelector(state => state)
  return (
    <div className="grid grid-cols-3 gap-3">
       {
        tables.tables.map((item)=>{
            if(item.typeOfTable !== type._id){
                return null
            }
            return <TableStatusCard key={item.id} table={item} />
        })
       }
    </div>
  )
}

export default TablesByType