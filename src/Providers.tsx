import { FC, ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { system } from "./design/theme";

type Props = {
  children: ReactNode;
};
const Providers: FC<Props> = ({ children }) => (
  <ChakraProvider value={system}>
    <BrowserRouter>{children}</BrowserRouter>
  </ChakraProvider>
);

export default Providers;
