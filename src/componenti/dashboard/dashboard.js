import React, {
    Component
} from 'react';

import {
    View,
    Text} from 'react-native';

var style = require('./dashboardStyle');


import {getStoredUser} from '../utils/storage';

import Icon from 'react-native-vector-icons/SimpleLineIcons/';
import IconFontAwsome from 'react-native-vector-icons/FontAwesome5/';
import * as Progress from 'react-native-progress';

import DrawerButton from '../utils/drawerbutton';


export class Passi extends Component{

  constructor(props) {
    super(props);
    this.state = {};
}
  render(){

    return (

    <View style={{flex:1,justifyContent:'center'}}>
        <Progress.Circle style={{}} size={200} color='#A32B47' unfilledColor='#333333' borderColor='#2E2A2A' indeterminate={false} progress={this.props.percpassi}  />
        <View style={{position:'absolute', justifyContent:'center',alignSelf:'center', alignItems:'center'}}>
        <IconFontAwsome name="shoe-prints" size={50} color="#988C6C" />
        <Text style={{fontSize:25, color:'#988C6C', }}>{this.props.passi} passi</Text>
        </View>
    </View>
    );
  }
}


export default class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
          user:{},

          esercizi: 0,
          terapia: 0,
          passi:0,
          percpassi:0
        };
    }

    

   static navigationOptions = {
  
      drawerLabel: 'Dashboard',
      drawerIcon: () => (
        <Icon name="home" size={20} color="#988C6C" />
      ),
    };

    random(){
      const min = 1;
      const max = 100;
      const rand = min + Math.random() * (max - min);
      return rand/100;
    }

    random2(){
      const min = 1;
      const max = 100000;
      const rand = min + Math.random() * (max - min);
      return rand;
    } 

    async componentDidMount(){

      this.props.navigation.addListener(
        'willFocus',
        () => {
          //console.log(payload);
          this.setState({esercizi: this.random(), terapia: this.random(), passi: parseFloat(this.random2()).toFixed(0), percpassi: parseFloat(this.random2()/100000).toFixed(2)})
        }
      );


          await getStoredUser((val, err) => {                                         
            if(err)
                console.log(err)
            else if(val){
              this.setState({user: JSON.parse(val)}) 

              console.log(val)

            }
        });

    }
      


    render() {
      const littleSize = 15;
      const bigSize = 45;

        return (
          <View style={style.mainView}>
            <DrawerButton/>

<View style={{flex:0.8, justifyContent:'flex-end', alignItems:'center'}}>
{/* 
<Progress.Circle size={200} color='#A32B47' unfilledColor='#333333' borderColor='#2E2A2A' indeterminate={false} progress={this.state.percpassi}  />
<View style={{marginVertical:'15%', position:'absolute', top:'7%', alignItems:'center'}}>
<IconFontAwsome name="shoe-prints" size={50} color="#988C6C" />
<Text style={{fontSize:25, color:'#988C6C', }}>{this.state.passi} passi</Text>
</View> */}

<Passi percpassi={this.state.percpassi} passi={this.state.passi}></Passi>


<Text style={{fontSize:25, color:'#988C6C', marginVertical:'15%'}}>Si cammia!</Text>

    <View style={{flexDirection:'row', justifyContent:'space-between'}}>

        <View style={{ marginHorizontal:'5%',alignItems:'center'}}>
          <Text style={{fontSize:bigSize, color:'#988C6C'}}>14 Km</Text>
          <Text style={{fontSize:littleSize, color:'#988C6C'}}>Distanza percorsa</Text>
        </View>

        <View style={{marginHorizontal:'5%',alignItems:'center'}}>
         <Text style={{fontSize:bigSize, color:'#988C6C'}}>123</Text>
          <Text style={{fontSize:littleSize, color:'#988C6C'}}>Scalini</Text>
        </View>

    </View>
            <View style={{marginVertical:'5%'}}></View>
    <View style={{flexDirection:'row'}}>
    
      <View style={{marginHorizontal:'5%', alignItems:'center'}}>

        <IconFontAwsome name="running" size={50} color="#988C6C" />
        <Text style={{fontSize:littleSize, color:'#988C6C', marginVertical:'10%'}}>Esercizi</Text>
        <Progress.Bar color='#A32B47' progress={this.state.esercizi} width={100} />

      </View>

      <View style={{marginHorizontal:'5%', alignItems:'center'}}>

        <IconFontAwsome name="pills" size={50} color="#988C6C" />
        <Text style={{fontSize:littleSize, color:'#988C6C', marginVertical:'10%'}}>Terapia</Text>
        <Progress.Bar color={'#5EB157'} progress={this.state.terapia} width={100} />

      </View>

    </View>

</View>
         
         
          </View>
        );
      }
}