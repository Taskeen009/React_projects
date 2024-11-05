import { useState ,useMemo} from "react"
const Memotwo=()=>{
    const [number,setNumber]=useState(0)
    const [counter,setCounte]=useState(0)

    function cubenum(num){
        console.log('calculation done2!!')
        return Math.pow(num,3);
    }

    //const result=cubenum(number)
    const result=useMemo(()=>{
        return cubenum(number)
    },[number])
    return(
     <div>
        <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
        <h1>Cube of the number: {result}</h1>
        <button onClick={()=>setCounte((prev)=>prev+1)}>counter++</button>
        <h1>Counter : {counter}</h1>
     </div>
    )
}

export default Memotwo