import { Flex, Box, Text, Button } from "@chakra-ui/react";
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
  imageUrl,
  buttonText,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <img src={imageUrl} alt="purpose" width={500} height={300} />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1} <br />
        {title2}
      </Text>
      <Text
        color="gray.700"
        fontSize="lg"
        fontWeight="medium"
        paddingTop="3"
        paddingBottom="3"
      >
        {desc1} <br />
        {desc2}
      </Text>
      <Button fontSize="xl">
        <Link to={`${linkName}`}> {buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home() {
  const [forSale, setForSale] = useState([]);
  const [forRent, setForRent] = useState([]);

  useEffect(() => {
    try {
      fetchApi(
        `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
      ).then((data) => {
        setForSale(data.hits); // Assuming "data" is an object with a "hits" property
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
        setForRent(data.hits); // Assuming "data" is an object with a "hits" property
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Box>
      <Banner
        purpose={"RENT A HOME"}
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2={"and more"}
        buttonText={"Explore Renting"}
        linkName="/purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap={"wrap"} justifyContent={"center"}>
        {/* Rent */}
        {forRent.map((property) => (
          <Property key={property?.id} property={property} />
        ))}
      </Flex>
      <Banner
        purpose={"Buy A HOME"}
        title1="Find, Buy & Own Your"
        title2="Dream Home"
        desc1="Explore Apartments, Villas, Homes"
        desc2={"and more"}
        buttonText={"Explore Buying"}
        linkName="/purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <Flex flexWrap={"wrap"} justifyContent={"center"}>
        {/* Buy */}
        {forSale.map((property) => (
          <Property key={property?.id} property={property} />
        ))}
      </Flex>
    </Box>
  );
}
