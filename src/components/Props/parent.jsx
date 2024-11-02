import { useState } from "react";
import Child from "./Child";

const Parent=()=>{

    const [parentmsg,setParentMsg]=useState("hello from parent")

    const handleMsg=()=>{
        setParentMsg("Updated msg from parent")
    }

    // const handleMsg = () => {
    //     setParentMsg((prevMsg) =>
    //       prevMsg === "hello from parent" ? "Updated msg from parent" : "hello from parent"
    //     );
    //   };
    
return(
    <div>
        <h1>Parent</h1>
        {/* <button>Change Message</button> */}
        <Child message={parentmsg} handleMsg={handleMsg}/>
    </div>
)
}

export default Parent;