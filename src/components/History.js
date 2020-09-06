import React, { useContext } from 'react'
import { TransactionContext } from './TransactionContext';
import {TransactionList} from './TransactionList';

function History() {
    const { transactions } = useContext(TransactionContext);
    return (
        <div className="history">
            <h3>History</h3>
            <hr />
            <ul className="transaction-list">
            {transactions.map(transaction => (<TransactionList key={transaction.id} transaction={transaction} />))}
            </ul>
        </div>
    )
}

export default History
