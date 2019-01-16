import {Component} from 'react';
import {NetInfo} from "react-native";

class InternetConnectivity extends Component{
    checkInternet = () =>{
        NetInfo.isConnected.fetch().then(isConnected=>{

            debugger;

            return isConnected;
        })
    }
}

const network = new InternetConnectivity;
export default network;
