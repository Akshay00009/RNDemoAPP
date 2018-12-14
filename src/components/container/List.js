import React, { Component } from 'react';
import { Text, ScrollView, View, TextInput, TouchableOpacity, ListView, FlatList, Image, ActivityIndicator } from 'react-native';
import { Icon } from 'native-base';
import {RenderView} from '../common/RenderView'
export class List extends Component {
    state = { dataSource: [], searchData: [], show: false ,seachText : ''};

    componentDidMount() {
        this.apiCall()
    }

    apiCall = () =>{
        return fetch('https://s3-us-west-2.amazonaws.com/youtubeassets/home_num_likes.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    onSearchChange(text) {
       if  (text.length > 1){
        var searchList = this.state.dataSource.filter((data => {
            if (data.title.includes(text)) {
                return data
            }
        }))
        this.setState({
            dataSource: searchList
        });
    }else{
        this.apiCall()
    }
    }
    render() {
        let navigate  = this.props.navigation
        return (
            <View style={{ flex: 1}}>
                <View style={{ flexDirection: 'row', top: 20, paddingTop: 10, paddingBottom: 10, shadowOpacity: .1, borderBottomWidth: .5, alignItems: 'center' }}>
                    <Icon style={{ flex: 2, marginLeft: 5 }} type='MaterialIcons' name='menu' onPress = {() => this.props.navigation.openDrawer()} />
                    <Text style={{ flex: 9, fontSize: 23, marginLeft: 1 }}>YouTube</Text>
                    <Icon style={{ marginRight: 5 }} type='MaterialIcons' name='search' onPress={() => this.setState({ show: !this.state.show })} />
                </View>
                {this.state.show == true ? this._renderTextInput() : null}
                <View style={{ flex: 1, top: 5, marginTop: 25, backgroundColor : 'black' }}>
                    {
                        this.state.dataSource ?
                            <FlatList
                                keyExtractor={(item) => item}
                                data={this.state.dataSource}
                                 extraData = {this.state}
                                renderItem={({ item }) => this._renderItem(item)}
                            /> : null
                    }
                </View>
            </View>
        );

    }
    _renderTextInput() {
        return (
            <TextInput
               
                style={{ padding: 10, margin :5 ,borderWidth :1,borderRadius :15,top : 25}}
                underlineColorAndroid='transparent'
                placeholderTextColor="gray" placeholder="search"
                onChangeText={this.onSearchChange.bind(this)}>
            </TextInput>
        )
    }
    _renderItem = (item) => (
        //     <RenderView height = {200} pimage = {item.thumbnail_image_name} simage = {item.channel.profile_image_name} title = {item.title}/>             
        // )
        <View style={{ flex: 1,padding:'1%' }}>
            <View>
                <Image style={{ height: 200, flex: 3, borderRadius : 10 }} source={{ uri: item.thumbnail_image_name }} />
            </View>
            <View style={{ flex: 2, padding: 5, flexDirection: 'row', alignItems: 'center' ,width : '80%'}}>
                    <Image style={{ height: 40, width: 40, borderRadius: 23 }} source={{ uri: item.channel.profile_image_name }} />
                    <Text style = {{color : 'white'}}>
                        {item.title}
                    </Text>
            </View>
        </View>
    )
};
