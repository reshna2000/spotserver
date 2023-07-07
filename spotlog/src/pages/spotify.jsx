import React, { useEffect,useState }  from 'react'
import bgi from '../assets/spotify.png'
import './login'
import './reg'
import styled from "styled-components"
const Container=styled.div`

    background-image: url(${bgi});
    background-size: cover;
    background-repeat: no-repeat;
    margin: -10px;
    height: 98vh;
    overflow: hidden;
  
  
  a {
    color: #000;
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }
  
  .container1 {
    margin: auto;
  }
  
  .mainnav {
    display: flex;
    background-color: rgba(25, 20, 20, 0.65);
    align-items: center;
    justify-content: center;
    height: 80px;
    padding: 20px 0;
    width: 100%;
    position: fixed;
    z-index: 3;
  }
  
  .mainnav img {
    width: 10%;
    margin-left: 10px;
    
  }
  
  .mainnav ul {
    display: flex;
  }
  
  .mainnav ul.navoption {
    margin-bottom: 1px;
    margin-left: 500px;

  }
  
  nav ul .navoption {
    flex: 1;
    margin-left: 525px;
    width: 150px;
    font-size: 15.0px;
    letter-spacing: -0.8px;
    margin-top: 1px;
    font-weight: bold;
  }
  
  nav ul li {
    margin-left: 50px;
    font-size: larger;
    font-weight: bold;
  }
  
  .wt {
    color: #fff;
  }
  .wt1{
    color: #fff;
  }
  
  .gt {
    color: #dcdcdc;
  }
  
  
  
  .line {
    border: 20px solid white;
    margin-top: 2px;
    height: 10px;
  }
  label #btn,
  label #cancel{
    color:white;
    font-size: 30px;
    line-height: 80px;
    margin-right: 40px;
    cursor: pointer;
    display:none;

  }
  #check{
    display: none;
  }
  
  .container2 {
    display: flex;
    flex-direction: column;
    padding: 100px;
    align-items: center;
  }
  
  .container2 h1 {
    margin-top: 40%;
    font-size: 80px;
    font-weight: bold;
    color: white;
  }
  
  .container2 h5 {
    color: white;
    font-size: medium;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  .container2 h2 {
    color: white;
    font-size: medium;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  
  .container2 button {
    background-color: #1db954;
    font-size: large;
    border-radius: 50px;
    width: 300px;
    align-items: center;
    margin-left: 30%;
    font-weight: bold;
    height: 50px;
    padding: 0;
    border: 0;
  }
  
  /* Media Queries */
  @media (max-width: 1625px) {
    /* Adjustments for smaller screens */
    .mainnav ul.navoption{
      margin-left: 0;
      justify-content: space-around;
      padding-right: 20px;
    }
    .mainnav img{
      margin-right:auto;
      font-size: 100px;
      margin-left: 20px;
      
    }
    nav ul li {
      margin-left: 20px;
      justify-content: space-around;
      margin-right: -10px;

    }
  }
  @media (max-width: 930px) {
    /* Adjustments for smaller screens */
    .mainnav ul.navoption{
      margin-left: 0;
      justify-content: space-around;
      padding-right: 20px;
    }
    .mainnav img{
      margin-right:auto;
      font-size: 100px;
      margin-left: 10px;
      
    }
    
    nav ul li {
      margin-left: 20px;
      justify-content: space-evenly;
      margin-right: 30px;
    }
    .container2 {
      padding: 50px;
    }
    
    .container2 h1 {
      margin-top: 30%;
      font-size: 60px;
    }
    
    .container2 button {
      margin-left: 25%;
      width: 250px;
    }
  }
  @media (max-width: 768px) {
    /* Adjustments for smaller screens */
    nav{
      height:10px 
    }
    .mainnav ul.navoption{
      margin-left: 0;
      justify-content: space-around;
      display: flex;
      flex-direction: column;
      
      
    }
    .mainnav img{
      margin-left: 10px;
      justify-content: space-around;
      height:50px;
      width: 100px;
    }
    .wt1{
      display: none;
    }
    
    nav ul li {
      margin-left: 20px;
      margin-right: 20px;
    }
    .container2 {
      padding: 50px;
      align-items: center;

    }
    
    .container2 h1 {
      margin-top: 30%;
      font-size: 35px;
      margin-left: 50px;
    }
    
    .container2 button {
      margin-left: 50px;
      width: 250px;
      
  }
  
  @media (max-width: 468px) {
    /* Adjustments for mobile devices */
    nav{
      padding-top: -20px;
    }
    .mainnav ul.navoption {
      margin-left: 50px;
      padding-right: 10px;
      font-size: 15px;
      display : flex ;
      flex-direction: column;
    }
    .mainnav img{
      margin-left: 0;
      
      font-size: small;
    }
    
    .wt1{
      display: none;
    }
    
    nav ul li {
      
      font-size: small;
      display: flex;
      flex-direction:column;
    }
    
    .container2 {
      padding: 70px;
      margin-top: 50px;
      

    }
    .container2 {
      padding: 50px;
    }
    
    .container2 h1 {
      margin-top: 70%;
      font-size: 30px;
      display: inline;
    }
    
    .container2 button {
      margin-left: 20;
      width: 250px;
    }
  }}`;

import Image from '/src/assets/1.png'
export const Spotify = () => {
  const [value, setvalue] = useState(0)

    useEffect(() => {
        console.log(value);},[value])
  
  
  return (
    <>
    <Container>
    <div class="image">
    <div className='container1'>
        <nav className='mainnav'>
          <input type="checkbox" id="check"></input>
          <label for="check">
            <i class="ffc" id="btn"></i>
            <i class="fft" id="cancel"></i>
          </label>
        <img src={Image}/>
          <ul className='navoption'>
            <li><a href='#' className='wt' >Premium</a></li>
            <li><a href='#' className='wt' >Help</a></li>
            <li><a href='#' className='wt'>Download</a></li>
            <li><a href='#' className='wt1'>|</a></li>
            <li><a href='/Reg' className='gt'>Signup</a></li>
            <li><a href='/Login' className='gt'>Login</a></li>
          </ul>
        </nav>
        </div>
        <div className="container2">
          <div class="card2-text-container">
            <h1 class="card2-text">Music for everyone</h1>
            <h5 class="card2-text2">Millions of songs. No credit card needed.</h5>
            <div><h2>Count:{value}</h2></div>
            <button onClick={()=>setvalue(value+1)}>UPDATE</button>
          </div>
          
        </div>
        </div>
        </Container>
    </>
  )
}
export default Spotify