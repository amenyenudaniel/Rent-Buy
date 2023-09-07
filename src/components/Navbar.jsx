import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Navbar = () => {
  return (
    <Flex p="2" borderBottom={"1"} borderColor={"gray.100"}>
      <Box fontSize={"3xl"} color={"blue.400"} fontWeight={"bold"}>
        <Link className="linktag" to={"/"}>
          Rent&Buy
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
