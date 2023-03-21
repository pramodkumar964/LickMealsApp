import { useRef, useState } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
const MealsItemForm =(props)=>{
    const [amountIsValid, setAmountIsValid]= useState(true)
    const amountInputRef=useRef();
const submitHandler=event=>{
    event.preventDefault();
const enteredAmount=amountInputRef.current.defaultValue;
const enteredAmountNumber=+enteredAmount;
if(enteredAmount.TRIM().length=== 0 || enteredAmountNumber < 1 || enteredAmountNumber <5){
    setAmountIsValid(false)
    return;

}
props.onAddToCart(enteredAmountNumber)
}
    return(
<form className={classes.mealForm} onSubmit={submitHandler}>
    <Input className={classes.inputItem}
         ref={amountInputRef}
      label ='Amount'  
      input={{
        ref:{amountInputRef},
        id:'amount',
        type:'number',
        min :'1',
        max:'5',
        step:'1',
        defaultValue:'1' 
        }}/>
    <button className={classes.button}>ADD</button> 
    {!amountIsValid && <p>please enter valid amount 1-5</p>}
    </ form>
    );
}

export default MealsItemForm