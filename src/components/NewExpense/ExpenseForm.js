import React, { useState } from 'react'
import "./ExpenseForm.css"

const ExpenseForm = (props) => {

  const[openCloseButton,setOpenCloseButton] =useState(false)
    const[inputValue,setInputValue]=useState({
        title:"",
        amount:"",
        date:""
    })

    const AddHandle=(e)=>{
        e.preventDefault()

        const newExpense={
          
          title: inputValue.title,
          amount: inputValue.amount,
          date:new Date (inputValue.date),

        }
        console.log(inputValue.date);
        props.onSaveExpenseData(newExpense)
        setInputValue({
            ...inputValue,
            title:"",
            amount:"",
            date:""
        })
        console.log(inputValue.date);
        console.log("çalıştı");
    }

  console.log(inputValue);
  

  const changeTrueFalse=()=>{
    openCloseButton=!openCloseButton
    console.log(openCloseButton);
  }
  return (
    openCloseButton?(<form onSubmit={AddHandle}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label htmlFor="">Title</label>
            <input value={inputValue.title} onChange={(e)=>setInputValue({...inputValue,title:e.target.value})} type="text" />
        </div>
        <div className='new-expense__control'>
            <label htmlFor="Title">Amount</label>
            <input value={inputValue.amount} onChange={(e)=>setInputValue({...inputValue,amount:e.target.value})} type="number" min="0.01" step="0.01"/>
        </div>
        <div className='new-expense__control'>
            <label htmlFor="Title">Date</label>
            <input value={inputValue.date} onChange={(e)=>setInputValue({...inputValue,date:e.target.value})} type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button onClick={()=>setOpenCloseButton(!openCloseButton)} type='button'>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
      
    </form>):(<div><button onClick={()=>setOpenCloseButton(!openCloseButton)} type='button'>Add New Expense</button></div>)
  )
}

export default ExpenseForm


