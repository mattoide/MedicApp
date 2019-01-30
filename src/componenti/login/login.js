import React, {
    Component
} from 'react';

import {
    NetInfo,
    TextInput,
    View,
    Button,
    StyleSheet,
    Text,
    ToastAndroid,
    Image,
    TouchableOpacity,
    Modal,
    Icon
} from 'react-native';

var style = require('./loginStyle');
var fetchTimeout = require('fetch-timeout');


export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
           // email: '',
            email: '666matto666@gmail.com',
            password: '1111',
            fetchTimeoutTime: 1000,

            user:{}
        };
    }

    render() {
        return (
          <View style={style.mainView}>

<View style={style.inputView}>

        <TextInput style={style.signleInput}
         inlineImageLeft='login_user' 
          placeholder="nome utente"
          placeholderTextColor = '#988C6C'
          onChangeText={(input) => this.state.email = input}
          /> 
          
          <TextInput style={style.signleInput}
          inlineImageLeft='login_password' 
          placeholder="password"
          placeholderTextColor= '#988C6C'
          onChangeText={(input) => this.state.password = input}
          secureTextEntry={true}
          />


        <TouchableOpacity

        style={{alignSelf:'center', marginTop:'10%'}} 
        onPress={()=> this.login() }
        >
        <Text style={{color:'#988C6C', fontSize:10}}>LOGIN</Text>
         
        </TouchableOpacity>

        <TouchableOpacity
        style={{alignSelf:'center', marginTop:'10%'}}
        onPress={()=>console.log("entra come guest")}
        >
        <Text style={{color:'#988C6C', fontSize:10}}>ENTRA COME GUEST</Text>
        
        </TouchableOpacity>


        <TouchableOpacity
        style={{alignSelf:'center', marginTop:'10%', bottom: -100, left:150}}
        onPress={()=>console.log("richiedi registrazione")} 
        >
        <Text style={{color:'#988C6C', fontSize:8}}>richiedi registrazione</Text>
        
        </TouchableOpacity>

</View>


          </View>
        );
      }

      login() {



        var params = {
            email: this.state.email,
            password: this.state.password,
        };
     
        var formData = new FormData();
        
        for (var k in params) {
            formData.append(k, params[k]);
        }
        
        var request = {
            method: 'POST',
           // headers: headers,
            body: formData
        };

        return fetchTimeout('http://192.168.1.11:8000/api/login', request, this.state.fetchTimeoutTime, "Il server non risponde")
    
            .then((response) => {
                switch (response.status) {
                    case 200:
                        response.json()
                            .then((responseJson) => {
                                this.setState({
                                    user: responseJson
                                });
                            });

                        break;
    
                    default:
                    response.json()
                            .then((responseJson) => {
                                    console.log(responseJson)
    
    
                            });
                        break; 
                }
    
    
            }).catch((error) => {
                // this.showTimeoutError(error)
                console.log(error)
            });
    }
}

