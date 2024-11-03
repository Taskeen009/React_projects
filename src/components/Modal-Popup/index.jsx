import { useState } from "react"
import './style.css'
import PopUp from "./Popup"
const Modal=()=>{
    const [modal,setModal]=useState(false)
    const [btn,setBtn]=useState(true)

    const handleclose=()=>{
        setModal(false);
    }
    return(
        <div>
            {
              btn===true?
              <button onClick={()=>setModal(!modal)&&setBtn(!btn)}>Click Me!!!!</button>
              :null
            }
           
            {
                modal===true?
                // <PopUp onClose={()=>setModal(false)}/>:
                <PopUp onClose={handleclose}/>
                :null
            }
        </div>
    )
}

export default Modal




// import { useState } from "react";
// import PopUp from "./Popup";

// const Modal = () => {
//     const [modal, setModal] = useState(false);

//     return (
//         <div>
//             {!modal && (
//                 <button onClick={() => setModal(true)}>Click Me!!!!</button>
//             )}
//             {modal && <PopUp />}
//         </div>
//     );
// };

// export default Modal;
