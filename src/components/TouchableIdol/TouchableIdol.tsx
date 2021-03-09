import { Icon } from 'native-base'
import React from 'react'
import { Text, View } from 'react-native'
import { Touchable } from '../Touchable/Touchable'
import { TouchableHelperDescriptorI } from '../TouchableHelper'
import { TouchableHelper } from '../TouchableHelper/TouchableHelper'
import { ExtendingStyleProps, useStyle } from './useStyle'

interface Props extends ExtendingStyleProps {
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
  const styles = useStyle(props)
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