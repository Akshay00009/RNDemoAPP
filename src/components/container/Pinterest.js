import React, { Component } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import { Icon } from 'native-base';
import { RenderView } from '../common/RenderView'
import { ScrollView } from 'react-native-gesture-handler';
export class Pinterest extends Component {
    state = { dataSource: [], searchData: [], show: false ,array :[]};

    componentDidMount() {
        this.apiCall()
    }

    apiCall = () => {
        return fetch('https://demo6231795.mockable.io/')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.resource_response.data.results,
                    array : responseJson.resource_response.data.results.reverse()
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        let navigate = this.props.navigation
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', top: 20, paddingTop: 10, paddingBottom: 10, shadowOpacity: .1, borderBottomWidth: .5, alignItems: 'center' }}>
                    <Icon style={{ flex: 2, marginLeft: 5 }} type='MaterialIcons' name='menu' onPress={() => this.props.navigation.openDrawer()} />
                    <Text style={{ flex: 9, fontSize: 23, marginLeft: 1 }}>Pinterest</Text>
                    <Icon style={{ marginRight: 5 }} type='MaterialIcons' name='search' />
                </View>
                <ScrollView style = {{top:20}}>

                <View style = {{flexDirection : 'row'}}>
                <View style={{ flex: 1, top: 5, marginTop: 25, backgroundColor: 'black' }}>
                    {
                        <FlatList
                            keyExtractor={(item) => (item)}
                            data={this.state.dataSource}
                            // extraData = {this.state}
                            renderItem={({ item ,index}) => index%2 == 0? this._renderItem(item) : null}
                        />
                    }
                </View>
                <View style={{ flex: 1, top: 5, marginTop: 25, backgroundColor: 'black' }}>
                    {
                        <FlatList
                            keyExtractor={(item) => (item)}
                            data={this.state.dataSource}
                            // extraData = {this.state}
                           // numColumns={2}
                            renderItem={({ item ,index}) => index%2 != 0? this._renderItem(item) : null}
                        />
                    }
                </View>
                </View>
                </ScrollView>
            </View>
        );

    }
    _renderItem = (item) => {
        debugger;
        return (
            <RenderView height={item.images["170x"].height} pimage={item.images["170x"].url} />
        )
    }
};
