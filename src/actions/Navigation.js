import {createStackNavigator,createAppContainer} from 'react-navigation';
import {Login} from '../components/container/Login'
import {SignUp} from '../components/container/SignUp'
import {List} from '../components/container/List'
import {Dimensions} from 'react-native'
import SideMenu from './SideMenu'

const Navigation = createStackNavigator({
    Login: { screen: Login},
    SideMenu : {screen : SideMenu},
    List: { screen: List},
    SignUp: { screen: SignUp}

  },
    {
      mode: "none",
      headerMode: 'none',
      navigationOptions: {
        gesturesEnabled: false
      }
    } 
  )
  

  const AppContainer = createAppContainer(Navigation)

  export default AppContainer;
