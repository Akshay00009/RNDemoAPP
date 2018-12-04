import React, { Component } from 'react';
import { Text, ScrollView, View, TextInput, TouchableOpacity, ListView, FlatList } from 'react-native';

export class List extends Component {
    state = { dataSource : [] };

    componentDidMount() {
    }
 
    _renderItem = ({item}) => {
         const { navigate } = this.props.navigation
        if(this.state.dataSource) {
        return (<View>
            <Card>
                <TouchableOpacity onPress = {() => navigate('BarcodeScan')}>
                    <CardSection>
                        <Text
                            style={styles.listTitleStyle}> {item.title} </Text>
                    </CardSection>
                </TouchableOpacity>
            </Card>
        </View>
        )
    }
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
            <View style={styles.listMainViewStyle}>
                <Text style={styles.listHeaderTextStyle}>Welcome Harry</Text>
                {this._renderTextInput()}
                {this._renderRefreshView()}
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
    _renderTextInput() {
        return (
        <TextInput
            underlineColorAndroid='transparent'
            placeholderTextColor="gray" placeholder="what are you looking for?"
            style={styles.listSearchTextFieldStyle}
            onChangeText={this.onSearchChange.bind(this)}>
        </TextInput>
        )
    }
    _renderRefreshView() {
        return (
        <View style={styles.listViewBackground}>
            <Text style={styles.listTextSelectorProvider}> SELECT PROVIDER </Text>
            <TouchableOpacity>
                <Text style={styles.listTextRefresh}> Refresh List</Text>
            </TouchableOpacity>
        </View>
        )
    }

};

export default List;

