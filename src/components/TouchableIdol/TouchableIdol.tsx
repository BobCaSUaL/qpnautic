import { Icon } from 'native-base'
import React, { useMemo } from 'react'
import { Dimensions, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import { Touchable } from '../Touchable/Touchable'

interface Props {
  iconName: string
  labelText: string
  onPress: () => void
  style?: StyleProp<ViewStyle>
  iconStyle?: StyleProp<TextStyle>
  labelContainerStyle?: StyleProp<ViewStyle>
}

const useStylesheet = () => {
  return useMemo(() => StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    label: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      fontSize: 100,
    },
  }), [])
}

export const TouchableIdol = (props: Props) => {
  const style = useStylesheet()
  return (
    <Touchable onPress={props.onPress}>
      <View style={[style.container, props.style]}>
        <Icon name={props.iconName} style={[style.icon, props.iconStyle]} />
        <View style={[style.label, props.labelContainerStyle]}>
          <Text>{props.labelText}</Text>
          <Icon name="help-circle"/>
        </View>
      </View>
    </Touchable>
  );
}