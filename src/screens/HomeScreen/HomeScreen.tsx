import React, { useCallback } from 'react';
import { Content, Button, Text } from 'native-base';
import { ScreenProps } from '../types';
import { ContainerProps } from '../../containers/types';

export const HomeScreen = (props: ContainerProps) => {
  const handleGoToHomeButtonPress = useCallback(
    () => props.navigation?.navigate("Home"),
    [props.navigation?.navigate]
  )

  return (
  <Content>
    <Text>
      This is Content Section
    </Text>
    <Content>
        <Text>
          This is Content Section
        </Text>
        <Button
          full
          rounded
          primary
          style={{ marginTop: 10 }}
          onPress={handleGoToHomeButtonPress}
        >
          <Text>Goto Home</Text>
        </Button>
      </Content>
  </Content>
)};
