import { useState } from "react"
import MenuList from "./MenuList"
import {FaMinus,FaPlus} from 'react-icons/fa'

const MenuItem=({item})=>
{
    const [displayCurrentChildren,setDisplayCurrentChildren]=useState({})

    const handleToggle=(getCurrentLabel)=>{
            setDisplayCurrentChildren(
                {
                    ...displayCurrentChildren,
                    [getCurrentLabel]:!displayCurrentChildren[getCurrentLabel]
                }
            )
    }

    console.log(displayCurrentChildren)
    return(
        <li className="menu-item-container">
            <div>
            <p>{item.label}</p>
            {
                item && item.children && item.children.length?
                <span onClick={()=>handleToggle(item.label)}>
                   {
                    displayCurrentChildren[item.label]?<FaMinus color="#fff" size={25}/>:<FaPlus color="#fff" size={25}/>
                   }
                </span>:null
            }
            </div>
          
          {
            item && item.children && item.children.length>0 && displayCurrentChildren[item.label]?
            <MenuList list={item.children}/>
            :null
          }
        </li>
    )
}

export default MenuItem