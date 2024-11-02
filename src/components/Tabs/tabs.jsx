import { useState } from 'react';
import './style.css'

const Tabs=({tabsContent,onChange})=>{

    const [currentTab, setCurrentTab]=useState(1);
    return(
        <div className='wrapper'>
            <div className="heading">
                {
                    tabsContent.map((item)=>(
                        <div key={item.label}>
                            <span className="label">{item.label} </span>
                        </div>
                    ))
                }
            </div>

            <div className="content">
               {
                tabsContent[currentTab] && tabsContent[currentTab].content
               }   
            </div>
        </div>
    )
}

export default Tabs;