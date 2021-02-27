import React, { useEffect } from 'react';
import { Text } from 'native-base';
import { ContainerProps } from '../types';
import { useNavigation } from '@react-navigation/native';

export const Landing = (props: ContainerProps) => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => navigation?.navigate("Home"), 1000)
  }, [navigation])
  return (
    <Text>Loading ...</Text>
  )
};
