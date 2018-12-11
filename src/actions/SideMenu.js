import React, { Component } from 'react';
import { createAppContainer, createDrawerNavigator, DrawerItems } from 'react-navigation';
import { View, Text, Dimensions, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { List } from '../components/container/List'
import { SignUp } from '../components/container/SignUp'
import { ScrollView } from 'react-native-gesture-handler';
import { Login } from '../components/container/Login'
import {Pinterest} from '../components/container/Pinterest';
import { Form } from 'native-base';

export default class SideMenu extends Component {
    render() {
        return (
            <AppContainer />
        )
    }
}
const CustomDrawerItem = (props) => {
    return (
        <SafeAreaView >
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ height: 150, width: 150 }} source={require('../assets/img.png')} />
            </View>
            <ScrollView>
                <DrawerItems {...props} />
                <TouchableOpacity style = {{justifyContent : 'center',padding:9}}
                >
                    <Text>Sign Out</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
};
const Drawernav = createDrawerNavigator({
    List: { screen: List },
    Pinterest :{screen : Pinterest}
}, {
        contentComponent: CustomDrawerItem,
        drawerWidth: Dimensions.get('window').width - 120,
        contentOptions: {
            activeBackgroundColor: 'lightgray',
        },
    });
const AppContainer = createAppContainer(Drawernav)



