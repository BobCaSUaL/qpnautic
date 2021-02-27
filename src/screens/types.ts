import { NavigationProp, ParamListBase, Route } from '@react-navigation/native';

export declare type AppScreenProps = {
  route?: Route<string>,
  navigation?: NavigationProp<ParamListBase>,
}

export declare type ScreenProps = {
  route: Route<string>,
  navigation: NavigationProp<ParamListBase>,
}
