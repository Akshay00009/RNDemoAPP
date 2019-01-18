import React, { Component } from 'react';
import { createAppContainer, createDrawerNavigator, DrawerItems } from 'react-navigation';
import { View, Text, Dimensions, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { List } from '../components/container/List'
import { ScrollView } from 'react-native-gesture-handler';
import {Pinterest} from '../components/container/Pinterest';
import BarChart from '../components/container/Barchart'
import {withNavigation} from 'react-navigation'
import SignOut from '../components/container/signOut'

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
            </ScrollView>
        </SafeAreaView>
    )
};
const Drawernav = createDrawerNavigator({
    List: { screen: List },
    Pinterest :{screen : Pinterest},
    BarChart : {screen : BarChart},
    SignOut : {screen : SignOut}

}, {
        contentComponent: CustomDrawerItem,
        drawerWidth: Dimensions.get('window').width - 120,
        contentOptions: {
            activeBackgroundColor: 'lightgray',
        },
    });

const AppContainer = createAppContainer(Drawernav)




