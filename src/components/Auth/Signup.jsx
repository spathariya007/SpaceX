 import React from 'react'
 import './signup.css'
 
 const Signup = () => {
   return (
    <div className='page'>
    <div className='register'>
        <fieldset className='fldset'>
      <legend>Signup</legend>
      <form action="" method='POST' className='frm'>
      <label htmlFor="displayName">Display Name</label>
      <input type="text" name="displayName" id="displayName" />  
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" /> 
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password"  />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input type="text" name="confirmPassword" id="confirmPassword" /><br /> 
      <button type="submit" >Sign In</button>
      </form>
        </fieldset>
    </div>
        </div>
   )
 }
 
 export default Signup