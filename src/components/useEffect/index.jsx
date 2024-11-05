import { useEffect, useState } from "react"

const Effectuse=()=>{

    const[count,setCount]=useState(0)
    //useEffect(cb,dep)
    useEffect(()=>{
      const timer= setTimeout(() => {
        setCount(count=>count+1)
       }, 2000);
       console.log("hello here")

       return () => clearTimeout(timer);
    },[count])
    return(
        <div>
            <h1>I have rendered {count}</h1>
        </div>
    )
}

export default Effectuse