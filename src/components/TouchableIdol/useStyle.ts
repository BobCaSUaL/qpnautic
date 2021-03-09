import { useMemo } from "react"
import { StyleProp, StyleSheet, TextStyle, TouchableNativeFeedback, ViewStyle } from "react-native"
import { mergeStylesFromProp, PropStylesI } from "../../utils/styles"

export type ExtendingStyleProps = PropStylesI<ReturnType<typeof getStyle>> & Parameters<typeof getStyle>[0]

interface OptionsI {
  // NOTE: this type is needed as the type inferene will be propagated up
  // to the components props thought the ExtendingStyleProps
  /**
   * Render with primary color
   */
  primary?: boolean,
  /**
   * Render with secondary color
   */
  secondary?: boolean,
  /**
   * Render with accent color
   */
  accent?: boolean,
}

export const getStyle = (options?: OptionsI) => ({
  ...StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      // NOTE cast to ViewStyle: the type inference will be propagated
      // up to the components props throught the ExtendingStyleProps 
    } as ViewStyle,
    labelContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    } as ViewStyle,
    iconBase: {
      fontSize: 100,
    } as TextStyle,
    labelTextBase: {} as TextStyle,
    colorPrimary: { color: 'darkblue' }, // there is no cast as here we only wants to setup the color
    colorSecondary: { color: 'green' },
    colorAccent: { color: 'red' },
  }),

  // Here a non Stylesheed style property
  rippleBackgroundAndroid: TouchableNativeFeedback.Ripple('lightsteelblue', true, 300),

  // Some style computation
  get iconPrimary(): StyleProp<TextStyle> {
    return [this.iconBase, this.colorPrimary];
  },
  get iconSecondary(): StyleProp<TextStyle> {
    return [this.iconBase, this.colorSecondary];
  },
  get iconAccent(): StyleProp<TextStyle> {
    return [this.iconBase, this.colorAccent];
  },
  get icon(): StyleProp<TextStyle> {
    if (options?.accent) {
      return this.iconAccent
    } else if (options?.secondary) {
      return this.iconSecondary;
    } else /* if (options?.primary) or default */ {
      return this.iconPrimary;
    }
  },
  get labelTextPrimary(): StyleProp<TextStyle> {
    return [this.labelTextBase, this.colorPrimary];
  },
  get labelTextSecondary(): StyleProp<TextStyle> {
    return [this.labelTextBase, this.colorSecondary];
  },
  get labelTextAccent(): StyleProp<TextStyle> {
    return [this.labelTextBase, this.colorAccent];
  },
  get labelText(): StyleProp<TextStyle> {
    if (options?.accent) {
      return this.labelTextAccent
    } else if (options?.secondary) {
      return this.labelTextSecondary;
    } else /* if (options?.primary) or default */ {
      return this.labelTextPrimary;
    }
  }
})

export function useStyle(props: ExtendingStyleProps) {
  const options: OptionsI = props;
  // here you can compute more options, but remember to update
  // the useMemo deps if you use some prop within style.
  return useMemo(() => mergeStylesFromProp(props, getStyle(props)), [])
}
