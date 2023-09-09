import { Link } from "react-router-dom";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import millify from "millify";
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
    <div className="app__prop">
      <Link to={`/property/${externalID}`} className="linktag">
        <div>
          <div className="image_width">
            <img
              src={coverPhoto ? coverPhoto?.url : "/public/house.jpg"}
              alt="property"
              loading="lazy"
              className="image_url"
            />
          </div>
          <div>
            <div>
              <div>
                <div>{isVerified && <MdVerified />}</div>
                <p>
                  AED {millify(price)}
                  {rentFrequency && `/${rentFrequency}`}
                </p>
              </div>
              <div>{/* <Avatar size={"sm"} src={agency?.logo?.url} /> */}</div>
            </div>
            <div al>
              {rooms}
              <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft
              <BsGridFill />
            </div>
            <p fontSize={"lg"} color={"white"}>
              {title.length > 30 ? `${title.substring(0, 30)}... ` : title}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Property;
