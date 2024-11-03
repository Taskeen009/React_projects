import { useState } from 'react';
import './style.css'

const Tabs=({tabsContent,onchange})=>{

    const [currentTab, setCurrentTab]=useState(1);

    const handleClick=(getcurrentIndex)=>{
       setCurrentTab(getcurrentIndex)
       onchange(getcurrentIndex)
       console.log(getcurrentIndex)
    }
    return(
        <div className='wrapper'>
            <div className="heading">
                {
                    tabsContent.map((item,index)=>(
                        <div key={item.label} onClick={()=>handleClick(index)}>
                            <span className="label">{item.label} </span>
                        </div>
                    ))
                }
            </div>

            <div className="content" style={{color:'red'}}>
               {
                tabsContent[currentTab] && tabsContent[currentTab].content
               }   
            </div>
        </div>
    )
}

export default Tabs;