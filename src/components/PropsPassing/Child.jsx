import { useEffect, useState } from "react"

const Child=({Message,handlemsg})=>{
 const [childmsg,setChildmsg]=useState(Message)

 useEffect(()=>{
    setChildmsg(Message)
 },[Message])

    return(
     <div>
        <h1>Child</h1>
        <button onClick={handlemsg}>Parent button</button>
        <p>{Message}</p>
     </div>
    )
}
export default Child