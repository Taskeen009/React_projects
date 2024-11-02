import { useEffect, useState } from "react"

const useLocal=(key,defaultValue)=>{
    const [value,setValue]=useState(()=>{
        let currentvalue;

        try{
           currentvalue=JSON.parse(localStorage.getItem(key)||String(defaultValue))
        }
        catch(e){
            console.log(e);
            currentvalue=defaultValue;
        }

        return currentvalue;
    })

    useEffect(()=>{
localStorage.setItem(JSON.stringify(value),key)
    },[key,value])

    return [value,setValue];
}

export default useLocal;