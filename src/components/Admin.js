import React, { useState } from 'react'
import "./style.css"

const Admin = ({ users, setUsers, handleLogout }) => {
  const [newUser, setNewUser] = useState({ username: "", password: "", role: "User" })

  const handleAddUser = () => {
    if (users.some(user => user.username === newUser.username)) {
      alert("User already exists!")
      return
    }

    const updatedUsers = [...users, newUser]
    setUsers(updatedUsers)
    localStorage.setItem("users", JSON.stringify(updatedUsers))
    setNewUser({ username: "", password: "", role: "User" })
  }

  const handleDeleteUser = (username) => {
    if (username === 'admin') {
      alert("You can't delete your admin account")
      return
    }

    const updatedUsers = users.filter(user => user.username !== username)
    setUsers(updatedUsers)
    localStorage.setItem("users", JSON.stringify(updatedUsers))
  }

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
      <h3>User Management</h3>
      <ul>
        {users.map(user => (
          <li key={user.username} className="user-item">
            {user.username} ({user.role})
            <button className="delete-btn" onClick={() => handleDeleteUser(user.username)}>Delete</button>
          </li>
        ))}
      </ul>
      <h3>Add User</h3>
      <input
        className="input-field"
        type="text"
        placeholder="Username"
        value={newUser.username}
        onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
      />
      <input
        className="input-field"
        type="password"
        placeholder="Password"
        value={newUser.password}
        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
      />
      <select
        className="select-field"
        value={newUser.role}
        onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
      >
        <option value="User">User</option>
        <option value="Admin">Admin</option>
      </select>
      <button className="add-user-btn" onClick={handleAddUser}>Add User</button>
    </div>
  )
}

export default Admin

