import React, { Component } from 'react';
import { Text, ScrollView, View, TextInput, TouchableOpacity, ListView, FlatList } from 'react-native';
export class List extends Component {
    state = { dataSource : [], searchData : [] };

    componentDidMount(){
        return fetch('https://s3-us-west-2.amazonaws.com/youtubeassets/home_num_likes.json')
          .then((responseJson) => {
            this.setState({
              isLoading: false,
              dataSource: responseJson,
            });
          })
          .catch((error) =>{
            console.error(error);
          });
      }
    onSearchChange(text) {
        var searchList = this.props.title.filter((data =>{
            if(data.title.includes(text)){
                return data
            }
        }))
        this.setState({
           dataSource: searchList
        });
    }
    render(){       
        return (
            <View>
                {
                    this.state.dataSource?
                        <FlatList
                        keyExtractor={(item, index) => index}
                        data={this.state.dataSource}
                         extraData = {this.state}
                        renderItem={this._renderItem.bind(this)} /> : null
                }
            </View>
        );
    }
    // _header() {
    //     return (
    //         <View style = {{flex : .1 , flexDirection :'row'}}>
    //         <image  source={require('../../assets/img.png')}/>
    //         <Text>YouTube</Text>
    //         <TouchableOpacity style = {{marginRight : 10}}>
    //             <Image source ={require('../../assets/ic_email.png')}/>
    //           </TouchableOpacity>  
    //         </View>
    //     )
    // }
    // _renderTextInput() {
    //     return (
    //     <TextInput
    //         underlineColorAndroid='transparent'
    //         placeholderTextColor="gray" placeholder="search?"
    //         onChangeText={this.onSearchChange.bind(this)}>
    //     </TextInput>
    //     )
    // }
    _renderItem = ({item}) => (
        <Text>
          {this.item.title}
        </Text>
      );
    };
