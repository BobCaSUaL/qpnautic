import { Content, ListItem, View, } from 'native-base';
import React from 'react'
import { GestureResponderEvent, StyleProp, ViewProps, ViewStyle } from 'react-native';
import { MapListItem } from './MapListItem';


interface Props<P> {
  as?: React.ComponentType<ViewProps>
  items: Array<P & { key?: string }>
  component: React.ComponentType<P>
  onItemPress?: (event: GestureResponderEvent | undefined, item: P) => void
  containerStyle?: StyleProp<ViewStyle>
  listItemStyle?: StyleProp<ViewStyle>
}

export function MapList<P>({
  as: RootComponent = View,
  items,
  component: Component,
  onItemPress,
  containerStyle,
  listItemStyle,
  ...restProps
}: Props<P>) {
  return (
    <RootComponent {...restProps} style={containerStyle}>
      {items.map((item, index) => (
        <MapListItem
          key={item.key || index}
          style={listItemStyle}
          item={item}
          onPress={onItemPress}
          component={Component}
        />
      ))}
    </RootComponent>
  )
}