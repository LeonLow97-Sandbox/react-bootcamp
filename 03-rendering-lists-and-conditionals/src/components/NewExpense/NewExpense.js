import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [openExpenseForm, setOpenExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString,
    };
    props.onAddExpense(expenseData);
    setOpenExpenseForm(false)
  };

  const newExpenseHandler = () => {
    setOpenExpenseForm(true);
  };

  const cancelExpenseHandler = () => {
    setOpenExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {!openExpenseForm && (
        <button onClick={newExpenseHandler}>Add New Expense</button>
      )}
      {openExpenseForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
