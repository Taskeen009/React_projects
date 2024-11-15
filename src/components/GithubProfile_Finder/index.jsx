import { useEffect, useState } from "react"
import User from "./user" 

const Github=()=>{

    const [profile,setProfile]=useState("")
    const [userData,setUserData]=useState(null)
    const [loading,setLoading]=useState(false)

    const handleSubmit=()=>{
        if (profile) {
            FetchGithubdata();
        } else {
            alert("Please enter a GitHub username");
        }
    }
     
    async function FetchGithubdata() {
        setLoading(true)
       const res= await fetch(`https://api.github.com/users/${profile}`)

       //const res= await fetch('https://github.com/Taskeen009')

        const data=await res.json()

        if(data){
            setUserData(data)
            setLoading(false)
            setProfile("")
        }

        console.log(data)
    }
    useEffect(()=>{
      FetchGithubdata() 
    },[])

    if(loading){
        return <h1>Loading</h1>
    }
    return(
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input name="search-by-username"
                  type="text"
                  placeholder="search github username..."
                  value={profile}
                  onChange={(e)=>setProfile(e.target.value)}
                 />

                 <button onClick={handleSubmit}>
                    Search
                 </button>
            </div>
            {
              userData!==null ? <User user={userData}/>  :null
            }
        </div>
    )
}

export default Github