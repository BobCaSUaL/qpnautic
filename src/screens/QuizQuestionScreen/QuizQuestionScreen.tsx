import { Text, View } from 'native-base';
import React, { useCallback, useContext, useEffect } from 'react';
import QuizQuestionCard from '../../components/QuizQuestionCard';
import QuizResultBar from '../../components/QuizResultBar';
import { quizActions, QuizContext } from '../../containers/QuizContainer';
import { Quiz } from '../../containers/QuizContainer/type';
import { ScreenProps } from '../types';

export const QuizQuestionScreen = (props: ScreenProps<{ number: number }>) => {
  const { quizDispatch, quizState } = useContext(QuizContext);

  const quizNumber = props.route.params?.number ?? 0;
  const quizCurrent = quizState.quizList[quizNumber] as Quiz | undefined;
  const quizCurrentAnswer = quizState._quizCurrentAnswer;  // evaluated only after focusRequested
  const { succeeded: succeededCount, failed: failedCount } = quizState._resultsCounts;

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

  const handleSucceededPress = useCallback((_event) => {

  }, [])

  const handleFailedPress = useCallback((_event) => {

  }, [])

  return quizState.loading ? (
    <View><Text>Loading ....</Text></View>
  )
  : quizState.error ? (
    <View><Text>Error ....</Text></View>
  )
  : (
    <View>
      {!quizCurrent || (
        <QuizQuestionCard
          quiz={quizCurrent}
          selectedAnwer={quizCurrentAnswer}
          onAnswer={handleAnswer}
        />
      )}
      <QuizResultBar
        succeededCount={succeededCount}
        failedCount={failedCount}
        onSucceededPress={handleSucceededPress}
        onFailedPress={handleFailedPress}
      />
    </View>
  )
}