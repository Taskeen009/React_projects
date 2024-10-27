import { useEffect, useState } from 'react'
import './style.css'

const Slider=({url,limit})=>{
    const [images, setImages]=useState([]);
    const [currentSlide, setCurrentSlide]=useState(0)
    const [errormsg,setErorMsg]=useState("")
    

    async function fetchImages(getUrl)
    {
       try{

       }
       catch(e){

       }
    }
    useEffect(()=>{
        if(url!=='')
            fetchImages(url)
    },[url])
    return(
        <div className='container'>

        </div>
    )
}

export default Slider