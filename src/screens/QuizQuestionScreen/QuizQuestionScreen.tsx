// import { ParamListBase } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
import { Text, View } from 'native-base';
import React, { useCallback, useContext, useEffect } from 'react';
import { Alert } from 'react-native';
import QuizQuestionCard from '../../components/QuizQuestionCard';
import { quizActions, QuizContext } from '../../containers/QuizContainer';
import { Quiz } from '../../containers/QuizContainer/type';
import { ScreenProps } from '../types';

export const QuizQuestionScreen = (props: ScreenProps<{ number: number }>) => {
  const { quizDispatch, quizState } = useContext(QuizContext);

  const quizNumber = props.route.params?.number ?? 0;
  const quizCurrent = quizState.quizList[quizNumber] as Quiz | undefined;
  const quizCurrentAnswer = quizState._quizCurrentAnswer;  // evaluated only after focusRequested

  useEffect(() => {
    quizDispatch(quizActions.focusRequested({ onNumber: quizNumber }));
  }, [quizNumber]);

  const handleAnswer = useCallback((_event, answerOption) => {
    if (quizCurrent !== undefined) {
      quizDispatch(quizActions.answerRequested({ onQuizId: quizCurrent.id }, answerOption))
    } else {
      console.warn('quizCurrent is not currently defined');
    }
  }, [quizCurrent])

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
      {!quizCurrent || <QuizQuestionCard quiz={quizCurrent} selectedAnwer={quizCurrentAnswer} onAnswer={handleAnswer} />}
    </View>
  )
}