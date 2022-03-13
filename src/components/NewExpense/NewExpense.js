import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setEditing] = useState(false);

  const saveExpenseDataHanlder = (newExpenseData) => {
    props.onAddExpense(newExpenseData);
    setEditing(false);
  };

  const startEditing = () => {
    setEditing(true);
  };

  const cancelEditing = () => {
      setEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing ? (
        <button onClick={startEditing}>Add New Expense</button>
      ) : (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHanlder} onCancelEditing={cancelEditing} />
      )}
    </div>
  );
};

export default NewExpense;
