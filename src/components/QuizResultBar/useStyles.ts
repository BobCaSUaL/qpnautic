import { StyleProp, StyleSheet, TextStyle, TouchableNativeFeedback, ViewStyle } from "react-native"

interface OptionsI {
  // NOTE: this type is needed as the type inferene will be propagated up
  // to the components props thought the ExtendingStyleProps
  
}

export const getStyle = (options?: OptionsI) => {
  const styleSheet = StyleSheet.create({
    container: {} as ViewStyle,
    contentContainer: {
      display: 'flex',
      flexDirection: 'row',
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
    } as ViewStyle,
    badgeContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 12,
    } as ViewStyle,
    badge: {
    } as ViewStyle,
  });

  return {
    ...styleSheet,
    succeededBadgeContainer: styleSheet.badgeContainer,
    succeededBadge: styleSheet.badge,
    failedBadgeContainer: styleSheet.badgeContainer,
    failedBadge: styleSheet.badge,
  }
}
