import * as React from 'react'
import {
    accountFormText,
    inputField,
    confirmButton
  } from './layout.module.css'


  
const registerForm = ({buttonText}) => {
        return(

            <form method="post" onSubmit = {register()}>
              <label>
                <text className={accountFormText}>E-pasts</text><br></br> 
                <input className={inputField} type="email" name="email" id="email"/>
              </label><br></br>
              <label>
              <text className={accountFormText}>Parole</text><br></br> 
                <input className={inputField} type="password" name="password" id="password" />
              </label><br></br>
              <button className={confirmButton} type="submit">{buttonText}</button>
            </form>
            )
    
}

function register(){
    alert('Register Email is: ');
}


export default registerForm