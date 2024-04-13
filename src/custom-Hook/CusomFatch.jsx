import { useEffect, useState } from "react"


function useCusomFatch(url,option={}) {
    const[data,setData]=useState(null)
    const [error, setError] = useState(null);

   

    async function fatch(){

        try {
            const response=await fetch(url,{...option})
            const data=await response.json()
            const item=await data.products
            setData(item )
        } catch (error) {
            setError(error)
            
        }

    }

    useEffect(()=>{
        fatch()
    },[])
  return {data,error}
}

export default useCusomFatch