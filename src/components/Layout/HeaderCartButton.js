import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context'
import { useContext } from 'react';
const HeaderCartButton = (props) => {

  const CartCtx = useContext(CartContext);
  console.log(CartCtx)
   const numberOfItem= CartCtx.item.reduce((currrNumber,item)=>{
    return currrNumber + item.amount ;
   },0)

  return (
    <button className={classes.button}  onClick={props.onCartClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItem}</span>
    </button>
  );
};

export default HeaderCartButton;
