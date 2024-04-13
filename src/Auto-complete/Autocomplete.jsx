import { useState } from "react";
import { useEffect } from "react"


function Autocomplete() {

    const[data,setData]=useState([])
    const[searchpra,setSearchpara]=useState('')
    const[filter,SetFileritem]=useState([])
    const [lock,setLock]=useState(false)
    

async function fatchdata(){
    try {
        const response= await fetch("https://dummyjson.com/users")
        const data= await response.json()
        if (data) {
            setData(data.users.map((item)=>item.firstName))
            
        }

    } catch (error) {
        console.log(error);
    }
    
}
function handleChange(even) {
    const qury=even.target.value.toLowerCase()
    setSearchpara(qury)
    if (qury.length >1) {
        const filterdata=data ? data.filter((item)=>item.toLowerCase().indexOf(qury) > -1 ) :null 
        SetFileritem(filterdata)
        setLock(true)

        
    } else{
        setLock(false) 
    }
   
   
    
}


 useEffect(()=>{
     fatchdata()
 },[])
 console.log(data)
 console.log(filter);

  return (
    <div className="wrapper flex justify-center items-center flex-col">
        <div className="input-box">
            <input value={searchpra} onChange={handleChange} type="search"  placeholder="search ..."/>
        </div>
        {lock ? <div>{filter.map((ite)=> <div key={Math.random()}> {ite}  </div>)}  </div> : null}
    </div>
  )
}

export default Autocomplete
