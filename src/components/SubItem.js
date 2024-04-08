import { items_img } from "../utils/constant";

const SubItem = (idata) => {
  console.log(idata);
  const price = idata.idata.price / 100 || idata.idata.defaultPrice / 100;
  return (
    <div className="flex border-y-2 m-3 justify-between shadow-lg rounded-lg p-2">
      <div className="w-2/3">
        <div className="font-semibold">{idata.idata.name}</div>
        <div className="font-semibold">{price}$</div>
        <div className="text-sm text-gray-500">{idata.idata.description}</div>
      </div>
      <div className="w-3/12 py-4">
        <div className="absolute rounded-md items-center  text-white bg-black "><button className="p-2 ">ADD</button></div>

        <img
          className="w-full rounded-lg "
          src={items_img + idata.idata.imageId}
        />
        
        
      </div>
    </div>
  );
};
export default SubItem;
