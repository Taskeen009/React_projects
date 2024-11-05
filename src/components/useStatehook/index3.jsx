import { useState } from "react"

const NewState=()=>{

    const [count,setCount] =useState(0)

    const counter=()=>{
       //setCount(count+1)
       

       setCount((prev)=>{
        return prev+4;
       })
          setCount((prev)=>{
        return prev+4;
       })
    }
    return(
        <div>
            <h1>Count :{count}</h1>
            <button onClick={counter}>Increment</button>
        </div>
    )
}

export default NewState