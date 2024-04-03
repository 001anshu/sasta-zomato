import { useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import Nakli from "./Nakli";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
const Restromenu = () => {
  const [menu, setmenu] = useState(null);
  const [main, setmain] = useState("");
  const {resId} = useParams();
  console.log(resId)
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data2 = await fetch(MENU_API+resId)
    const json = await data2.json();
    console.log(
      json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card
      .itemCards+ "a"
    );
    const r =
      json.data.cards[4].groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card
        .itemCards;
    const m = json.data?.cards[0]?.card?.card?.text;
    setmain(m);
    setmenu(r);
  };

  return menu == null ? (
    <Nakli />
    
  ) : (
    <div>
      <div>
        <h1>{main}</h1>
    
      </div>
      <ul>
        {menu.map((re) => <li key={re.card.info.id}>{re.card.info.name}</li>
        )}

      </ul>
      this is restromenu page
    </div>
  );
};
export default Restromenu;
