import { useState } from "react"
const StateUsetwo=()=>{
    const [car, setCar]=useState({
        brand:"ferrari",
        model:"roma",
        yea:"2023",
        color:"red"
    })

    const handleChange=()=>{
        // setCar({
        //     brand:"derrari",
        //     model:"doma",
        //     yea:"202f3",
        //     color:"redd"
        // })

        // setCar({...car,brand:"hello"})

        setCar((prev)=>{
            return{...prev,color:"blue"}
        })
    }
    return(
         <div>
            <h1>car {car.brand}</h1>
             <h1>{car.model}</h1>
             <h1>{car.yea}</h1>
             <h1>{car.color}</h1>
             <button onClick={handleChange}>change</button>
         </div>
    )
}

export default StateUsetwo