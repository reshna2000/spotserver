import React from 'react'
import styled from "styled-components"
const Container=styled.div`
background-image: linear-gradient(to right,#ff5722,#ff9800);
height:100vh;margin:0;
padding: 0;
.d1{
    border: none;
    background: #f8f8f8;
    border-top-left-radius: 10% 50%;
    border-bottom-left-radius: 10% 50%;
    padding: 50px;
    width: 500px;
    height: 350px;
    position: absolute;
    right: 0px;
    margin-right: 100px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
}
.c1,.c2,.c3,.c4{
    margin-bottom: 15px;
    align-items: center;
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    align-items: center;
}

.c5 input{
    border: none;
    outline: none;
    color: rgba(0, 0, 0, 0.959);
    background-color: #ff9800;
    border-radius: 50px 50px 50px 50px;
    margin-right: auto;
    align-items: center;
    padding: 8px;
       
}

.div2{
    margin-top: 250px !important;
    margin-left: 200px;
}
.div2 img{
    
    width: 50px;
    margin-left: 50px;;
}
.divv{
    display: flex;
    justify-content: left;
   
}
.div2 h1{
    font-size: larger;
}
.input{
    width: 200%;
}


.button{
    border:none;
    outline:none;
    color: rgba(0, 0, 0, 0.959);
    border-radius: 50px 50px 50px 50px;
    margin-left: 50px;
    padding: 10px;
}`;

export const Reg = () => {
  return (
    <Container>
    <div class="container">
        <div class="d1">
            <h2>Register Here</h2>
            <form action="" method="get">
            <div class="c1">
                <label for="Name">Name:</label>
                <input type="text" id="Name" class="form-control" placeholder="Name" required/>
            </div>
            <div class="c2">
                <label for="Username">Phone no  :</label>
                <input type="tel"  id="Username" class="form-control" pattern="[789][0-9]{9}"title="Enter only numbers" placeholder="phone no:" required/>
            </div>
            <div class="c3">
                <label for="Email">Email:</label>
                <input type="email" id="Email" class="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Email" required/>
            </div>
            <div class="c4">
                <label for="Password">Password:</label>
                <input type="password" id="Password" class="form-control" pattern=".{8,}" title="Eight or more characters" placeholder="Password" required/>
            </div>
            <div class="c5">
                <input type="submit" value="Register"/>
            </div>
            </form>       
        </div>
    
        <div class="div2">
            <img src="1.png"/>
            <h3>Join us</h3>
            <p>Subscribe Easy Tutorials Youtube Channel 
                to watch more videos</p>
            <button class="button"> About Us</button>
        </div>
    </div> 
    </Container>
  )
}
   
export default Reg