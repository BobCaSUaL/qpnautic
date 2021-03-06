import React from "react";
import { TouchableHelperContextI } from "./types";

export const TouchableHelperContext = React.createContext<TouchableHelperContextI>({
  handleTouchableHelpPress: () => {}
})
