
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "../NewExpense/ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onfilteredYear={filteredYear}
        onfilterChangeHandler={filterChangeHandler}
      />
      <ExpenseChart expense={filteredExpenses}/>
      <ExpensesList expenses={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
