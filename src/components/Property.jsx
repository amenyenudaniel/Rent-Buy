import { Link } from "react-router-dom";
import { Box, Text, Avatar, Flex } from "@chakra-ui/react";
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
    <Link to={`property/${externalID}`} className="linktag">
      <Flex
        flexWrap={"wrap"}
        w={"420px"}
        p={"5"}
        paddingTop="0"
        justifyContent={"flex-start"}
        cursor={"pointer"}
      >
        <Box>
          <img
            src={coverPhoto ? coverPhoto?.url : "/public/house.jpg"}
            alt="property"
            width={400}
            height={260}
            loading="lazy"
          />
        </Box>
        <Box w={"full"}>
          <Flex
            paddingTop={"2"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Flex alignItems={"center"}>
              <Box paddingRight={"3"} color={"green.500"}>
                {isVerified && <MdVerified />}
              </Box>
              <Text fontWeight={"bold"} fontSize={"lg"}>
                AED {millify(price)}
                {rentFrequency && `/${rentFrequency}`}
              </Text>
            </Flex>
            <Box>
              <Avatar size={"sm"} src={agency?.logo?.url} />
            </Box>
          </Flex>
          <Flex
            alignItems={"center"}
            p={"1"}
            justifyContent={"space-between"}
            w="250px"
            color="blue.400"
          >
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
            <BsGridFill />
          </Flex>
          <Text fontSize={"lg"}>
            {title.length > 30 ? `${title.substring(0, 30)}... ` : title}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default Property;
