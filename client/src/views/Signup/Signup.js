import React, { useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import "./Signup.css"
import Navbar from '../../components/Navbar/Navbar'
function Signup() {
    const [name,setName] =useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [mobile,setMobile]=useState("");
    const [address,setAddress]=useState("");
    const [gender,setGender]=useState("female");

    const signup= async ()=>{
        if (!name){
            alert('Name is required');
            return;
        }
        if (!email){
            alert('Email is required');
            return;
        }
        if (!password){
            alert('Password is required');
            return;
        }
        if (!mobile){
            alert('Mobile is required');
            return;
        }
        if (!address){
            alert('Address is required');
            return;
        }
      
        const response =await axios.post("/signup",{
            name:name,
            email:email,
            password:password,
            mobile:mobile,
            address:address,
            gender:gender
        })
        if (response?.data?.success){
            alert(response?.data?.message);
            window.location.href="/login";
        }else{
            alert(response?.data?.message);
        }
    };
  return (
    <div>
        <Navbar/>
     <form className='signup-form'>

     <h1 className='text-center'>Signup</h1>
     <div>
        <label htmlFor='name'>Name</label>
        <input type='text'
        placeholder='Enter your name'
        id="name"
        className='input-box'
        value={name}
        onChange={(e)=>{
            setName(e.target.value);
        }}/>

     </div>
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
     <div>
        <label htmlFor='mobile'>Mobile</label>
        <input type='text'
        placeholder='Enter your mobile'
        id="mobole"
        className='input-box'
        value={mobile}
        onChange={(e)=>{
            setMobile(e.target.value);
        }}/>

     </div>
     <div>
        <label htmlFor='address'>Address</label>
        <input type='text'
        placeholder='Enter your Address'
        id="Address"
        className='input-box'
        value={address}
        onChange={(e)=>{
            setAddress(e.target.value);
        }}/>

     </div>
     <input type='radio' id='male' name='gender' className='gender'
     checked={gender==="male"} onClick={()=>{
        setGender("male");
     }}  />
      <label htmlFor='male' >Male</label>

      <input type='radio' id='female' name='gender' className='gender' checked={gender==="female"}
       onClick={()=>{
        setGender("female")
       }}/>
      <label htmlFor='female' >Female</label>

<button type='button' className='btnn signupbtn' onClick={signup}>signup</button>
<p className='heading-signup'>
          <Link to="/login">already have an account</Link>
        </p>
     </form>

    </div>
  )
}

export default Signup
