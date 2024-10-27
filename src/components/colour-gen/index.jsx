// import { useEffect, useState } from "react";

// const Random=()=>{
//     const [typeOfColor,setTypeofcolor]=useState('hex');
//     const [color, setColor]=useState('#000000')

//     const randomNumber=(length)=>{
//         return Math.floor(Math.random()*length)
//     }
//     const handlerandomhex=()=>{
//       //#678765
//       const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
//       let hexColor="#";
//       for(let i=0;i<6;i++)
//       {
//         hexColor+=hex[randomNumber(hex.length)]
//       }
//       setColor(hexColor)
//     }

//     const handlerandomrgb=()=>{
//       const r=randomNumber(256)
//       const g=randomNumber(256)
//       const b=randomNumber(256)

//       setColor(`rgb(${r},${g},${b})`);
//     }

//     useEffect(()=>{
//     if(typeOfColor==='rgb')
//         handlerandomrgb()
//     else
//     handlerandomhex()
//     },[typeOfColor])
//   return(
//     <div style={{
//         width:"100vw",
//         height:"100vh",
//         background:color,
//     }}>
//         <button onClick={()=>setTypeofcolor('hex')}>Create HEX Color</button>
//         <button onClick={()=>setTypeofcolor('rgb')}>Create RGB Color</button>
//      <button onClick={typeOfColor==='hex'? handlerandomhex: handlerandomrgb}>Generate Random Color</button>
//      <div style={{
//         display:'flex',
//         justifyContent:'center',
//         alignItems:'center',
//         color:'white',
//         fontSize:'60px',
//         marginTop:'50px',
//         flexDirection:'column',
//         // gap:'90px',
//      }}>
//         <h3>{typeOfColor==='rgb'?'RGB':'HEX'}</h3>
//         <h1>{color}</h1>
//      </div>
//     </div>
//   )
// }

// export default Random;