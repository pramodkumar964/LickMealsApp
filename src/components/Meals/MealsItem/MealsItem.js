import { useContext } from "react"
import MealsItemForm from "./mealsItemForm"
import classes from'./MealItem.module.css'
import CartContext from '../../../store/cart-context'
const MealsItem =(props)=>{

    const price=`$${props.price}`
    const CartCtx =useContext(CartContext)
    const addToCartHandler=(amount)=>{
        CartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        }
        )
    }
    return(
        <li className={classes.meal}>
<div >
    <h3>{props.name}</h3>

<div className={classes.description}>
    {props.description}
</div>
<div className={classes.price}>
    {price}
    </div>
</div>
<div>
    <MealsItemForm  onAddTocart ={addToCartHandler}/>

</div>
 </li>
    )
}
export default MealsItem