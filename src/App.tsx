import React from 'react';
import { Container, Footer, FooterTab, Button, Text } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';

import LandingScreen from './screens/LandingScreen';

const HomeNavigator = () => (
  <Container>
    <NavigationContainer>
      <LandingScreen />
    </NavigationContainer>
    <Footer>
      <FooterTab>
        <Button full>
          <Text>Footer</Text>
        </Button>
      </FooterTab>
    </Footer>
    </Container>
);


export default HomeNavigator