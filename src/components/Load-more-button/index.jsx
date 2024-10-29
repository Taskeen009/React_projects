import { useEffect, useState } from 'react'
import './style.css'
const LoadProducts = () => {
   const [loading, setLoading]=useState(false)
   const [products,setProducts]=useState([])
   const [count, setCount]=useState(0)
   const [disablebtn, setDisableButton]=useState(false)
   

   async function fetchProducts()
   { 
    setLoading(true)
    try{
       const response=await fetch(`https://dummyjson.com/products?limit=20&skip=${count===0?0:count*20}`)
    //    if(!response.ok)
    //     throw new console.error(`${response.status}`);
        
       const result= await response.json();
       console.log(result)
       if(result && result.products && result.products.length)
       {
        //setProducts(result.products)
        setProducts((prev)=>[...prev,...result.products])
        
       }
    }
    catch(e)
    {
        console.log(e)
        
    }
    finally{
        setLoading(false)
    }
   }
   useEffect(()=>{
    fetchProducts();
   },[count])

   useEffect(()=>{
     if(products && products.length===100)
        setDisableButton(true)
   },[products])

   if(loading)
   {
    return <div>loading Data</div>
   }
    return (
        <div className='containe'>
             <div className="products-container">
                {products && products.length > 0 ? 
                    products.map((item, index) => ( // Added index for unique keys
                        <div key={`${item.id}-${index}`} className='product'>
                            <img src={item.thumbnail} alt={item.name} />
                            <p>{item.title}</p>
                        </div>
                    ))
                    : null
                }
            </div>
         <div className="button-container">
            <button disabled={disablebtn} onClick={()=>setCount(count+1)}>More Products</button>
         </div>
        </div>
    )
}
export default LoadProducts