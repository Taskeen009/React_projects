import { useEffect, useState } from "react"

const Autoapi=()=>{

    const [loading, setLoading]=useState(false)
    const[users,setUsers]=useState([]);

    async function fetchlist(){
        try{
          const response=await fetch('https://dummyjson.com/users')
        }
        catch(e){
        console.log(error);
        
        }
    }
    useEffect(()=>{
        fetchlist()
    },[])

    return(
        <div className="search-a">
            <input  name="seach-users" type="text" placeholder="Search Users here...."/>
        </div>
    )
}

export default Autoapi