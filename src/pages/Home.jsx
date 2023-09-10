import { Link } from "react-router-dom";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import { useEffect, useState } from "react";
import Property from "../components/Property";
import "./styles.css";

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  linkName,
  buttonText,
}) => (
  <div className="banner__container">
    <div className="banner">
      <p>{purpose}</p>
      <h1>
        {title1}
        {title2}
      </h1>
      <h1>
        {desc1}
        {desc2}
      </h1>
      <button>
        <Link to={`${linkName}`}> {buttonText}</Link>
      </button>
    </div>
  </div>
);

const Banner2 = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  linkName,
  buttonText,
}) => (
  <div className="banner__container2">
    <div className="banner">
      <p>{purpose}</p>
      <h1>
        {title1}
        {title2}
      </h1>
      <h1>
        {desc1}
        {desc2}
      </h1>
      <button>
        <Link to={`${linkName}`}> {buttonText}</Link>
      </button>
    </div>
  </div>
);

export default function Home() {
  const [forSale, setForSale] = useState([]);
  const [forRent, setForRent] = useState([]);

  useEffect(() => {
    try {
      fetchApi(
        `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
      ).then((data) => {
        setForSale(data.hits);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      fetchApi(
        `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
      ).then((data) => {
        setForRent(data.hits);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <Banner
        purpose={"RENT A HOME"}
        title1="Rental Homes for "
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes "
        desc2={"and more"}
        buttonText={"Explore Renting"}
        linkName="/purpose=for-rent"
      />
      <div className="house-card">
        {/* Rent */}
        {forRent.map((property) => (
          <Property key={property?.id} property={property} />
        ))}
      </div>

      <Banner2
        purpose={"Buy A HOME"}
        title1="Find, & Buy Your "
        title2="Dream Home"
        desc1="Explore Apartments, Villas, Homes "
        desc2={"and more"}
        buttonText={"Explore Buying"}
        linkName="/purpose=for-sale"
      />
      <div className="house-card">
        {/* Buy */}
        {forSale.map((property) => (
          <Property key={property?.id} property={property} />
        ))}
      </div>
    </div>
  );
}
