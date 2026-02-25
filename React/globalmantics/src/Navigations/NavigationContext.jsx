import { createContext } from "react";
import navValues from "./NavValues";

const navigationContext = createContext(navValues.HouseList);

export default navigationContext;