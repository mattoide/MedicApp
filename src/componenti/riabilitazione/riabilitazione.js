import React, {
    Component
} from 'react';

import {
    View,
    Text
  } from 'react-native';

import {getStoredUser} from '../utils/storage';

var style = require('./riabilitazioneStyle');

import Icon from 'react-native-vector-icons/SimpleLineIcons/';

import DrawerButton from '../utils/drawerbutton';



export default class Riablitazione extends Component {

    constructor(props) {
        super(props);

        this.state = {
          user:{}
        };
 
    }

   static navigationOptions = {
  
      drawerLabel: 'Riabilitazione',
      drawerIcon: () => (
        
        <Icon name="home" size={20} color="#988C6C" />
        
      ),
      
    };

    async componentDidMount(){

          await getStoredUser((val, err) => {                                         
            if(err)
                console.log(err)
            else if(val)
                this.setState({user: JSON.parse(val)}) 
        });
    }

    render() {

        return (
          <View style={style.mainView}>
<DrawerButton/>
<Text style={{textAlign:'center', fontSize:20, color:'#988C6C'}}> Riabilitazione </Text>

          </View>
        );
      }
}