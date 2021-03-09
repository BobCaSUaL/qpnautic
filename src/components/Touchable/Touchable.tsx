import React, { ReactNode } from 'react';
import {
  GestureResponderEvent,
  Platform,
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableOpacity,
  BackgroundPropType,
} from 'react-native';

interface Props {
  rippleBackgroundAndroid?: BackgroundPropType
  onPress?: ((event: GestureResponderEvent) => void) & (() => void)
  children: ReactNode | ReactNode[]
}

export const Touchable = (props: Props) => {
  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback
        onPress={props.onPress}
        background={props.rippleBackgroundAndroid}
      >
        {props.children}
      </TouchableNativeFeedback>
    )
  }
  if (Platform.OS === 'ios') {
    return (
      <TouchableHighlight onPress={props.onPress}>
        {props.children}
      </TouchableHighlight>
    )
  }
  return (
    <TouchableOpacity onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  )
}