import React from "react";
import Login from "./Components/Login";
import Signupbox from "./Components/Signupbox";
import { useState } from "react";
import "./style.css"
import Fetchdata from "./Components/Fetchdata";


const App = () =>{

let[username,setUsername] = useState("")
let[password,setPassword] = useState("")
let [btnclick, setBtnclick] = useState("")

    return(
        <div>
            <Login>
                 <Signupbox setUsername={setUsername} setPassword={setPassword} setBtnclick={setBtnclick}/>
                 <Fetchdata username={username} password={password} btnclick={btnclick} />
            </Login>
        </div>
    )
}

export default App