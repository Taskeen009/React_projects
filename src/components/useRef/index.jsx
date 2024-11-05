import { useEffect, useState, useRef } from "react"
import Domref from "./idnex2"

const Ref=()=>{

    const [value,setValue]=useState(0)
    //const [count,setCount]=useState(0)
    const count=useRef(10)
    console.log(count)


    // useEffect(()=>{
    //     setCount(prev=>prev+1)
    // },[])


    useEffect(()=>{
        count.current=count.current+1;
    })
    return(
        <div>
            <button onClick={()=>setValue(prev=>prev+1)}>+1</button>
            <h1>{value}</h1>
            <button onClick={()=>setValue(prev=>prev-1)}>-1</button>
            {/* <h1>Rneder count {count}</h1> */}
            <h1>{count.current}</h1>
            <Domref/>
        </div>
    )
}
export default Ref