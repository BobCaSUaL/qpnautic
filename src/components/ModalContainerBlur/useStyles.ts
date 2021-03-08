import { useMemo } from "react";
import { StyleSheet } from "react-native"
import { generateShadow } from "react-native-shadow-generator";

const useStyle = () => {
  return useMemo(() => StyleSheet.create({
    wrapper: {
      backgroundColor: 'transparent',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
    container: {
      backgroundColor: '#FFF',
      minHeight: '60%',
      borderTopLeftRadius: 24,
      borderTopRightRadius: 32,
      paddingTop: 18,
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 4,
      paddingRight: 12
    },
    headerCloseButton: {
      width: 28,
      height: 28,
      borderRadius: 16,
      overflow: 'hidden',
      backgroundColor: '#EAEAEA',
      ...generateShadow(6),
    },
    headerCloseButtonIcon: {
    },
    contentContainer: {
      
    },
  }), []);
}

export default  useStyle;