import React from 'react';
import Balance from './components/Balance';
import History from './components/History';
import Transaction from './components/Transaction';
import {TransactionProvider} from './components/TransactionContext'
import './App.css';

function App() {

  return (
    <>
    <div className="container">
    <TransactionProvider>
      <Balance />
      
      <History />
      <Transaction />
    </TransactionProvider>
    </div>
    </>
  );
}

export default App;
