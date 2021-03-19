import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import QuizContainer from '../../containers/QuizContainer';
import QuizQuestionScreen from '../QuizQuestionScreen';
import QuizResultScreen from '../QuizResultScreen';
import { ScreenProps } from '../types';

const QuizStack = createStackNavigator();

const quizNavigatorOptions = {
  headerShown: false,
}

export const QuizScreenNavigator = (props: ScreenProps<{}>) => {
  return (
    <QuizContainer>
      <QuizStack.Navigator detachInactiveScreens>
        <QuizStack.Screen
          name="QuizQuestion"
          options={quizNavigatorOptions}
          component={QuizQuestionScreen}
        />
        <QuizStack.Screen
          name="QuizResult"
          options={quizNavigatorOptions}
          component={QuizResultScreen}
        />
      </QuizStack.Navigator>
    </QuizContainer>
  )
}
