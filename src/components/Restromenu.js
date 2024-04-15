import Nakli from "./Nakli";
import useMenu from "../utils/useMenu";
import { useParams } from "react-router-dom";
import RestaurantMenuAccordion from "./RestaurantMenuAccordion";
import { useState } from "react";


const Restromenu = () => {
  const { resId } = useParams();
  const [showIndex,setshowIndex]=useState(0);
  const [open,setopen]=useState(1);
  const data = useMenu(resId);
  // console.log(data.main);

  const main = data.main;

  const menu = data.data;

  const categories = menu?.cards?.filter(
    (s) =>
      s?.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const cuisines = main?.cuisines || [];

  return main == null ? (
    <Nakli />
  ) : (
    <div className="">
      <div className="flex-row  ">
        <h1 className="text-3xl text-left mx-auto w-1/2 p-2">{main.name}</h1>
        <div className=" text-left rounded-xl shadow-2xl  p-2 mx-auto w-1/2">
          <div className="">
            Rating-{main.avgRatingString}({main.totalRatingsString})-
            {main?.costForTwoMessage}
          </div>
          <div>
            {cuisines.map((a) => (
              <span key={a} className="text-orange-400">
                <u>{a}</u>{" "}
              </span>
            ))}
          </div>
          <div>
            <b>Outlet:- </b>
            {main.areaName}
          </div>

          <div>
            <b>Delivery </b> {main?.sla?.maxDeliveryTime}-
            {main?.sla?.minDeliveryTime} mins
          </div>
          <hr></hr>
          <div className="text-gray-400">
            {/* {main?.expectationNotifiers[0]?.text} */}
          </div>
        </div>
      </div>

      {categories.map((re, index) => (
        <RestaurantMenuAccordion
          key={re?.card?.card?.title}
          
          data={re?.card?.card}
          clicked={index==showIndex?true:false}
          setshowIndex={(()=>setshowIndex(index))}
          checker={index==showIndex}
      
        />
      ))}
    </div>
  );
};

export default Restromenu;
