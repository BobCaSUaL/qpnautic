import { ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Text, View } from 'native-base';
import React, { useCallback, useContext, useEffect } from 'react';
import { quizActions, QuizContext } from '../../containers/QuizContainer';
import { ScreenProps } from '../types';

export const QuizQuestionScreen = (props: ScreenProps<{ number: number }>) => {
  const { quizDispatch, quizState } = useContext(QuizContext);

  useEffect(() => {
    quizDispatch(quizActions.focusRequested({ onNumber: props.route.params?.number ?? 0 }));
  }, []);

  const onSubmitPress = useCallback(() => {
    (props.navigation as StackNavigationProp<ParamListBase>).push('QuizQuestion', { number: (props.route.params?.number ?? 0) + 1});
  }, []);

  const quizCurrent = quizState.quizList[props.route.params?.number ?? 0]

  return (
    <View>
      <Text>D: {quizCurrent?.question}</Text>
      <Text>A: {quizCurrent?.options[0]}</Text>
      <Text>B: {quizCurrent?.options[1]}</Text>
      <Text>C: {quizCurrent?.options[2]}</Text>
      <Button onPress={onSubmitPress}><Text>NEXT</Text></Button>
    </View>
  )
}