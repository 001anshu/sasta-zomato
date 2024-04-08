import { useState } from "react";
import ItemsAccordion from "./ItemsAccordion";


const RestaurantMenuAccordion = (data) => {
  // console.log(data);
  const [clicked,setClicked]=useState(false);
  const handleExpand=()=>{
    setClicked(!clicked);
  }
  return (
    <div className="mx-auto w-1/2 my-4 p-4 shadow-xl rounded-lg ">
      <div className="flex justify-between  p-0 cursor-pointer"  onClick={handleExpand}>
        <div className="p-4 text-lg font-semibold " >{data?.data?.title} ({data?.data?.itemCards?.length}) </div>
        <div>👇</div>
      </div>
      <div className="px-4">
        {clicked&&<ItemsAccordion items={data?.data?.itemCards}/>}
      </div>
      
    </div>
  );
};
export default RestaurantMenuAccordion;
