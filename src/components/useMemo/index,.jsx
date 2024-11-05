import { useState,useMemo, useEffect } from "react"
import Memotwo from "./index2"

const Memo=()=>{

    const [number,setNumber]=useState(0)
    const [counter,setCounte]=useState(0)

    function cubenum(num){
        console.log('calculation done!!')
        return Math.pow(num,3);
    }

    //const result=cubenum(number)
    const result=useMemo(()=>{
        return cubenum(number)
    },[number])

    // const result=useEffect(()=>{
    //     return cubenum(number)
    // },[number]) y kaam nhi krega ussefct do not return computed value
    return(
     <div>
        <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
        <h1>Cube of the number: {result}</h1>
        <button onClick={()=>setCounte((prev)=>prev+1)}>counter++</button>
        <h1>Counter : {counter}</h1>

        <h1>Part 2</h1>
        {/* <Memotwo/> */}
     </div>
    )
}
export default Memo


//in this we saw that when we increasing the counter the cubenum part
//is also calcuated so in index.jsx2 we will see the usememo part