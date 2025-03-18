import { ChatCircleText } from "@phosphor-icons/react";
import { Container, Heading, Box, Flex } from "@chakra-ui/react";
import Menu from "./Menu";

const Header = () => {
  return (
    <Box backgroundColor="blue.100">
      <Container paddingY="lg">
        <Flex justifyContent="space-between">
          <Box display="flex" alignItems="center" gap="2xs" color="red.100">
            <ChatCircleText size={32} weight="fill" />
            <Heading size="xl">NoteNest</Heading>
          </Box>

          <Menu />
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
