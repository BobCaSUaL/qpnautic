import { Text } from 'native-base';
import React, { useContext } from 'react';
import { View } from 'react-native';
import Touchable from '../../components/Touchable';
import { AppContext } from '../App';
import { appHelperDismiss } from '../App/actions';
import { ContainerProps } from '../types';

export const InlineHelper = (props: ContainerProps) => {
  const { appDispatch } = useContext(AppContext)
  return (
    <View style={{ opacity: 0.9, backgroundColor: '#FFF', height: '100%' }}>
      <Touchable onPress={() => appDispatch(appHelperDismiss())}><Text>CLOSE</Text></Touchable>
      <Text>INLINE HELPER</Text>
    </View>
  )
}