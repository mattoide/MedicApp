import React, {
    Component
} from 'react';

import {
    View,
    Text} from 'react-native';

import {getStoredUser} from '../utils/storage';

var style = require('./informazioniStyle');

import Icon from 'react-native-vector-icons/FontAwesome/';

import DrawerButton from '../utils/drawerbutton';



export default class Informazioni extends Component {

    constructor(props) {
        super(props);

        this.state = {
          user:{}
        };
 
    }

   static navigationOptions = {
  
      drawerLabel: 'Informazioni',
      drawerIcon: () => (
        
        <Icon name="info" size={20} color="#988C6C" />
        
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
<Text style={{textAlign:'center', fontSize:20, color:'#988C6C'}}> Informazioni </Text>

          </View>
        );
      }
}