import React from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const saveExpenseDataHanlder = (newExpenseData) => {
        props.onAddExpense(newExpenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHanlder} />
        </div>
    );
}

export default NewExpense;