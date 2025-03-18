// test-utils.tsx
import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import Providers from "../Providers";

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, {
    wrapper: ({ children }) => <Providers>{children}</Providers>,
    ...options,
  });

export { customRender as render };
