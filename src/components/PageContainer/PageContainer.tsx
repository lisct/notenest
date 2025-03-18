import { FC, ReactNode } from "react";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

type Props = {
  children: ReactNode;
};

const PageContainer: FC<Props> = ({ children }) => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />

      <Container flex="1">
        <Box>{children}</Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default PageContainer;
