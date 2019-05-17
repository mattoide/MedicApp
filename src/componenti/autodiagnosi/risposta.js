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



var fetchTimeout = require('fetch-timeout');


const diagnosi = [
    {
        domanda:"Da quanto ti fa male?", risposte:[ 
                                                    "1-2 settimane",
                                                    "2-4 settimane",
                                                    "1-2 mesi",
                                                    "2-3 mesi",
                                                    "6-12 mesi",
                                                    "1-2 anni",
                                                    "2-5 anni",
                                                    "oltre 5 anni",
                                                    ]
    },
    {
        domanda:"Ti fa male?", risposte:[ 
                                                    "Solo quando cammino",
                                                    "Solo quando sono a riposo",
                                                    "Non mi fa male",
                                                    "Entrambi i casi"
                                                    ]
    },
    {
        domanda:"Ti fa male quando cammini scalzo?", risposte:[ 
                                                                "Si",
                                                                "Non mi fa male",
                                                                "No. Mi fa male solo con le scarpe"
                                                    ]
    },
    {
        domanda:"Il dolore è più forte quando inizi a camminare?", risposte:[ 
                                                                            "No. Il dolore diminuisce quando cammino",
                                                                            "SI. Il dolore diminuisce quando cammino"
                                                    ]
    },
    {
        domanda:"Quanto ti fa male?", risposte:[ 
                                                                            "1",
                                                                            "2",
                                                                            "3",
                                                                            "4",
                                                                            "5",
                                                                            "6",
                                                                            "7",
                                                                            "8",
                                                                            "9",
                                                                            "10",
                                                    ]
    },

    

]

export default class StepInt extends Component {

    constructor(props) {
        super(props);

        this.state = {
            domanda:-1
        };


    }

    _renderItem = (item, index) =>{
        const myFontSize = 25;
        
        
        return (  
            <Text>{item}</Text>
          );
        } 

    creaRisposte(domanda){
        switch(domanda){
            case 0:
            diagnosi[0].risposte.forEach(element => {
                return(<Text>sdssdffsfs</Text>)
            });

            break;

            case 1:

            break;

            case 2:

            break;

            case 3:

            break;

            case 4:

            break;
        }

    }



    componentDidUpdate(){

    
       if(this.state.domanda != this.props.domanda)
        this.setState({domanda:this.props.domanda})
      }

      
    componentWillMount(){
    
        if(this.state.domanda != this.props.domanda)
         this.setState({domanda:this.props.domanda})
       }
    

  
 
    render() {

        let risp = this.creaRisposte(this.state.domanda);

        return (
            
          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
           

          <Text>{diagnosi[this.state.domanda].domanda}</Text>


          <FlatGrid
  items={diagnosi[this.state.domanda].risposte}
  // items={this.state.user.esercizi}
  renderItem={({item, index}) => (this._renderItem(item, index))}
  style={{maxHeight: '60%'}}
  itemDimension={1000}
  spacing={1}
/> 

         </View>
        );
      }

    
}



