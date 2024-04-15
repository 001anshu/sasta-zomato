import { useDispatch, useSelector } from "react-redux";
import SubItem from "./SubItem";
import { clearcart } from "../utils/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const handleclick=()=>{
    dispatch(clearcart());
  }
  const data = useSelector((store) => store.cart.items);
  console.log(data[0]);
  return (
    <div>
      
      <div className="w-1/2 m-auto">
      <button className=" bg-black text-white   m-2 rounded-lg p-2" onClick={handleclick}>Clear Cart</button>
        {data.map((item, index) => (
          // {cnsole.log(item.card.info.name)}
          <SubItem key={index} idata={item} />
        ))}
      </div>

      <h1>bahar ka kuch khaen ka sochna bhi mat</h1>
    </div>
  );
};

export default Cart;
