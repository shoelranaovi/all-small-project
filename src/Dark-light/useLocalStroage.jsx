import { useEffect } from "react";
import { useState } from "react";



function useLocalStroage( key,initialvalue ) {
    const [value,setValve]=useState(()=>{
        let currentvalue;
        try {
            currentvalue=JSON.parse(localStorage.getItem(key)||initialvalue)  
        } catch (error) {
            console.log(error);
        }
        return currentvalue
    })
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[value,key])

  return [value,setValve]
}

export default useLocalStroage