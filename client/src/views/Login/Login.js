import React, {useState,useEffect} from 'react'
import "./Login.css"
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
function Login() {
  const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

const login = async()=>{
  if (!email){
    alert("email is required");
    return;
  }
  if (!password){
    alert("password is required");
    return
  }
  
  const response = await axios.post("/login",{
    email:email,
    password:password
  })
  if (response?.data?.success){
   alert(response?.data?.message);
   localStorage.setItem("user", JSON.stringify(response?.data?.data))
   
    window.location.href="/";
}else{
    alert(response?.data?.message);
}



}

  return (
    <div>
      <Navbar/>
      <form className='login-container'>

      <h1 className='text-center'>Login </h1>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='text'
        placeholder='Enter your email'
        id="email"
        className='input-box'
        value={email}
        onChange={(e)=>{
            setEmail(e.target.value);
        }}/>

     </div>
     <div>
        <label htmlFor='password'>Password</label>
        <input type='text'
        placeholder='Enter your password'
        id="password"
        className='input-box'
        value={password}
        onChange={(e)=>{
            setPassword(e.target.value);
        }}/>

     </div>
      <button type='button' className='btnn loginbtn' onClick={login}>login</button>
      <p className='heading-signup'>
          <Link to="/signup">Create an account</Link>
        </p>
      </form>
    </div>
  )
    
}

export default Login
