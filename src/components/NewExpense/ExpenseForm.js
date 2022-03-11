import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
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
          title: title,
          amount: amount,
          date: new Date(date),
      };
      console.log(expenseData);
  }

  return (
    <form onSubmit={onSubmitedForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>{title}</label>
          <input type="text" onChange={onInputTitleChange} />
        </div>
        <div className="new-expense__control">
          <label>{amount}</label>
          <input type="number" onChange={onInputAmountChange} />
        </div>
        <div className="new-expense__control">
          <label>{date}</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={onInputDateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
