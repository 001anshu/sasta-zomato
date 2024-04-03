
import { useState } from "react";


const UserC=(props)=>{
  const{name,id}=props;
  const [count,setCount]=useState(0);
  return(
    
    <div className="user">
      <h1>{name}</h1>
      <h2>{id}</h2>
      <h3>cont:{count}</h3>
      <button onClick={()=>{
        let a=count
        a=a+1;
        setCount(a);
      }}>coun</button>
      
      
    </div>
  )
}
export default UserC;