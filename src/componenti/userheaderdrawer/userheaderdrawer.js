import React, {
    Component
} from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity} from 'react-native';

import {getStoredUser} from '../utils/storage';


var style = require('./userheaderdrawerStyle');


export default class UserHeader extends Component {

    constructor(props) {
        super(props);

        this.state = {
          user:{}
        };
 
    }

    async refreshUser(){

      // console.log('diocnaeee')
      // console.log(this.state.user)

      await getStoredUser((val, err) => {                                         
        if(err){
           this.setState({user: {}}) 
          console.log(err)
        }
        else if(val){
            this.setState({user: JSON.parse(val)}) 
            // console.log(val)
            // console.log('val')

        }
    });
    }

    async componentDidMount(){
      
          await getStoredUser((val, err) => {                                         
            if(err){
              console.log(err)
            }
            else if(val){
                this.setState({user: JSON.parse(val)}) 
                // console.log(val)

            }
        });
    }

    render() {

      // console.log(Object.keys(this.state.user).length)
          this.refreshUser();

          let usr;
          if(this.state.user.attivo == 0){
            usr =  <View >

            <Image 
            source={''}
            style={{ height: 150, width: 150, borderRadius: 200, margin:'10%'}} 
            /> 

                <Text style={{color:'#A42B46', textAlign:'center', fontSize:30}}>{this.state.user.nome} {this.state.user.cognome}</Text>
          </View>
          } else {
            usr =  <View>

            <Image 
            source={require('../../immagini/face.jpg')}
            style={{ height: 150, width: 150, borderRadius: 200, margin:'10%'}} 
            /> 

                <Text style={{color:'#A42B46', textAlign:'center', fontSize:30}}>{this.state.user.nome} {this.state.user.cognome}</Text>
          </View>
          }


        return (

                     <View style={style.mainView}>

          {usr}

          </View>
          // <View style={style.mainView}>

          //   <Image 
          //   source={require('../../immagini/face.jpg')}
          //   style={{ height: 150, width: 150, borderRadius: 200, margin:'10%'}} 
          //   /> 

          //       <Text style={{color:'#A42B46', textAlign:'center', fontSize:30}}>{this.state.user.nome} {this.state.user.cognome}</Text>
          // </View>
        );
      }
}