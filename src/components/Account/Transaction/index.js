import React from 'react';
import './style.css';
import { useRecoilValue } from 'recoil';
import { DateTime } from 'luxon';
import { currentUserSelector } from '../../../store';
import { titlelize } from '../../../utils/string';

const Transaction = () => {
  const { transactions } = useRecoilValue(currentUserSelector);
  return (
    <div className="transaction">
      <div className="transaction-list">
        {transactions.map((transaction) => (
          <div className="transaction-card">
            <div className="transaction-card-top">
              <span className="name">{titlelize(transaction.first_name+' '+transaction.last_name)}</span>
              <span className="date">{DateTime.fromISO(transaction.created_at).toFormat('yyyy-LL-dd')}</span>
            </div>
            <span className="balance">${transaction.amount}</span>
          </div>
        ))}
      </div>
    </div>  
  );
};

export default Transaction;
