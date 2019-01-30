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
    Modal
} from 'react-native';

var style = require('./homeStyle');

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    render() {
        return (
          <View style={style.view}>

        <TextInput
          placeholder="nome utente"
          onChangeText={(input) => this.state.username = input}
          />
          
          <TextInput
          placeholder="password"
          onChangeText={(input) => this.state.password = input}
          secureTextEntry={true}
          />


          </View>
        );
      }
}