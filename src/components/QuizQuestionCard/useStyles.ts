import { StyleProp, StyleSheet, TextStyle, TouchableNativeFeedback, ViewStyle } from "react-native"

interface OptionsI {
  // NOTE: this type is needed as the type inferene will be propagated up
  // to the components props thought the ExtendingStyleProps
  
}

export const getStyle = (options?: OptionsI) => ({
  ...StyleSheet.create({
    container: {} as ViewStyle,
    body: {} as ViewStyle,
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    } as ViewStyle,
    itemTextContainer: {
      flex: 1,
      height: 60,
      justifyContent: 'center'
    },
  }),
})
