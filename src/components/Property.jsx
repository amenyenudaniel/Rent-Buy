import { Link } from "react-router-dom";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import millify from "millify";
import "./styles.css";
const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => {
  return (
    <Link to={`/property/${externalID}`} className="linktag app__property">
      <img
        src={coverPhoto ? coverPhoto?.url : "/public/house.jpg"}
        alt="property"
        loading="lazy"
        className="image_url"
      />

      <div className="property__head">
        {isVerified && <MdVerified className="verify" />}
        <p>
          AED {millify(price)}
          {rentFrequency && `/${rentFrequency}`}
        </p>
        <img src={agency?.logo?.url} alt="logo" className="property__logo" />
      </div>

      <div className="property__stat">
        <p>
          {rooms}
          <span>
            <FaBed />
          </span>
        </p>
        <p>
          {baths}
          <span>
            <FaBath />
          </span>
        </p>
        <p>
          {millify(area)} sqft
          <span>
            <BsGridFill />
          </span>
        </p>
      </div>

      <p className="property__title">
        {title.length > 30 ? `${title.substring(0, 30)}... ` : title}
      </p>
    </Link>
  );
};

export default Property;
