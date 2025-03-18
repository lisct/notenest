import { Box, Container, Text } from "@chakra-ui/react";

const Footer = () => (
  <Box as="footer" bg="blue.100" py="lg">
    <Container textAlign="center">
      <Text fontSize="sm">&copy; {new Date().getFullYear()} NoteNest. All rights reserved.</Text>
    </Container>
  </Box>
);

export default Footer;
