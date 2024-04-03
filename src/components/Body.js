import RestroCard from "./RestroCard";
import newobj from "../utils/mockdata";
import { useEffect, useState } from "react";
import Nakli from "./Nakli";
import { Link } from "react-router-dom";
import { API } from "../utils/constant";

const Body = () => {
  // local state super ponwerfull

  const [orignaldata, setorignaldata] = useState("");
  const [filterdata, setfilterdata] = useState("");
  const [ip, setip] = useState("");

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
    if (filterdata.length === 0) {
      return (
        <div>
          <Nakli />
        </div>

      );
    }
  }

  return (
    <div className="body">
      <div>
        <button
          className="filter-btn"
          onClick={() => {
            const a = filterdata.filter((ps) => ps.info.sla.deliveryTime > 30);
            setfilterdata(a);
            console.log(a);
          }}
        >
          click me to sort
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setfilterdata(orignaldata);
          }}
        >
          click me to see orignal
        </button>
      </div>
      <div className="search">
        <input
          type="text"
          value={ip}
          onChange={(e) => {
            setip(e.target.value);
          }}
        />
        <button
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
      <div className="cards">
        {filterdata.map((restr) => (
          <Link to ={"/restromenu/"+ restr.info.id} key={restr.info.id}><RestroCard key={restr.info.id} resdata={restr} /></Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
