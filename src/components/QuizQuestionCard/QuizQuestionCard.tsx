import { Body, Card, CardItem, Icon, Left, Radio, Right, Text, View } from 'native-base';
import React, { SyntheticEvent } from 'react';
import { Quiz, QuizOption } from '../../containers/QuizContainer/type';
import { ExtendingStylePropsT, useStylesheet } from '../../utils/styles';
import MapList from '../MapList';
import { getStyle } from './useStyles';

interface Props extends ExtendingStylePropsT<typeof getStyle> {
  quiz: Quiz
  selectedAnwer?: QuizOption,
  onAnswer: (event: SyntheticEvent | undefined, answer: QuizOption) => void
}

export const QuizQuestionCard = (props: Props) => {
  const { quiz, selectedAnwer, onAnswer } = props;
  const styles = useStylesheet(props, getStyle);
  
  return (
    <Card style={styles.container}>
      <CardItem header>
        <Text>{quiz.question}</Text>
      </CardItem>
      <CardItem>
        <MapList
          as={Body}
          containerStyle={styles.body}
          listItemStyle={{ paddingRight: 8 }}
          items={quiz.options}
          component={(option) => (
            <View style={styles.itemContainer}>
              <View style={styles.itemTextContainer}>
                <Text adjustsFontSizeToFit>{option.text}</Text>
              </View>
              <Radio selected={option.id === selectedAnwer?.id} />
            </View>
          )}
          onItemPress={onAnswer}
        />
      </CardItem>
      <CardItem footer></CardItem>
    </Card>
  )
}