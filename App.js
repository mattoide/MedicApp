import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import Login from './src/componenti/login/login';
import Home from './src/componenti/home/home';


const Navigatore = createStackNavigator(
  {
    Login: Login,
    Home: Home,
  },


  {
    initialRouteName: 'Login',

    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
  }
    
  });

  const App = createAppContainer(Navigatore);

  export default App;