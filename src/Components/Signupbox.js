import React from "react";


const Signupbox = ({setUsername, setPassword}) =>{

    function userDetails(){
      if(setUsername||setPassword===""){
        alert("Please fill all values")
      }
    }

    return(
        <div className="form">
            <p>Welcome back! 👋</p>
            <p>Sign in your account</p>
            <div className="input">
                <label>Your email</label>
                <input onChange={(e)=>setUsername(e.target.value)} type="text" name="email"></input>
            </div>
            <div className="input">
                <label>Password</label>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password"></input>
            </div>
            <button onClick={userDetails}>Continue</button>
            <p>Forgot your password?</p>
        </div>
    )
}
export default Signupbox