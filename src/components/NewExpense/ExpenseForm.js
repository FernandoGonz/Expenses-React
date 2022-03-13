import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const onInputTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onInputAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const onInputDateChange = (event) => {
    setDate(event.target.value);
  };

  const onSubmitedForm = (event) => {
    event.preventDefault(); // To prevent reloading again
    const expenseData = {
      id: Math.random().toString,
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    // Returning data to NewExpense.js class
    props.onSaveExpenseData(expenseData);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={onSubmitedForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={onInputTitleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={amount} onChange={onInputAmountChange} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            min="2019-01-01"
            max="2022-12-31"
            onChange={onInputDateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancelEditing}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
