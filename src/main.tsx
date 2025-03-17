import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import AppRoutes from "./Routes";
import { system } from "./design/theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider value={system}>
        <AppRoutes />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
