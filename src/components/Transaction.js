import React, { useState, useContext } from 'react';
import {TransactionContext} from './TransactionContext';

var count = 0;
function Transaction() {

    const { addTransaction } = useContext(TransactionContext);

    const [desc, setDesc] = useState('')
    const [amount, setAmount] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();
        count++;
        addTransaction({
            desc,
            id : count,
            amount: Number(amount)
        })
        
        setDesc('');
        setAmount(0);
    }

    return (
        <div className="transction">
            <h3>Add New Transaction</h3>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="textmsg"><b>Text</b></div>
                <input type="text"
                    placeholder="Enter Text"
                    required
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
                <div className="amountmsg"><b>Negative Expense Positive Income</b></div>
                <input
                    type="number"
                    placeholder="Enter Amount"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <input type="submit" value="Add Tranction" className="transactionButton" />
            </form>
        </div>
    )
}

export default Transaction
