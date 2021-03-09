import { useMemo } from "react"
import { StyleSheet, TextStyle, TouchableNativeFeedback, ViewStyle } from "react-native"
import { mergeStylesFromProp, PropStylesI } from "../../utils/styles"

export type StylesType = ReturnType<typeof getStyle>
export type ExtendingStyleProps = PropStylesI<StylesType>

export const getStyle = (options: {}) => ({
  ...StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    } as ViewStyle,
    labelContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    } as ViewStyle,
    icon: {
      fontSize: 100,
    } as TextStyle,
  }),
  rippleBackgroundAndroid: TouchableNativeFeedback.Ripple('lightsteelblue', true, 300)
})

export function useStylesheet<PropsT>(props: PropsT) {
  const options = props;
  // here you can compute more options, but remember to update
  // the useMemo deps if you use some prop within style.
  return useMemo(() => mergeStylesFromProp(props, getStyle(props)), [])
}
