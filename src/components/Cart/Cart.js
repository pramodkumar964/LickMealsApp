import classes from './Cart.module.css'
import Modal from '../UI/Modal'
const Cart =(props)=>{
    const cartItems= <ul className={classes['cart-items']}>{[{id:'c1', name:'chicken Biryani', amount:'34', price:'2'}].map(item=><li>{item.name}</li>)}</ul>
    return(
        <Modal onModalClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>$56</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button-alt']} onClick={props.onClose}> close</button>
                <button className={classes.button}>Order</button>
            </div>
           
        </Modal>
    )
}

export default Cart;