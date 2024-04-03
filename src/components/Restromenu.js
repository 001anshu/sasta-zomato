import Nakli from "./Nakli";
import useMenu from "../utils/useMenu";
import { useParams } from "react-router-dom";


const Restromenu = () => {
  const { resId } = useParams();

  const data = useMenu(resId);

  const main = data.main;

  const menu = data.data;

  return menu == null ? (
    <Nakli />
  ) : (
    <div>
      <div>
        <h1>{main}</h1>
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
