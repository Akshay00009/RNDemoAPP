import React, { Component } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, Button, KeyboardAvoidingView } from 'react-native';

class Login extends Component {

    render() {
        return (
            //Insert ScrollView
            <View style={styles.container}>
                <Image
                    style={styles.imageTop}
                    source={require('../../images/img.png')} />
                <View style={styles.sectionStyle}>
                    <Image
                        source={require('../../images/ic_email.png')}
                        style={styles.iconStyle} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        placeholderTextColor="#464555"
                        underlineColorAndroid="transparent"
                    />
                </View>

                <View style={styles.sectionStyle}>
                    <Image
                        source={require('../../images/ic_password.png')}
                        style={styles.iconStyle} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Password"
                        placeholderTextColor="#464555"
                        underlineColorAndroid="transparent"
                        secureTextEntry={true}
                    />

                    <Image
                        source={require('../../images/ic_view.png')}
                        style={styles.iconStyle} />
                </View>

                <TouchableOpacity
                    style={styles.buttonContainer}>
                    <Text style={styles.textLogin}>
                        LOG IN
                    </Text>
                </TouchableOpacity>

                <Text
                    style={styles.textForgotPassword}>
                    Forgot Password ?</Text>

                <View style={{ flexDirection: 'row', marginTop: 40, }}>
                    <Text
                        style={styles.textAccount}>
                        Don't have an account?
                </Text>
                    <Text
                        style={styles.textCreateNow}>
                        CREATE NOW
                </Text>
                </View>
            </View >
        )
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: .5,
        borderColor: '#D0D6ED',
        marginLeft: 20,
        marginRight: 20,
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'Montserrat_Regular',
    },
    iconStyle: {
        margin: 5,
        height: 15,
        width: 15,
        resizeMode: 'contain',
        alignItems: 'center'
    },
    imageTop: {
        margin: 30,
        width: 320,
        height: 200,
        alignItems: 'center',
    },
    buttonContainer: {
        backgroundColor: '#4976FE',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginTop: 30,
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 15,
        borderRadius: 50,
    },
    textLogin: {
        fontFamily: 'Montserrat_Bold',
        color: 'white',
        fontSize: 16,
        padding: 15,
    },

    textForgotPassword: {
        fontSize: 16,
        color: '#464555',
        fontFamily: 'Montserrat_Regular',
    },
    textAccount: {
        fontSize: 16,
        color: '#464555',
        fontFamily: 'Montserrat_Regular',
    },
    textCreateNow: {
        fontSize: 16,
        color: '#209BFF',
        marginLeft: 10,
        fontFamily: 'Montserrat_Regular',
    }

};

export default Login;
