import React, { useState } from 'react'
import Navbar from './Navbar'
import './Login.css'
import top from '../assets/top.avif'
function Login() {
    const [login, setLogin] = useState({
    email :"",
    password :""
  })
  let useremail ='neenu123@gmail.com'
  let userpassword = "12345"
  console.log (login);
  const data = (e)=>{
    setLogin({...login,[e.target.name]:e.target.value})
  }
  const check =()=>{
  if( login.email === useremail && login.password === userpassword)
    {alert("login successful")}
  else
    {
      alert("login failed")
    }

  }
  return (
    <div>
      <Navbar/>
      <div className="c">
      <div className="login">
        

        <labei for ="fname">Enter email</labei><br/>
        <input type ="text" value = {data.email} placeholder = 'useremail' name = 'email' onChange = {data}/><br/><br/>
      <labei for ="lname">Password</labei><br/>
      <input type ="password" value = {data.password} placeholder = 'userpassword' name = 'password'  onChange = {data}/><br/><br/>
      <button type="button" class="btn btn-primary">Login</button>
        <h5>forgot password?</h5>
      </div>
      <div className="loginimage" >
        <img src ={top} alt ="img" />
      </div>
      </div>
    </div>
  )
}

export default Login






