import { createStackNavigator, createAppContainer, createDrawerNavigator, DrawerItems,StackActions,NavigationActions } from 'react-navigation';
import { Login } from '../components/container/Login'
import React from 'react';
import { View, Image, SafeAreaView, TouchableOpacity, ScrollView, Text,Alert } from 'react-native';
import { SignUp } from '../components/container/SignUp'
import { List } from '../components/container/List'
import { Dimensions } from 'react-native'
import SideMenu from './SideMenu'
import { Pinterest } from '../components/container/Pinterest';
import BarChart from '../components/container/Barchart'
import SignOut from '../components/container/signOut'

const CustomDrawerItem = (props) => {
    return (
        <SafeAreaView >
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ height: 150, width: 150 }} source={require('../assets/img.png')} />
            </View>
            <ScrollView>
                <DrawerItems {...props} />
                <TouchableOpacity onPress={() =>
                    Alert.alert(
                        'Log out',
                        'Do you want to logout?',
                        [
                            { text: 'Cancel', onPress: () => { return null } },
                            {
                                text: 'Confirm', onPress: () => {
                                    // props.navigation.navigate('Login')
                                    props.navigation.dispatch(StackActions.reset({
                                        index: 0,
                                        actions: [NavigationActions.navigate({ routeName: 'Login' })],
                                      }));
                                }
                            },
                        ],
                        { cancelable: false }
                    )
                }>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
};


const Drawernav = createDrawerNavigator({
    List: { screen: List },
    Pinterest: { screen: Pinterest },
    BarChart: { screen: BarChart },
    //   SignOut : {screen : SignOut}

}, {
        contentComponent: CustomDrawerItem,
        drawerWidth: Dimensions.get('window').width - 120,
        contentOptions: {
            activeBackgroundColor: 'lightgray',
        },
    });

const Navigation = createStackNavigator({
    Login: { screen: Login },
    Drawernav: { screen: Drawernav },
    List: { screen: List },
    SignUp: { screen: SignUp }

},
    {
        mode: "none",
        headerMode: 'none',
        defaultNavigationOptions: {
            gesturesEnabled: false,
          },
        initialRouteName: 'Login'
    }
)

export default createAppContainer(Navigation);
