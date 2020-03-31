import React from "react";
import PasswordInput from "../components/PasswordInput";

export default {
  title: "PasswordInput",
  component: PasswordInput
};

export const Empty = () => <PasswordInput value="" />;
export const NotSafe = () => <PasswordInput value="abc" />;
export const Safe = () => <PasswordInput value="abcdefg" />;
export const Safer = () => <PasswordInput value="abcdefgasdasjdklasdsdf" />;
