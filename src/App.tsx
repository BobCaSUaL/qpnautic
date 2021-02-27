import React from 'react';
import { Container, Footer, FooterTab, Button, Text } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';

import AppScreen from './screens/AppScreen';

const App = () => (
  <Container>
    <NavigationContainer>
      <AppScreen />
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


export default App