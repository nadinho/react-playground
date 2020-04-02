import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "../components/Button";

export default {
  title: "Button",
  component: Button
};

export const XS = () => (
  <Button onClick={action("clicked")} size="xs">
    XS Button
  </Button>
);
export const S = () => (
  <Button onClick={action("S")} size="s">
    S Button
  </Button>
);
export const M = () => (
  <Button onClick={action("M")} size="m">
    M Button
  </Button>
);
export const L = () => (
  <Button onClick={action("L")} size="l">
    L Button
  </Button>
);
export const XL = () => (
  <Button onClick={action("XL")} size="xl">
    XL Button
  </Button>
);
export const XXL = () => (
  <Button onClick={action("XXL")} size="xxl">
    XXL Button
  </Button>
);
