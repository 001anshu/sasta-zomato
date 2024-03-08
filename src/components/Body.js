import newobj from "../utils/mockdata";
import RestroCard from "./RestroCard";
import newobj from "../utils/mockdata";
import { useState } from "react";

const Body = () => {

  // local state super powerfull
 
  const [data,setdata]=useState(newobj);
  // const handleFilter=()=>{
  //   const newdata=newobj.filter((ps)=>ps.info.avgRating>4.5)
  //   setdata(newdata);
  // }
  
  return (
    <div className="body">
      <div>
        <button
          className="filter-btn"
          onClick={()=>{
            const a=data.filter((ps)=>ps.info.sla.deliveryTime>40);
            setdata(a);

          }}
          
        >
          click me to sort
        </button>
        <button
          className="filter-btn"
          onClick={()=>{
            
            setdata(newobj);

          }}
          
        >
          click me to see orignal
        </button>
        
      </div>

      <div className="cards">
        {
          data.map((rest)=>{
            <RestroCard key={rest.info.key} resdata={rest}/>
          })
        }
      </div>
    </div>
  );
};
export default Body;
