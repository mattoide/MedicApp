import React, {
    Component
} from 'react';

import {
    View,
    Text,
  TouchableOpacity,
  ToastAndroid
  } from 'react-native';


var style = require('./autodiagnosiStyle');


import DrawerButton from '../utils/drawerbutton';

import Wizard from "react-native-wizard";
import Risposta from "./risposta";

const dagnosi = ["Alluce valgo", "Alluce rigido", "Dito a martello", "Piede piatto", "Sintattilia", "Allungamento", "Accorciamento", "Haglund", "Spina", "Metatarsalagia", "Morton", "5 dito varo", "Brachimetatarsia"];


const steps =[
      
  {component: Risposta, props : {domanda: 0}},
  {component: Risposta, props : {domanda: 1}},
  {component: Risposta, props : {domanda: 2}},
  {component: Risposta, props : {domanda: 3}},
  {component: Risposta, props : {domanda: 4}},

]



export default class Autodiagnosi extends Component {

    constructor(props) {
        super(props);

        this.state = {
          user:{},
          steps: [],
          isLastStep:'',
          isFirstStep:'',
          currentIndex:''
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


<View style={style.mainView} >
           
           <Wizard
        ref={(e) => {this.wizard = e}}
        currentStep={(currentIndex, isFirstStep, isLastStep) => {
             this.setState({
                isLastStep  : isLastStep,
                isFirstStep : isFirstStep,
                currentIndex: currentIndex
            })
            // console.log(isLastStep)
            // console.log(isFirstStep)
            // console.log(currentIndex)
         }}
         steps={steps}

        duration={500}
              // onNext={() => {console.log("Next page called")}}
              // onPrev={() => {console.log("Prev page called")}}
              onFinish={() => {
                 ToastAndroid.showWithGravity('Congratulazioni! Hai completato tutti gli esercizi.', ToastAndroid.SHORT, ToastAndroid.BOTTOM)
                 this.wizard.goToStep(0)	
                this.props.navigation.navigate('Riabilitazione')}
              }
    /> 
  
    <View style={{flex:0.2, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>



    {!this.state.isFirstStep ? <TouchableOpacity 
    style={{marginHorizontal:'5%', marginTop:10,paddingTop:10,paddingBottom:10, flex:1,
    backgroundColor:'transparent',borderRadius:100, borderWidth: 1,borderColor: '#988C6C', marginBottom:'10%'}}
    onPress={()=>this.wizard.prev()}>
        <Text style={{textAlign:'center', fontSize:20, color:'#988C6C'}}> Indietro</Text>
        </TouchableOpacity> : undefined}

        <TouchableOpacity 
        style={{marginHorizontal:'5%', marginTop:10,paddingTop:10,paddingBottom:10, flex:1,
        backgroundColor:'transparent',borderRadius:100, borderWidth: 1,borderColor: '#9A2C45', marginBottom:'10%'}}
        onPress={()=>{
            this.wizard.next()
          }}>
            <Text style={{textAlign:'center', fontSize:20, color:'#9A2C45'}}> Continua</Text>
            </TouchableOpacity>

        </View>

          </View>
          </View>
        );
      }
}