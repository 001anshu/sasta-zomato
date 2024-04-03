import { useEffect, useState } from "react"

const useConnection=()=>{
  const [check,setcheck]=useState(true);

  useEffect(()=>{
    window.addEventListener("online",()=>{
      setcheck(true);
    })
    window.addEventListener("offline",()=>{
      setcheck(false);
    })
  },[])
  return check;
}
export default useConnection;