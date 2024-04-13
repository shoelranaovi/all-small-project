import { useLayoutEffect, useState } from "react";

export default function useWindowResize() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  function resizedata() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useLayoutEffect(()=>{
    resizedata()
    window.addEventListener('resize',resizedata)
    return ()=>{
      window.removeEventListener('resize',resizedata)
    }
  },[]) 

  return windowSize;
}
