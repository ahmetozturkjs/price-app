import React from 'react'
import "./NewExpense.css"
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const saveExpenseDataHandler=(enteredExpenseData)=>{
    const newExpenseDate={
      ...enteredExpenseData,
      id:new Date().getTime().toString()
    }
    console.log(newExpenseDate);
    props.addNewExpenseToArray(newExpenseDate)
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense
