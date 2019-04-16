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

import {getStoredUser} from '../utils/storage';

var style = require('./lineadirettaStyle');

import IconAwesom from 'react-native-vector-icons/FontAwesome/';
import IconIonic from 'react-native-vector-icons/Ionicons/';

import DrawerButton from '../utils/drawerbutton';



export default class Lineadiretta extends Component {

    constructor(props) {
        super(props);

        this.state = {
          user:{},
          nota:''
        };
 
    }

   static navigationOptions = {
  
      drawerLabel: 'Linea diretta',
      drawerIcon: ({ tintColor }) => (
        
        <IconIonic name="ios-chatboxes" size={20} color="#988C6C" />
        
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

<View style={{alignItems:'center'}}>
<Text style={{textAlign:'center', fontSize:20, color:'#988C6C'}}>Invia una foto ed una nota a 'NOME'</Text>

<TextInput
        style={{height: '60%', width:'80%', margin:'4%', borderWidth: 1, borderColor:'#988C6C', borderRadius:10}}
        onChangeText={(text) => this.setState({nota:text})}
        value={this.state.text}
        multiline={true}
      />


        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity 
        style={{ flexDirection: 'row', alignSelf: 'center' }}
        onPress={()=>console.log('fotoo')}>
            <IconAwesom name="camera" size={20} color="#988C6C" />
            <Text style={{textAlign:'center', fontSize:20, color:'#988C6C'}}> Aggiungi una foto</Text>
            </TouchableOpacity>
        </View>

          </View>

          </View>
        );
      }
}