import React, { useEffect } from 'react';
import { Button, Content, Text } from 'native-base';
import { ContainerProps } from '../types';
import { useNavigation } from '@react-navigation/native';

export const Home = (props: ContainerProps) => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => navigation?.navigate("Home"), 1000)
  }, [navigation])
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
          // onPress={handleGoToHomeButtonPress}
        >
          <Text>Goto Home</Text>
        </Button>
      </Content>
  </Content>
  )
};
