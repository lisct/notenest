import { defineConfig, createSystem, defaultConfig } from "@chakra-ui/react";
import { tokens } from "./tokens";
import { spacing } from "./spacing";

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
      spacing: {
        "3xs": { value: spacing["3xs"] },
        "2xs": { value: spacing["2xs"] },
        xs: { value: spacing.xs },
        sm: { value: spacing.sm },
        md: { value: spacing.md },
        lg: { value: spacing.lg },
        xl: { value: spacing.xl },
        "2xl": { value: spacing["2xl"] },
        "3xl": { value: spacing["3xl"] },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
