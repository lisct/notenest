import { Flex } from "@chakra-ui/react";
import NavLink from "./NavLink";

const Menu = () => {
  return (
    <Flex gap={{ base: "xs", md: "lg" }}>
      <NavLink to="/" text="Notes" />
      <NavLink to="/details" text="Details" />
      <NavLink to="/login" text="Login" />
    </Flex>
  );
};

export default Menu;
