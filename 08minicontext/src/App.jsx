import { useState } from 'react';
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContext from './context/UserContext';


function App() {
  const [user, setUser]=useState(null);

  return (
    <>
      <UserContext.Provider value={{user, setUser}}>
        <h1>React with chai</h1>
        <Login />
        <Profile />
      </UserContext.Provider>
    </>
  )
}

export default App
