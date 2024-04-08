import { useEffect, useState } from "react";
import { MENU_API } from "./constant";
const useMenu = (resId) => {
  const [data, setData] = useState(null);
  const [main, setMain] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data2 = await fetch(MENU_API + resId);
    const json = await data2.json();
    const r = json.data.cards[4].groupedCard?.cardGroupMap?.REGULAR;
    const m = json.data?.cards[2]?.card?.card?.info;
    // console.log(json.data.cards[4].groupedCard?.cardGroupMap?.REGULAR)
    // console.log(json);
    setMain(m);
    // console.log(m);

    setData(r);
  };

  return { data, main };
};
export default useMenu;
