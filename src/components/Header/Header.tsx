import { ChatCircleText } from "@phosphor-icons/react";
import { Container, Heading, Box, Flex } from "@chakra-ui/react";
import { NavLink as RouterNavLink } from "react-router-dom";
import Menu from "./Menu";

const Header = () => {
  return (
    <Box as="header" backgroundColor="blue.100">
      <Container paddingY="lg">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ base: "column", sm: "row" }}
          gap="sm"
        >
          <RouterNavLink to="/">
            <Box display="flex" alignItems="center" gap="2xs" color="red.100">
              <ChatCircleText size={32} weight="fill" />
              <Heading size="xl">NoteNest</Heading>
            </Box>
          </RouterNavLink>

          <Menu />
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
