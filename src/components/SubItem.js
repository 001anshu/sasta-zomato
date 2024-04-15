import { useDispatch } from "react-redux";
import { items_img } from "../utils/constant";
import { additem } from "../utils/cartSlice";

const SubItem = ({idata}) => {
  const dispatch=useDispatch();

  // console.log(idata);
  const handleclick=(i)=>{
    dispatch(additem(i));
    // alert(i.idata.name+" added")
    console.log(i);
  }
  const price = idata.price / 100 || idata.defaultPrice / 100;
  return (
    <div className="flex border-y-2 m-3 justify-between shadow-lg rounded-lg p-2">
      <div className="w-2/3">
        <div className="font-semibold">{idata.name}</div>
        <div className="font-semibold">{price}$</div>
        <div className="text-sm text-gray-500">{idata.description}</div>
      </div>
      <div className="w-3/12 py-4">
        <div className="absolute rounded-md items-center  text-white bg-black ">
          <button onClick={()=>handleclick(idata)} className="p-2 ">ADD</button>
          
        </div>

        <img
          className="w-full rounded-lg "
          src={items_img + idata.imageId}
        />
      </div>
    </div>
  );
};
export default SubItem;
