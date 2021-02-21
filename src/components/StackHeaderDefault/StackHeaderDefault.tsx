import React from 'react';
import { Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
import { StackHeaderProps } from '@react-navigation/stack';

export const StackHeaderDefault = (props: StackHeaderProps): React.ReactElement => {
  const { scene, previous, navigation } = props;
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Header>
      <Left>
        {previous
          ? (
            <Button transparent onPress={navigation.goBack}>
              <Icon name='arrow-back' />
            </Button>
          )
          : (
            <Button transparent>
              <Icon name='menu' />
            </Button>
          )
        }
      </Left>
      <Body>
        {typeof options.headerTitle !== 'function'
          ? <Title>{title}</Title>
          : options.headerTitle({
            children: title as string, //aka currentTitle
            onLayout: () => {/* implementation inspired from [node_modules/@react-navigation/stack/src/views/Header/HeaderSegment.tsx] */},
            allowFontScaling: options.headerTitleAllowFontScaling,
            tintColor: options.headerTintColor,
            style: options.headerTitleStyle,
          })}
      </Body>
      <Right />
    </Header>
  );
};
