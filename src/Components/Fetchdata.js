import React from "react";
import { useEffect } from "react";


const Fetchdata =({username,password,btnclick})=>{

    useEffect(()=>{
        fetch("https://dummyjson.com/auth/login",{
            method: "POST",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: `${username}`,
                password: `${password}`,
            })
          })
          .then((res)=>(res.json()))
           .then((ans)=>console.log(ans))
          .catch(err=> console.log(err))
    },[btnclick])
  

    return(
        <div>

        </div>
    )
}
export default Fetchdata