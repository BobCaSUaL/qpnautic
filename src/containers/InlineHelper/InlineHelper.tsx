import { Text } from 'native-base';
import React, { useContext } from 'react';
import { View } from 'react-native';
import Touchable from '../../components/Touchable';
import { TouchableHelperDescriptorI } from '../../components/TouchableHelper';
import { AppContext } from '../App';
import { appHelperDismiss } from '../App/actions';
import { ContainerProps } from '../types';

type Props = ContainerProps<{
  helperDescriptor: TouchableHelperDescriptorI<{}>
}>

export const InlineHelper = (props: Props) => {
  const { appDispatch } = useContext(AppContext)
  const helperDescriptor = props.route?.params?.helperDescriptor;

  return (
    <View style={{ opacity: 0.9, backgroundColor: '#FFF', height: '100%' }}>
      <Touchable onPress={() => appDispatch(appHelperDismiss())}><Text>CLOSE</Text></Touchable>
      <Text>INLINE HELPER</Text>
    </View>
  )
}