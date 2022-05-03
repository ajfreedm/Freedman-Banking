import React from 'react'
import { Link } from 'react-router-dom';

export default function Accounts({ accounts }) {
  return (
    <div>
        <h3>Accounts</h3>
        {accounts.map((account) => (
            <p>{account.user_id} {account.category} {account.balance}</p>
        ))} 
        <Link to='/accounts/new'>
          <button>Create</button> 
        </Link>
    </div>
  );
}
