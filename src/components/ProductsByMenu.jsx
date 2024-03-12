import { useSelector } from "react-redux"
import MealCard from "./cards/MealCard"

function ProductsByMenu({menu}) {
    const {products} = useSelector(state => state.products)
    // console.log(products);
  return (
    <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-3">
       {
        products.map((item)=>{
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