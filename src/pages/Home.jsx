import { Link } from "react-router-dom";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import { useEffect, useState } from "react";
import Property from "../components/Property";

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
    <div className="bb">
      <p>{purpose}</p>
      <p>
        {title1}
        {title2}
      </p>
      <p>
        {desc1}
        {desc2}
      </p>
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
    <div className="bb">
      <p>{purpose}</p>
      <p>
        {title1}
        {title2}
      </p>
      <p>
        {desc1}
        {desc2}
      </p>
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
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
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
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
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
