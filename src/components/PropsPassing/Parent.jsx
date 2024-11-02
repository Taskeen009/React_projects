import { useState } from "react"
import Child from "./Child"

const Parent=()=>{
    const [parentmsg,setParentMsg]=useState("Hello from Parent")

    const handlemsg=()=>{
          setParentMsg(parentmsg==="hello my child parent"?"hello from Parent":"hello my child parent")
    }
    return(
   <div>
    <h1>Parent</h1>
    
    <Child Message={parentmsg} handlemsg={handlemsg}/>
   </div>
    )
}
export default Parent