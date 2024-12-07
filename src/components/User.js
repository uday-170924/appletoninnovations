import React from 'react'
import "./style.css"
const User = ({ currentUser, handleLogout }) => {
  return (
    <div className="user-panel">
      <h2>Welcome, {currentUser.username}!</h2>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default User

