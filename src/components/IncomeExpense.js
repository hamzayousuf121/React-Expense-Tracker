import React from 'react';

function IncomeExpense({ income, expense }) {

    return (
        <div className="incomeExpense">
            <div className="income">
                <p>income</p>
                <p className="incomeRupees">${income}</p>
            </div>
            <div className="expense">
                <p>expense</p>
                <p className="expenseRupees">${expense} </p>
            </div>
        </div>
    )
}

export default IncomeExpense
