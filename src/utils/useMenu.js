import { useEffect, useState } from "react";
import { MENU_API } from "./constant";
const useMenu = (resId) => {
  const [data, setData] = useState(null);
  const [main, setMain] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data2 = await fetch(MENU_API + resId);
    const json = await data2.json();
    const r =
      json.data.cards[4].groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card
        .itemCards;
    const m = json.data?.cards[0]?.card?.card?.text;
    setMain(m);

    setData(r);
  };

  return {data, main};
};
export default useMenu;
