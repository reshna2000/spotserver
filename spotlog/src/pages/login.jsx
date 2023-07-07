import React from 'react'
import styled from "styled-components"
const Container=styled.div`
    margin: 0;
    padding: 0;
    height: 930px;
    box-sizing: border-box;
    background-color: rgb(69, 130, 162);
    font-family: Arial, sans-serif;
    font-style: normal;
    margin-top: 10px;;
    background-size: cover;
    overflow: hidden;
    .containerr {
    background-color: white;
    flex-direction: column;
    margin: auto;
    margin-top: 150px;
    width: 25%;
    height: 500px;
    padding: 50px;
    border-radius: 10px;
  }
  
  div h1 {
    text-align: center;
    font-family: sans-serif;
  }
  
  div input[type=Email],
  div input[type=password] {
    width: 100%;
    height: 50px;
    border: 1px solid #ccc;
  }
  
  div input::placeholder {
    padding: 10px;
  }
  
  .check {
    border: 10px;
    margin-top: 10px;
  }
  
  button {
    width: 100%;
    background-color: rgb(69, 130, 162);
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 25px;
    height: 50px;
  }
  
  .divv {
    text-align: center;
    margin-top: 30px;
  }
  
  .divv a {
    text-decoration: none;
    color: rgb(69, 130, 162);
  }
  
  /* Media Queries */
  @media (max-width: 768px) {
    /* Adjustments for smaller screens */
    .containerr {
      width: 50%;
      margin-top: 100px;
      padding: 30px;
    }
    
    div input[type=Email],
    div input[type=password] {
      height: 40px;
    }
    
    button {
      height: 60px;
    }
  }
  
  @media (max-width: 480px) {
    /* Adjustments for mobile devices */
    .containerr {
      width: 70%;
      margin-top: 50px;
      padding: 20px;
    }
    
    div input[type=Email],
    div input[type=password] {
      height: 30px;
    }
    
    button {
      height: 40px;
    }
  }

`;
export const Login = () => {
  return (
    <Container>
    <div className='containerr'>
        <h1>login</h1>
        <h3>Email:</h3>
        <input type='Email' onChange={(e)=>console.log(e.target.value)} id="email" placeholder='Enter email'></input>
        <h3>Password:</h3>
        <input type='password'onChange={(e)=>console.log(e.target.value)} id="password"  placeholder='Enter Password'></input>
        <div className='check'>
        <input type="checkbox" name="" id="" />Show password</div>
        <button>SIGN IN</button>
        <div className='divv'>
        Forgot<a href="#"> Username/Password?</a><br></br>
        Don't have an account?<a href="#"> Sign Up</a>
        </div>
    </div>
    </Container>
    
  )
}
export default Login