import { CDN_URL } from "../utils/constant";

const RestroCard = (props) => {
  const { resdata } = props;

  return (
    <div className="h-auto w-52  bg-gray-100 m-6 rounded-xl">
      <img
        className="rounded-md"
        src={ CDN_URL+resdata.info.cloudinaryImageId
        }
      />
      <div className="py-3 px-2 ">
        <b>{resdata.info.name}</b>
      </div>
      <div className=" px-2 ">
        {resdata.info.cuisines.join(", ")}
      </div>
      <div className=" px-2">
        <div className="">{resdata.info.avgRating}★</div>
        <div className="">Delivery in {resdata.info.sla.deliveryTime} mins</div>
        <div className="">{resdata.info.costForTwo}</div>
      </div>
      <div className="px-2">{resdata.info.locality}</div>
    </div>
  );
};
export default RestroCard;