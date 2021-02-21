import React from 'react';
import { Content, Button, Text } from 'native-base';
import { ScreenProps } from '../types';

export const HomeScreen = (props: ScreenProps) => (
  <Content>
    <Text>
      This is Content Section
    </Text>
    <Text>Route = {props.route.name}</Text>
  </Content>
);
