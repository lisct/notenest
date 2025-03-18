import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Providers from "./Providers";
import AppRoutes from "./Routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <AppRoutes />
    </Providers>
  </StrictMode>
);
