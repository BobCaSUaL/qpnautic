import { ListItem } from 'native-base';
import React, { useCallback } from 'react';
import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';
import Touchable from '../Touchable';

interface Props<P> {
  item: P & { key?: string }
  component: React.ComponentType<P>
  onPress?: (event: GestureResponderEvent | undefined, item: P) => void
  style?: StyleProp<ViewStyle>
}

export function MapListItem<P>(props: Props<P>) {
  const {
    item,
    component: Component,
    onPress,
    ...restProps
  } = props;

  const handlePress = useCallback((event?: GestureResponderEvent) => {
    onPress && onPress(event, item);
  }, [onPress, item]);

  const listItem = (
    <ListItem {...restProps}>
      <Component {...item} />
    </ListItem>
  );
  if (onPress) {
    return (
      <Touchable onPress={handlePress}>
        {listItem}
      </Touchable>
    );
  }
  return listItem;
}