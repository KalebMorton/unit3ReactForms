import './App.css'
import SignUpForm from './components/SignUpForm'
import AuthenticateComponent from './components/Authenticate'
import { useState } from 'react'

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm setToken={setToken}/>
      <AuthenticateComponent token={token}/>
    </>
  )
}

export default App
