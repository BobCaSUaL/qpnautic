import { Badge, Card, CardItem, Text } from 'native-base';
import React, { SyntheticEvent } from 'react';
import { View } from 'react-native';
import { ExtendingStylePropsT, useStylesheet } from '../../utils/styles';
import Touchable from '../Touchable';
import { getStyle } from './useStyles';

interface Props extends ExtendingStylePropsT<typeof getStyle> {
  succeededCount: number
  failedCount: number
  onSucceededPress: (event?: SyntheticEvent) => void
  onFailedPress: (event?: SyntheticEvent) => void
}

export const QuizResultBar = (props: Props) => {
  const {
    succeededCount,
    failedCount,
    onSucceededPress,
    onFailedPress,
  } = props;
  const styles = useStylesheet(props, getStyle);
  
  return (
    <Card style={styles.container}>
      <CardItem style={styles.contentContainer}>
        <Touchable onPress={onSucceededPress}>
          <View style={styles.succeededBadgeContainer}>
            <Badge success style={styles.succeededBadge}>
              <Text>{succeededCount}</Text>
            </Badge>
          </View>
        </Touchable>
        <Touchable onPress={onFailedPress}>
          <View style={styles.failedBadgeContainer}>
            <Badge danger style={styles.failedBadge}>
              <Text>{failedCount}</Text>
            </Badge>
          </View>
        </Touchable>
      </CardItem>
    </Card>
  )
}