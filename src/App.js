import React from "react";
import Login from "./Components/Login";
import Signupbox from "./Components/Signupbox";
import { useState } from "react";
import "./style.css"
import Fetchdata from "./Components/Fetchdata";


const App = () =>{

let[username,setUsername] = useState("")
let[password,setPassword] = useState("")


    return(
        <div>
            <Login>
                 <Fetchdata username={username} password={password} />
                 <Signupbox setUsername={setUsername} setPassword={setPassword} />
                
            </Login>
        </div>
    )
}

export default App