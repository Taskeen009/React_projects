import { useCallback, useState } from "react"
import Header from "./index2"

const Callback=()=>{

    // const newfn=()=>{}
     const newfn=useCallback(()=>{},[])

    const [count,setCount]=useState(0)
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount((prev)=>prev+1)}>Click Me</button>
            <Header newfn={newfn}/>
        </div>
    )
}

export default Callback