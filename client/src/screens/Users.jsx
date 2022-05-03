import React from 'react'

export default function Users({ users }) {
  return (
    <div>
        <h3>Users</h3>
        {users.map((user) => (
            <p>{user.username}</p>

        ))} 
    </div>
  )
}
