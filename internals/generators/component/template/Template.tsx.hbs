import { Icon } from 'native-base'
import React from 'react'
import { Text, View } from 'react-native'
import { ExtendingStylePropsT, useStylesheet } from '../../utils/styles'
import { Touchable } from '../Touchable/Touchable'
import { TouchableHelperDescriptorI } from '../TouchableHelper'
import { TouchableHelper } from '../TouchableHelper/TouchableHelper'
import { getStyle } from './useStyle'

interface Props extends ExtendingStylePropsT<typeof getStyle> {
  iconName: string
  labelText: string
  onPress: () => void
  helperDescriptor: TouchableHelperDescriptorI<{}>
}

function lastOf<T>(elem: T | Array<T>): T {
  if (Array.isArray(elem)) return elem[elem.length - 1];
  return elem;
}

export const TouchableIdol = React.memo((props: Props) => {
  const styles = useStylesheet(props, getStyle);
  return (
    <Touchable
      rippleBackgroundAndroid={lastOf(styles.rippleBackgroundAndroid)}
      onPress={props.onPress}
    >
      <View style={styles.container}>
        <Icon name={props.iconName} style={styles.icon} />
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>{props.labelText}</Text>
          <TouchableHelper item={props.helperDescriptor} />
        </View>
      </View>
    </Touchable>
  );
})