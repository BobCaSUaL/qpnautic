import { Icon } from 'native-base';
import React, { memo, useContext } from 'react';
import { GestureResponderEvent } from 'react-native';
import { AppContext } from '../../containers/AppContainer';
import { appHelperShow } from '../../containers/AppContainer/actions';
import { Touchable } from '../Touchable/Touchable';
import { TouchableHelperDescriptorI } from './types';

interface Props<T> {
  item: T
}

export const TouchableHelper = memo(
  function _TouchableHelper<T extends TouchableHelperDescriptorI<H>, H>(props: Props<T>) {
    const { appDispatch, appState } = useContext(AppContext)
    return (
      <Touchable onPress={(event?: GestureResponderEvent) => {
        appDispatch(appHelperShow(null, props.item))
      }}>
        <Icon name="help-circle"/>
      </Touchable>
    )
  }
)