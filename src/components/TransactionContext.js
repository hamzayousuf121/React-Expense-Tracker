import React, { createContext, useReducer } from 'react';
import TransactionReducer from './TransactionReducer';

const InitialTransaction = {
    transactions: [],
}
   


export const TransactionContext = createContext(InitialTransaction);

export const TransactionProvider = ({ children }) => {

    let [state, dispatch] = useReducer(TransactionReducer, InitialTransaction);

    function addTransaction(transObj) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transObj
        })

    }

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
             
        })
    }
    return (
        <TransactionContext.Provider value={
            {
            transactions: state.transactions,
            addTransaction,
            deleteTransaction
            }
        }>
            {children}
        </TransactionContext.Provider>
    )
}
