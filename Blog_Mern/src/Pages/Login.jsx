import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [userData , setUserData] = useState({
 
    email: '',
    password: '',
 
  
  })

  const changeInputHandler = (event) => {
    setUserData(prevState=>{
      return{ ...prevState, [event.target.name]: event.target.value }
      
    })
  }
  return (
    <section className="login">
    <div className="container">
      <h2>Sign In</h2>
      <form action="" className="form login__form">
        <p className="form__error_message">This is an error message</p>
        <input type="text" placeholder="Email" name='email' value={userData.email} onChange={changeInputHandler} autoFocus/>
        <input type="password" placeholder="Password" name='password' value={userData.password} onChange={changeInputHandler}/>

        <button type="submit" className='btn primary'>Register</button>
      </form>
      <small>No account yet?<Link to="/register">Sign Up</Link></small>
    </div>
  </section>
  )
}

export default Login