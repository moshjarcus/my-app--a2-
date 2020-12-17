import {createAppContainer} from 'react-navigation';
import  {createStackNavigator} from 'react-navigation-stack';


import LoginScreen from './screens/LoginScreen';
import ChatScreen from './screens/ChatScreen';

const Navigator = createStackNavigator(
  {
    Login: LoginScreen,
    Chat: ChatScreen
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(Navigator);
