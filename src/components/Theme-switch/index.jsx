// import { useState } from 'react'
// import './style.css'

import useLocal from "./useLocal";

// const Theme=()=>{
//      const [theme,setTheme]=useState('#fff')
//     const handlebtn=()=>{
//        setTheme(theme==='#fff'?'#000':'#fff')
//     }
//     return(
//         <div style={{background:theme,color:theme==='#fff'?'#000':'#fff',height:'100vh'}}>
//             <h1 >Hello</h1>
//             <button onClick={handlebtn} style={{background:theme==='#fff'?'#000':'#fff'}}>Change Theme</button>
//         </div>
//     )
// }

// export default Theme;

import './style.css'
const Theme = () => {

    const[theme,setTheme]=useLocal('theme','dark')

    const handletheme=()=>{
        setTheme(theme==='light'?'dark':'light')
    }
    return (
        <div className="light-dark-mode" data-theme={theme}>
            <div className="container">
                <p>Hello World!!!</p>
                <button onClick={handletheme}>Change Theme</button>
            </div>
        </div>
    );
};

export default Theme;
