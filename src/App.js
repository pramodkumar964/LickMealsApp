
import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/meals';
import CartProvider from'./store/cartProvider'
import Cart from './components/Cart/Cart'

function App() {

  const [cartIsShown, setCartIsShown]=useState(false);
const cartShowHandler=()=>{
    setCartIsShown(true)
  }
 const  cartHideHandler=()=>{
    setCartIsShown(false)
  }
  return (
   <CartProvider>
   {cartIsShown&& <Cart  onClose={cartHideHandler}/> }
  <Header  onShowCart={cartShowHandler}/>
  <main>
  <Meals />
  </main>
  
  </CartProvider>
  
  );
}

export default App;
