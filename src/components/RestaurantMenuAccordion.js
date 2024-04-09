import {useState} from "react";
import ItemsAccordion from "./ItemsAccordion";


const RestaurantMenuAccordion = ({data,clicked,setshowIndex,checker}) => {
  // console.log(data?.title);
  const[open,setopen]=useState(true);
  const handleExpand=()=>{
    
    if(checker&&open){
      setopen(false);
    }
    else{
      setshowIndex();
      setopen(true);
    }
  }
  return (
    <div className="mx-auto w-1/2 my-4 p-4 shadow-xl rounded-lg ">
      <div className="flex justify-between  p-0 cursor-pointer"  onClick={handleExpand}>
        <div className="p-4 text-lg font-semibold " >{data?.title} ({data?.itemCards?.length}) </div>
        <div>👇</div>
      </div>
      <div className="px-4">
        {clicked && open &&<ItemsAccordion items={data?.itemCards}/>}
      </div>
      
    </div>
  );
};
export default RestaurantMenuAccordion;
