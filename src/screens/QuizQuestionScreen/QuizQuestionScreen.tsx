// import { ParamListBase } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
import { Text, View } from 'native-base';
import React, { useCallback, useContext, useEffect } from 'react';
import QuizQuestionCard from '../../components/QuizQuestionCard';
import { quizActions, QuizContext } from '../../containers/QuizContainer';
import { Quiz } from '../../containers/QuizContainer/type';
import { ScreenProps } from '../types';

export const QuizQuestionScreen = (props: ScreenProps<{ number: number }>) => {
  const { quizDispatch, quizState } = useContext(QuizContext);

  const quizNumber = props.route.params?.number ?? 0;
  const quizCurrent = quizState.quizList[quizNumber] as Quiz | undefined;

  useEffect(() => {
    quizDispatch(quizActions.focusRequested({ onNumber: quizNumber }));
  }, [quizNumber]);

  const handleAnswer = useCallback((_event, answerOption) => {
    quizDispatch(quizActions.answerRequested({ onNumber: quizNumber }, answerOption))
  }, [quizNumber])

  // const onSubmitPress = useCallback(() => {
  //   (props.navigation as StackNavigationProp<ParamListBase>).push('QuizQuestion', { number: (props.route.params?.number ?? 0) + 1});
  // }, []);

  return quizState.loading ? (
    <View><Text>Loading ....</Text></View>
  )
  : quizState.error ? (
    <View><Text>Error ....</Text></View>
  )
  : (
    <View>
      {!quizCurrent || <QuizQuestionCard quiz={quizCurrent} onAnswer={handleAnswer} />}
    </View>
  )
}