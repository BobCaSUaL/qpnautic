import { BlurView } from '@react-native-community/blur';
import { H1, Icon, Text, View } from 'native-base';
import React, { FunctionComponent } from 'react';
import { GestureResponderEvent } from 'react-native';
import commonStyle from '../commonStyle';
import Touchable from '../Touchable';
import useStyles from './useStyles';

interface Props {
  title: string
  children: React.ReactNode
  onDismiss: (event?: GestureResponderEvent) => void
}

export const ModalContainerBlur: FunctionComponent<Props> = (props) => {
  const styles = useStyles();

  return (
    <BlurView
      style={commonStyle.absolute}
      blurType="light"
      blurAmount={3}
      reducedTransparencyFallbackColor="white"
    >
      <View style={styles.wrapper}>
        <View style={styles.container} padder>
          <View style={styles.headerContainer}>
            <H1>{props.title}</H1>
            <View style={styles.headerCloseButton}>
              <Touchable onPress={props.onDismiss}>
                <Icon style={styles.headerCloseButtonIcon} name="close"/>
              </Touchable>
            </View>
          </View>
          <View style={styles.contentContainer} padder>
            {props.children}
          </View>
        </View>
      </View>
    </BlurView>
  );
}
