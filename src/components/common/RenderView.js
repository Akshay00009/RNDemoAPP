import React, { Component } from 'react';
import { Text, View, Image, ActivityIndicator } from 'react-native';
export const RenderView = (props) => {
    return (
        <View style={{ flex: 1,padding:'1%' }}>
        <View>
            <Image style={{ height: props.height, flex: 3, borderRadius : 10 }} source={{ uri: props.pimage }} />
        </View>
        {/* <View style={{ flex: 2, padding: 5, flexDirection: 'row', alignItems: 'center' ,width : '80%'}}>
                <Image style={{ height: 40, width: 40, borderRadius: 23 }} source={{ uri: props.simage }} />
                <Text style = {{color : 'white'}}>
                    {props.title}
                </Text>
        </View> */}
    </View>
    )
}