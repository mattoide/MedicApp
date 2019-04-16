import React, {
    Component
} from 'react';

import {
    View,
    Text} from 'react-native';

import {getStoredUser} from '../utils/storage';

var style = require('./autodiagnosiStyle');

import Icon from 'react-native-vector-icons/FontAwesome/';

import DrawerButton from '../utils/drawerbutton';



export default class Classifica extends Component {

    constructor(props) {
        super(props);

        this.state = {
          user:{}
        };
 
    }

    static navigationOptions = {
      drawerLabel: () => null     
    };

    async componentDidMount(){

    }

    render() {

        return (
          <View style={style.mainView}>
<DrawerButton/>
<Text style={{textAlign:'center', fontSize:20, color:'#988C6C'}}> Autodiagnosi </Text>

          </View>
        );
      }
}