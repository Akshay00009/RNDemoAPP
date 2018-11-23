import { StackNavigator } from 'react-navigation';
import {Login} from '../components/container/Login'
import {SignUp} from '../components/container/SignUp'

const Navigation = StackNavigator({
    Login: { screen: Login},
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
  export default Navigation;
