import React from 'react'

export default function Accounts({ accounts }) {
  return (
    <div>
        <h3>Accounts</h3>
        {accounts.map((account) => (
            <p>{account.user_id}</p>

        ))} 
    </div>
  )
}
