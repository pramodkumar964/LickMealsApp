import { useReducer } from 'react'
import CartContext from'./cart-context'

const defaultCartState={
    item:[],
    totalAmount:0
}
const cartReducer=(state,action)=>{
    if(action.type==='ADD'){
        const updatedItems=state.item.concat(action.item)
        const updatedAmounts=state.totalAmount + action.item.price *action.item.amount
        return {
            item:updatedItems,
            totalAmount: updatedAmounts
        }
    }
    return defaultCartState;
}
const CartProvider =(props)=>{

    const [cartState, dispatchCartAction]=useReducer(cartReducer, defaultCartState)
    const addItemToCartHandler=(item)=>{
        dispatchCartAction=({TYPE:'ADD', item:item})
    }
    const removeItemFromCartHandler=(id)=>{
        dispatchCartAction=({TYPE:'REMOVE', id:id})
    }


    const cartContext={
        item:cartState.item,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    };
    return<CartContext.Provider value={cartContext} onAddItem={addItemToCartHandler}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider