import { GestureResponderEvent } from "react-native";

export interface TouchableHelperDescriptorI<T extends {}> {
  helperId: string
  helperProps?: T
}

export interface TouchableHelperContextI {
  handleTouchableHelpPress: (
    event: GestureResponderEvent | undefined,
    item: TouchableHelperDescriptorI<{}>
  ) => void
}