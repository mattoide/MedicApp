import React, {
    Component
} from 'react';

import {
    TextInput,
    View,
    Text,
    ToastAndroid,
    TouchableOpacity,
    Modal,
    TouchableHighlight,
    Image
} from 'react-native';



import { Notification } from 'react-native-firebase';
import firebase from 'react-native-firebase';

import { FlatGrid, SectionGrid } from 'react-native-super-grid';
import RadioGroup from 'react-native-radio-buttons-group';




var fetchTimeout = require('fetch-timeout');


const domande = [
    {
        domanda:"Da quanto ti fa male?", risposte:[ 
                                                    {label:"1-2 settimane", selected:true},
                                                    {label:"2-4 settimane"},
                                                    {label:"1-2 mesi"},
                                                    {label:"2-3 mesi"},
                                                    {label:"6-12 mesi"},
                                                    {label:"1-2 anni"},
                                                    {label:"2-5 anni"},
                                                    {label:"oltre 5 anni"},
                                                    ]
    },
    {
        domanda:"Ti fa male?", risposte:[ 
            {label:"Solo quando cammino", selected:true},
            {label:"Solo quando sono a riposo"}, 
            {label:"Non mi fa male"},
            {label:"Entrambi i casi"}
                                                    ]
    },
    {
        domanda:"Ti fa male quando cammini scalzo?", risposte:[ 
            {label:"Si", selected:true},
            {label:"Non mi fa male"},
            {label:"No. Mi fa male solo con le scarpe"}
                                                    ]
    },
    {
        domanda:"Il dolore è più forte quando inizi a camminare?", risposte:[ 
            {label:"No. Il dolore diminuisce quando cammino" , selected:true},
            {label:"Si. Il dolore è tanto piu forte quando cammino"}
                                                    ]
    },
    {
        domanda:"Quanto ti fa male?", risposte:[ 
            {label:"1", selected:true},
            {label:"2"},
            {label:"3"},
            {label:"4"},
            {label:"5"},
            {label:"6"},
            {label:"7"},
            {label:"8"},
            {label: "9"},
            {label: "10"},
                                                    ]
    },

    

]

const dagnosi = ["Alluce valgo", "Alluce rigido", "Dito a martello", "Piede piatto", "Sintattilia", "Allungamento", "Accorciamento", "Haglund", "Spina", "Metatarsalagia", "Morton", "5 dito varo", "Brachimetatarsia"];



export default class Risposta extends Component {

    constructor(props) {
        super(props);

        this.state = {
            domanda:-1,
            domanda1 :{risposta: ''},
            domanda2 :{risposta: ''},
            domanda3 :{risposta: ''},
            domanda4 :{risposta: ''},
            domanda5 :{risposta: ''},
            diagnosi:'',

            disabled:true
        };


    }

    async componentWillUpdate(){

    
       if(this.state.domanda != this.props.domanda){
      await  this.setState({domanda:this.props.domanda})

        this.getSelected(domande[this.state.domanda].risposte);

       }


      }

      
    async componentWillMount(){
    
        if(this.state.domanda != this.props.domanda){
            await this.setState({domanda:this.props.domanda})

            this.getSelected(domande[this.state.domanda].risposte);

        }
       }
    
       calcolaDiagnosi(){

        if(this.state.domanda2.risposta == "Solo quando cammino" && this.state.domanda3.risposta == "No. Mi fa male solo con le scarpe")
        this.setState({diagnosi:dagnosi[0]})
        else if(this.state.domanda2.risposta == "Entrambi i casi" && this.state.domanda3.risposta == "Si")
        this.setState({diagnosi:dagnosi[1]})        
        else if(this.state.domanda2.risposta == "Solo quando cammino" && this.state.domanda3.risposta == "No. Mi fa male solo con le scarpe" && this.state.domanda4.risposta == "Si. Il dolore è tanto piu forte quando cammino")
        this.setState({diagnosi:dagnosi[2]})
        else if(this.state.domanda2.risposta == "Solo quando cammino" && this.state.domanda3.risposta == "No. Mi fa male solo con le scarpe" && this.state.domanda4.risposta == "Si. Il dolore è tanto piu forte quando cammino")
        this.setState({diagnosi:dagnosi[3]})

       }


       async getSelected(data){       

        data.forEach(element => {

            if(element.selected == true){

                switch(this.state.domanda){
                    case 0:
                    this.setState({domanda1:{risposta: element.label}})
                    break;

                    case 1:
                    this.setState({domanda2:{risposta: element.label}})
                    break;

                    case 2:
                    this.setState({domanda3:{risposta: element.label}})
                    break;

                    case 3:
                    this.setState({domanda4:{risposta: element.label}})
                    break;

                    case 4:
                    this.setState({domanda5:{risposta: element.label}})
                    break;
                    
                }

            }

   
        });

                this.setState({disabled:false})
                await this.calcolaDiagnosi();
                this.props.setDisabled()
                this.props.setDiagnosi(this.state.diagnosi)
       }

  
 
    render() {

        return (
            
          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
           
          <Text style={{fontSize:30, color:'#988C6C', textAlign:'center'}}>{domande[this.state.domanda].domanda}</Text>

            <RadioGroup radioButtons={domande[this.props.domanda].risposte} onPress={(data)=>this.getSelected(data)} />
         </View>
        );
      }
}

