import React, { useContext } from 'react';
import IncomeExpense from './IncomeExpense';
import { TransactionContext } from './TransactionContext';

function Balance() {
    const { transactions } = useContext(TransactionContext);

    function Income() {
        let income = 0;
        for (let i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0) {
                income += transactions[i].amount;
            }
        }
        return income;
    }

    function Expense() {
        let expense = 0;
        for (let i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0) {
                expense += transactions[i].amount;
            }
        }
        return expense;
    }

    return (
        <>
            <div className="balance">
                <h1 className="text-center">Expense Tracker</h1>
                <hr />
                <h3 className="uppercase">Your Balance</h3>
                <h2>${Income() + Expense()}</h2>
            </div>
            <IncomeExpense income={Income()} expense={Expense()} />
        </>
    )
}

export default Balance
