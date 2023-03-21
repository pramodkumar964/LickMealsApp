import React from 'react'
import classes from './InputForm.module.css'
const InputForm=React.forwardRef((props,ref)=>{
    return(
<div >
    <label className={classes.input}>{props.label}</label>
    <input ref={ref} {...props.input} className={classes.input}/>
</div>
    )
});

export default InputForm;