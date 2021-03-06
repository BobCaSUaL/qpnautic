import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Text } from 'native-base';
import React, { useCallback, useContext } from 'react';
import { BackHandler, View } from 'react-native';
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

  const dismiss = useCallback(() => appDispatch(appHelperDismiss()), [appDispatch]);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        dismiss();
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  return (
    <View style={{ opacity: 0.9, backgroundColor: '#FFF', height: '100%' }}>
      <Touchable onPress={dismiss}><Text>CLOSE</Text></Touchable>
      <Text>INLINE HELPER</Text>
    </View>
  )
}