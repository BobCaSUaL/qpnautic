import { Icon } from 'native-base';
import React, { memo, useContext } from 'react';
import { GestureResponderEvent } from 'react-native';
import { Touchable } from '../Touchable/Touchable';
import { TouchableHelperContext } from './context';
import { TouchableHelperDescriptorI } from './types';

interface Props<T> {
  item: T
}

export const TouchableHelper = memo(
  function _TouchableHelper<T extends TouchableHelperDescriptorI<H>, H>(props: Props<T>) {
    const { handleTouchableHelpPress } = useContext(TouchableHelperContext)
    return (
      <Touchable onPress={(event?: GestureResponderEvent) => {
        handleTouchableHelpPress(event, props.item)
      }}>
        <Icon name="help-circle"/>
      </Touchable>
    )
  }
)