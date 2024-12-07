import React, { useState, useEffect } from 'react'
import Login from './components/Login'
import Admin from './components/Admin'
import User from './components/User'

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [users, setUsers] = useState([])

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || []
    if (!storedUsers.length) {
      localStorage.setItem('users', JSON.stringify([{ username: 'admin', password: 'admin123', role: 'Admin' }]))
    }
    setUsers(storedUsers)
  }, [])

  const handleLogin = (username, password) => {
    const foundUser = users.find(user => user.username === username && user.password === password)
    if (foundUser) {
      setCurrentUser(foundUser)
    } else {
      alert("Invalid credentials")
    }
  }

  const handleLogout = () => {
    setCurrentUser(null)
  }

  return (
    <div>
      {!currentUser ? (
        <Login handleLogin={handleLogin} />
      ) : currentUser.role === "Admin" ? (
        <Admin users={users} setUsers={setUsers} handleLogout={handleLogout} />
      ) : (
        <User currentUser={currentUser} handleLogout={handleLogout} />
      )}
    </div>
  )
}

export default App
