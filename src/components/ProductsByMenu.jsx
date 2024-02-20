import { useSelector } from "react-redux"
import MealCard from "./cards/MealCard"

function ProductsByMenu({menu}) {
    const {products} = useSelector(state => state)
    console.log(products);
  return (
    <div className="grid grid-cols-3 gap-3">
       {
        products.products.map((item)=>{
            if(item.category !== menu._id){
                return null
            }
            return <MealCard key={item.id} product={item} />
        })
       }
    </div>
  )
}

export default ProductsByMenu