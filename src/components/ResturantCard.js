import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
 // console.log(resData, "resList");
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData.info;
  return (
    <>
      <div className="res-card">
        <img
          className="res-logo"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines}</h4>
        <h4>{avgRating} rating</h4>
        <h4> {sla.deliveryTime} minutes</h4>
        <h4>{costForTwo}</h4>
      </div>
    </>
  );
};
export default ResturantCard;
