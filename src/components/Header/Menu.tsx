import { Flex } from "@chakra-ui/react";
import NavLink from "./NavLink";
import AuthButton from "./AuthButton";

const Menu = () => {
  return (
    <Flex gap="lg" alignItems="center">
      <NavLink to="/" text="Notes" />
      <NavLink to="/details" text="Details" />
      <AuthButton />
    </Flex>
  );
};

export default Menu;
