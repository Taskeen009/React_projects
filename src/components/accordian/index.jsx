// single selection

// import { useState ,useEffect} from "react";
// import data from './data'
// import './style.css'

// const Accordian=()=>{

//     const [selected,setSelected]=useState(null)

//     const handlesingleSelection=(getcurrentId)=>{
//        console.log(getcurrentId)
//        setSelected(getcurrentId===selected?null:getcurrentId)
//     }
//     return(
//         <div className="wrapper">
//             <div className="accordian">
//                 {
//                     data && data.length>0 ? 
//                     data.map((data)=>{
//                         return(
//                         <div className="item">
//                         <div onClick={()=>handlesingleSelection(data.id)} className="title">
//                             <h3>{data.question}</h3>
//                             <span>+</span>
//                         </div>
//                         {
//                             selected===data.id ? <div className="content">{data.answer}</div>:null
//                         }
//                         </div>)
//                     })
//                     :<div>No data found</div>
//                 }
//             </div>
//         </div>
//     )
// }

// export default Accordian;



//multiselection
import React, { useState, useEffect } from 'react';

import data from './data'
import './style.css'

const Accordian = () => {

    const [selected, setSelected] = useState(null)
    const [enablemulti, setEnableMulti] = useState(true)
    const [multi, setMulti] = useState([]);
    const [msg, setMsg] = useState("Multiselection")


    // useEffect(() => {
    //     console.log('Updated multi:', multi);
    // }, [multi]);

    const handlesingleSelection = (getcurrentId) => {
        // console.log(getcurrentId)
        setSelected(getcurrentId === selected ? null : getcurrentId)
    }

    const handleMulti = (getcurrentId) => {
        let cpyMultiple=[...multi];
        const findIndexofCurrentId=cpyMultiple.indexOf(getcurrentId)
        console.log(getcurrentId)
       console.log(findIndexofCurrentId)
        if(findIndexofCurrentId===-1)
           cpyMultiple.push(getcurrentId)
        else
        cpyMultiple.splice(findIndexofCurrentId,1);
        setMulti(cpyMultiple);
        // console.log(multi);// y nhi ho payega update itni jldi 
   }
   console.log(multi);
    return (
        <div className="wrapper">
            <button onClick={() => {
                setEnableMulti(!enablemulti);
                setMsg(enablemulti ? "Single Selection" : "Multiselection");
                setMulti([]);
                setSelected(null);
            }}>
                {msg}
            </button>
            <div className="accordian">
                {
                    data && data.length > 0 ?
                        data.map((data) => {
                            return (
                                <div className="item">
                                    <div onClick={enablemulti ?
                                        () => handleMulti(data.id)
                                        : () => handlesingleSelection(data.id)} className="title">
                                        <h3>{data.question}</h3>
                                        <span>+</span>
                                    </div>
                                    {/* {
                                        selected === data.id ? <div className="content">{data.answer}</div> : null
                                    } */}

                                    {
                                        enablemulti? multi.indexOf(data.id)!==-1&&
                                        (
                                            <div className='content'>{data.answer}</div>
                                        ):selected==data.id &&
                                        (
                                            <div className='content'>{data.answer}</div>
                                        )
                                    }
                                </div>)
                        })
                        : <div>No data found</div>
                }
            </div>
        </div>
    )
}

export default Accordian;