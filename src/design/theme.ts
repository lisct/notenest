import { defineConfig, createSystem, defaultConfig } from "@chakra-ui/react";
import { tokens } from "./tokens";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        black: {
          100: { value: tokens.black },
        },
        blue: {
          100: { value: tokens.blue },
        },
        gray: {
          100: { value: tokens.gray },
        },
        red: {
          100: { value: tokens.red },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
