import { useState } from "react"

const Stateuse=()=>{

    // const counter=useState(0)[0]
    // const setCounter=useState(0)[1]
    // console.log(counter)
    // console.log(setCounter)


    // let color="Red"
    // const changeColor=()=>{
    //     color="pink"
    //     console.log(color)
    // }


    const [color,setColor]=useState("Pink")

    const changeColor=()=>{
        setColor(color=="Red"?"Pink":"Red")
    }
    return(
      <div>
        <h1>hello {color}</h1>
        <button onClick={()=>changeColor()}>blue</button>
      </div>  
    )
}

export default Stateuse