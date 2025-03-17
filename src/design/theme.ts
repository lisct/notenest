import { defineConfig, createSystem, defaultConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        black: {
          100: { value: "#212B36" },
        },
        blue: {
          100: { value: "#FAFCFD" },
        },
        gray: {
          100: { value: "#9DA0A4" },
        },
        red: {
          100: { value: "#EA524F" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
