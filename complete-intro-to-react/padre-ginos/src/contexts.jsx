import React from "react";
import { createContext } from "react";

// const hook = [[], function () {}]; Mimicking useState return type for context default value
export const CartContext = createContext([[], function () {}]);
