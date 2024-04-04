import RestroCard from "./RestroCard";
import useConnection from "../utils/useConnection";
import { useEffect, useState } from "react";
import Nakli from "./Nakli";
import { Link } from "react-router-dom";
import { API } from "../utils/constant";

const Body = () => {
  // local state super ponwerfull

  const [orignaldata, setorignaldata] = useState("");
  const [filterdata, setfilterdata] = useState("");
  const [ip, setip] = useState("");
  const check=useConnection();
  useEffect(() => {
    console.log("useeffect");
    fetchdata();
  }, []);


  const fetchdata = async () => {
    const data2 = await fetch(API);
    const json = await data2.json();

    const restaurants =
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    setorignaldata(restaurants);
    setfilterdata(restaurants);
  };
  {
    if(check==false){
      return(
        <div>
          <h1>oops sems you are not connected to internet</h1>
        </div>
      )
    }
  }
  

  return (
    <div className="body">
      <div>
        <button
          className="bg-yellow-100 p-2 m-3 rounded-md"
          onClick={() => {
            const a = filterdata.filter((ps) => ps.info.sla.deliveryTime > 30);
            setfilterdata(a);
            console.log(a);
          }}
        >
          click me to sort
        </button>
        <button
          className="bg-yellow-100 p-2 m-3 rounded-md"
          onClick={() => {
            setfilterdata(orignaldata);
          }}
        >
          click me to see orignal
        </button>
      </div>
      <div className="flex justify-center">
        <input
          type="text"
          className="border border-blue-200 border-2 flex items-center rounded m-3 min-w-80 "
          value={ip}
          onChange={(e) => {
            setip(e.target.value);
          }}
        />
        <button
          className="bg-blue-100 p-2 m-3 rounded-md"
          onClick={() => {
            console.log(ip);
            const b = orignaldata.filter((dr) =>
              dr.info.name.toLowerCase().includes(ip.toLowerCase())
            );
            setfilterdata(b);
          }}
        >
          serch
        </button> 
      </div>
      {(filterdata.length === 0)?<Nakli/>:
      <div className="flex flex-wrap justify-center  ">
      {filterdata.map((restr) => (
        <Link to ={"/restromenu/"+ restr.info.id} key={restr.info.id}><RestroCard key={restr.info.id} resdata={restr} /></Link>
      ))}
    </div>
      }
      
      
    </div>
  );
};
export default Body;
