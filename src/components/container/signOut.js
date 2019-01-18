import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';


export default class SignOut extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {navigate}  = this.props.navigation;
        return (
            <TouchableOpacity onPress={()=>navigate("Login")}
                style={{ justifyContent: 'center', padding: 9 }}>
                <Text>Sign Out</Text>
            </TouchableOpacity>
        )
    }
}