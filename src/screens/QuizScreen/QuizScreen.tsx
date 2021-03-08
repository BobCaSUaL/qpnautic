import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ScreenProps } from '../types';

const QuizStack = createStackNavigator();

const quizNavigatorOptions = {}

export const QuizScreen = (props: ScreenProps<{}>) => {
  return (null
    // <QuizContainer>
    //   <QuizStack.Navigator>
    //     <QuizStack.Screen
    //       name="Quiz"
    //       options={quizNavigatorOptions}
    //       component={QuizQuestionScreen}
    //     />
    //   </QuizStack.Navigator>
    // </QuizContainer>
  )
}
