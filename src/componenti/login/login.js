import React, {
    Component
} from 'react';

import {
    TextInput,
    View,
    Text,
    ToastAndroid,
    TouchableOpacity} from 'react-native';

import Caricamento from '../loading/caricamento';
import {storeUser} from '../utils/storage';

import DrawerButton from '../utils/drawerbutton';

var style = require('./loginStyle'); 
var fetchTimeout = require('fetch-timeout');



export const loginUrl = 'http://appdev.novus.cc:8000/api/login';
// export const loginUrl = 'http://192.168.1.33:8000/api/login';  

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '', 
            password: '',
            fetchTimeoutTime: 10000,
            caricamento: false,
            spinner: '',
            disableView: 'auto',


            user:{}
        };


    }

    static navigationOptions = {
        drawerLabel: () => null     
      };
 
    render() {
        let caricamento = this.isLoading();
        let disab;
        if(caricamento != null)
            disab = 'none';

        return (
            
          <View style={style.mainView} pointerEvents={disab} >
           
 {/* <DrawerButton/> */}
             
 {caricamento}

        <View style={style.inputView}>

        <TextInput style={style.signleInput}
         inlineImageLeft='login_user' 
          placeholder="e-mail"
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

        return fetchTimeout(loginUrl, request, this.state.fetchTimeoutTime, "Il server non risponde")
    
            .then((response) => {

                switch (response.status) {
                    case 200:
                        response.json()
                            .then((responseJson) => {
                                this.setState({
                                    user: responseJson
                                });

                                storeUser(this.state.user, (err) => {     
                                    
                                    if(err)
                                        console.log(err)
                                     else 
                                        this.props.navigation.navigate('Dashboard');
                                     

                                     this.caricamento(false);

                                   
                                });                              
                        });

                            

                        break;
    
                    default:

                    response.json()
                            .then((responseJson) => {

                                if(responseJson.email && !responseJson.password)
                                    ToastAndroid.showWithGravity(responseJson.email[0], ToastAndroid.SHORT, ToastAndroid.BOTTOM)

                                else if(responseJson.password && !responseJson.email)
                                    ToastAndroid.showWithGravity(responseJson.password[0], ToastAndroid.SHORT, ToastAndroid.BOTTOM)

                                else if(responseJson.email && responseJson.password)
                                    ToastAndroid.showWithGravity(responseJson.email[0] + ' ' + responseJson.password[0], ToastAndroid.SHORT, ToastAndroid.BOTTOM)
                                
                                else
                                    ToastAndroid.showWithGravity(responseJson, ToastAndroid.SHORT, ToastAndroid.BOTTOM)

                                });

                        this.caricamento(false); 
                                    
                        break; 
                        
                }
    
    
            }).catch((error) => {
                console.log(error)
                
                this.caricamento(false); 

                if(typeof error == 'string')
                    ToastAndroid.showWithGravity(error, ToastAndroid.SHORT, ToastAndroid.BOTTOM)
                else 
                    ToastAndroid.showWithGravity('Errore di rete sconosciuto', ToastAndroid.SHORT, ToastAndroid.BOTTOM)

        
            });

    }

    isLoading(){ 
        return this.state.caricamento == true ? <Caricamento></Caricamento> : null;
    }

    
}



