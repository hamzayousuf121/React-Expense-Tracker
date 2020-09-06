import React, {useContext} from 'react';
import { TransactionContext } from './TransactionContext';
import DeleteIcon from '../image/trash.png'

export const TransactionList = ({ transaction }) => {
  const { deleteTransaction } = useContext(TransactionContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li>
      <span>{transaction.desc}</span>
       <span>{sign}${Math.abs(transaction.amount)}
      <span onClick={() => deleteTransaction(transaction.id)} 
      >
          <img src={DeleteIcon} alt="Delete" width="20" height="15"/>
      </span></span> 
    </li>
  )
}
