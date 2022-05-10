import React from 'react'
import { Link } from 'react-router-dom';

export default function Accounts({ accounts, handleAccountDelete }) {
  return (
    <div>
        <h3>Accounts</h3>
        {accounts.map((account) => (
          <div>
            <p>{account.user_id} {account.category} {account.balance}</p>
            <Link to={`/accounts/${account.id}/edit`}>
            <button>Edit</button>
            </Link>
            <button onClick={()=>handleAccountDelete(account.id)}>Delete</button>
          </div>
        ))} 
        <Link to='/accounts/new'>
          <button>Create</button> 
        </Link>
    </div>
  );
}
