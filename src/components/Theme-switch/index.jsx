import { useState } from 'react'
import './style.css'

const Theme=()=>{
     const [theme,setTheme]=useState('#fff')
    const handlebtn=()=>{
       setTheme(theme==='#fff'?'#000':'#fff')
    }
    return(
        <div style={{background:theme,color:theme==='#fff'?'#000':'#fff',height:'100vh'}}>
            <h1 >Hello</h1>
            <button onClick={handlebtn} style={{background:theme==='#fff'?'#000':'#fff'}}>Change Theme</button>
        </div>
    )
}

export default Theme;