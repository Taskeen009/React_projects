import { useRef } from "react";
const Domref=()=>{
    const inputElem=useRef();

    const btnClicked=()=>{
        console.log(inputElem.current)
        inputElem.current.style.background="blue"
    }
    return(
      <div>
        <input type="text" ref={inputElem} />
        <button onClick={btnClicked}>click</button>
      </div>
    )
}

export default Domref