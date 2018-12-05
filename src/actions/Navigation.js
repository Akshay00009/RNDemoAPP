import { StackNavigator } from 'react-navigation';
import {Login} from '../components/container/Login'
import {SignUp} from '../components/container/SignUp'
// import {List} from '../components/container/List'

const Navigation = StackNavigator({
    Login: { screen: Login},
    SignUp: { screen: SignUp},
    // List: { screen: List}

  },
    {
      mode: "none",
      headerMode: 'none',
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  )
  export default Navigation;
