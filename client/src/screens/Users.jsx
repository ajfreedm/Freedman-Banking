import React from 'react'

export default function Users({ users }) {
  return (
    <div>
        <h3>Users</h3>
        {users.map((user) => (
            <p key={user.id}>{user.username}</p>

        ))} 
    </div>
  )
}
