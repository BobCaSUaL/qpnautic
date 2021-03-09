import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { mainSaga } from './saga';
import { QuizContext, initialState, reducer } from './reducers';
import useSagaReducer from 'use-saga-reducer';
import { ContainerProps } from '../types';

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const QuizContainer = (props: ContainerProps<{}> & Props) => {
  const navigation = useNavigation()
  const [quizState, quizDispatch] = useSagaReducer(mainSaga, reducer, initialState, undefined, {
    context: { navigation }});

  return (
    <QuizContext.Provider value={{ quizState, quizDispatch }}>
        {props.children}
    </QuizContext.Provider>
  )
};
