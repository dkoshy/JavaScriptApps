import { createContext } from "react";
import navValues from "./NavValues";

const NavigationContext = createContext(navValues.HouseList);

export default NavigationContext;