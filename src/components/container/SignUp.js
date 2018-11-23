import React, { Component } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, Button, Linking, ScrollView , Dimensions} from 'react-native';
// import { TextInp } from '../../common/InputText';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
const { height } = Dimensions.get('window');

export class SignUp extends Component {
   
    state = { email: '', showPassword: true , userName:'',password:'' };
    onButtonPress() {
        this.validate(this.state.userName,this.state.email,this.state.password)
    }
    validate = (userName,email,password) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (userName == '') {
            alert("Please enter username")
        } else if(email == '') {
            alert("Please enter email")
        } else if (reg.test(email) == false) {
            alert("Please enter valid email address")
        } else if (password == '') {
            alert("Please enter password")
        } else if(password.length < 6) {
            alert('password should greater than 6')
        } else {
            const { navigate } = this.props.navigation;
            navigate('Login');
        }
    }
    render() {
      
        return (
                <KeyboardAwareScrollView  contentContainerStyle={styles.scrollContainer} style={{flexGrow: 1,}}>
                <View style={styles.container}>
                    {this.imageView()}
                    {this.mainView()}
                    {this.bottomView()}
                </View>
                </KeyboardAwareScrollView>
        )
    }
    imageView() {
        return (
            <View style={{flex:1.5,alignItems:"center", justifyContent:"flex-end"}}>
            <Image
                style={styles.imageTop}
                source={require('../../assets/img.png')} />
            </View>
                
        )
    }
    mainView() {
        return (
            <View style={{flex:2, paddingHorizontal: 20, alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.sectionStyle}>
                    <Image
                        source={require('../../assets/ic_user.png')}
                        style={styles.iconStyle} />
                    <TextInput
                        value = {this.state.userName}
                        onChangeText={userName => this.setState({ userName })}
                        returnKeyType='next'
                        style={styles.textInput}
                        placeholder="User Name"
                        placeholderTextColor="#464555"
                        underlineColorAndroid="transparent"
                        onSubmitEditing={() => { this.secondTextInput.focus(); }}
                        blurOnSubmit={false}
                        
                    />
                </View>
                <View style={styles.sectionStyle}>
                    <Image
                        source={require('../../assets/ic_email.png')}
                        style={styles.iconStyle} />
                    <TextInput
                        onChangeText={email => this.setState({ email })}
                        returnKeyType='next'
                        style={styles.textInput}
                        placeholder="Email"
                        placeholderTextColor="#464555"
                        underlineColorAndroid="transparent"
                        ref={(input) => { this.secondTextInput = input; }}
                        onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                        blurOnSubmit={false}
                    />
                </View>

                <View style={styles.sectionStyle}>
                    <Image
                        source={require('../../assets/ic_password.png')}
                        style={styles.iconStyle} />

                    <TextInput
                        onChangeText={password => this.setState({ password })}
                        returnKeyType='done'
                        style={styles.textInput}
                        placeholder="Password"
                        placeholderTextColor="#464555"
                        underlineColorAndroid="transparent"
                        secureTextEntry={this.state.showPassword}
                        ref={(input) => { this.thirdTextInput = input; }}
                    />
                    <TouchableOpacity
                    onPressIn = {() => this.setState({showPassword : false})}
                    onPressOut ={() => this.setState({showPassword : true})}
                    >
                    <Image
                        source={require('../../assets/ic_view.png')}
                        style={styles.iconStyle} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={(this.onButtonPress.bind(this))}
                    style={styles.buttonContainer}>
                    <Text style={styles.textSignup}>
                        SIGN UP
                     </Text>
                </TouchableOpacity>
                <View style={{ alignItems: 'center', marginLeft: 25, marginRight: 25, marginTop: 30 }}>
                    <Text
                        style={{ fontSize: 14 }}>
                        By clicking this form you agree with our
                    </Text>
                    <Text style={{ fontSize: 14, color: '#4a58d8', textDecorationLine: "underline", marginLeft: 5, }}
                        onPress={() => Linking.openURL('http://google.com')}>
                        Terms and Conditions
                     </Text>
                </View>
            </View>

        )
    }
    bottomView() {
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center',}}>
                <View style={{ flexDirection: 'row'}}>
                    <Text
                        style={styles.textAccount}>
                        Already have an account?
                    </Text>
                    <Text
                        style={styles.textLoginHere}>
                        LOGIN HERE
                    </Text>
                </View>
            </View>

        )
    }
}

const styles = {
    container: {
        flex :1,
        margin:1,
        backgroundColor :"white"
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#A0A3C0',
        padding: 10
    },
    textInput: {
        flex: 1,
        fontSize: 16,
    },
    iconStyle: {
        margin: 5,
        height: 18,
        width: 18,
        resizeMode: 'contain',
    },
    imageTop: {
        width: "70%",
        height: "70%",
        resizeMode:"contain"
    },
    buttonContainer: {
        backgroundColor: '#0353FD',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginTop: 30,
        marginLeft: 25,
        marginRight: 25,
        borderRadius: 50,
    },
    textSignup: {
        color: 'white',
        fontSize: 16,
        padding: 12,
    },
    textAccount: {
        fontSize: 16,
        color: '#A0A3C0',
    },
    textLoginHere: {
        marginLeft: 10,
        fontSize: 14,
        color: '#209BFF',
    },
    scrollContainer:{
        height:height,
        flexGrow:1

    }
};

