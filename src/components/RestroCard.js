import { CDN_URL } from "../utils/constant";

const RestroCard = (props) => {
  const { resdata } = props;

  return (
    <div className="restrocard">
      <img
        className="food-img p5"
        src={ CDN_URL+resdata.info.cloudinaryImageId
        }
      />
      <div className="food-restroName p5">
        <b>{resdata.info.name}</b>
      </div>
      <div className="food-discription p5">
        {resdata.info.cuisines.join(", ")}
      </div>
      <div className="food-rtp p5">
        <div className="rating">{resdata.info.avgRating}★</div>
        <div className="deliveryTime p5">Delivery in {resdata.info.sla.deliveryTime} mins</div>
        <div className="price">{resdata.info.costForTwo}</div>
      </div>
      <div className="locality p5">{resdata.info.locality}</div>
    </div>
  );
};
export default RestroCard;