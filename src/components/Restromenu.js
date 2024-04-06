import Nakli from "./Nakli";
import useMenu from "../utils/useMenu";
import { useParams } from "react-router-dom";

const Restromenu = () => {
  const { resId } = useParams();

  const data = useMenu(resId);

  const main = data.main;

  const menu = data.data;
  console.log(menu);

  return menu == null ? (
    <Nakli />
  ) : (
    <div className="">
      <div className="border-black border-2 flex-row  justify-center">
        <h1 className="text-4xl text-center">{main.name}</h1>

      </div>
      <ul>
        {menu.map((re) => (
          <li key={re.card.info.id}>{re.card.info.name}</li>
        ))}
      </ul>
      this is restromenu page
    </div>
  );
};

export default Restromenu;
