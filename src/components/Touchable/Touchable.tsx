import React, { ReactNode } from 'react';
import {
  GestureResponderEvent,
  Platform,
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

interface Props {
  onPress?: ((event: GestureResponderEvent) => void) & (() => void)
  children: ReactNode | ReactNode[]
}

export const Touchable = (props: Props) => {
  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback onPress={props.onPress}>
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