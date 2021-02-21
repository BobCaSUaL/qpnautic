import React from 'react';
import { Content, Button, Text } from 'native-base';
import { ScreenProps } from '../types';

export const LandingScreen = (props: ScreenProps) => (
  <Content>
    <Text>
      This is Content Section
    </Text>
    <Text>Route = {props.route.name}</Text>
    <Button
      full
      rounded
      primary
      style={{ marginTop: 10 }}
      onPress={() => props.navigation.navigate("Home")}
    >
      <Text>Goto Home</Text>
    </Button>
  </Content>
);
