import React, {
    Component
} from 'react';

import {
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    Image, StyleSheet
} from 'react-native';




import { FlatGrid, SectionGrid } from 'react-native-super-grid';




var fetchTimeout = require('fetch-timeout');

 
const immagini = [
    {immagine: require('../../immagini/esercizi/defaultfeetexercise1_0.jpg'), diagnosi:'Haglund'},
    {immagine: require('../../immagini/esercizi/defaultfeetexercise2_0.jpg'), diagnosi:'Piede piatto'},
    {immagine: require('../../immagini/esercizi/defaultfeetexercise3_0.jpg'), diagnosi:''}, //3
    {immagine: require('../../immagini/esercizi/defaultfeetexercise1_0.jpg'), diagnosi:''},//4
    {immagine: require('../../immagini/esercizi/defaultfeetexercise2_0.jpg'), diagnosi:''},//5
    {immagine: require('../../immagini/esercizi/defaultfeetexercise3_0.jpg'), diagnosi:''},//6
    {immagine: require('../../immagini/esercizi/defaultfeetexercise1_0.jpg'), diagnosi:''},//7
    {immagine: require('../../immagini/esercizi/defaultfeetexercise2_0.jpg'), diagnosi:'5 dito varo'},
    {immagine: require('../../immagini/esercizi/defaultfeetexercise3_0.jpg'), diagnosi:'Brachimetatarsia'},
    {immagine: require('../../immagini/esercizi/defaultfeetexercise1_0.jpg'), diagnosi:'Spina'},
    {immagine: require('../../immagini/esercizi/defaultfeetexercise2_0.jpg'), diagnosi:''},//11
    {immagine: require('../../immagini/esercizi/defaultfeetexercise3_0.jpg'), diagnosi:'Sintattilia'},
]

const dagnosi = ["Alluce valgo", "Alluce rigido", "Dito a martello", "Piede piatto", "Sintattilia", "Allungamento", "Accorciamento", "Haglund", "Spina", "Metatarsalagia", "Morton", "5 dito varo", "Brachimetatarsia"];


export default class RispostaImg extends Component {

    constructor(props) {
        super(props);

        this.state = {
            domanda:-1,           
            diagnosi:'',

            disabled:true
        };


    }

    async componentWillUpdate(){

    
       if(this.state.domanda != this.props.domanda){
          await  this.setState({domanda:this.props.domanda})
        }


      }

      
    async componentWillMount(){
    
        if(this.state.domanda != this.props.domanda){
            await this.setState({domanda:this.props.domanda})
        }
       }
    
       _renderItem = (item, index) =>{
        const myFontSize = 25;
        
        
        return (  
                
                // <View style={{borderColor:'#333333', borderStyle:'solid', borderTopWidth:1, flex:1}}>
                              <View style={{ 
                                justifyContent: 'center', alignItems:'center', alignContent:'center', alignSelf:'center',
                                width:150,
                                height:150,
                                borderRadius: 5,
                                padding: 0
                                }}>
 
                <ScrollView>
 
<TouchableOpacity 
onPress={()=>{this.setState({dagnosi:item.diagnosi})
            this.props.avanti(item.diagnosi);
             }} 
>

            <Image 
            source={item.immagine}
            style={{width:150, height:150}}
            >
                
            </Image>
</TouchableOpacity>
                    
                {/* <View style={{flexDirection:'row',flex:1}}>
        
                <View style={{flex:1,justifyContent:'flex-start'}}>
                <Text style={{textAlign:'center',fontSize:myFontSize, color:'#988C6C', justifyContent:'flex-start'}}>{item.data} </Text>   
                </View>
        
                <View style={{ flex:1, flexDirection:'row', justifyContent:'flex-end', marginHorizontal:'5%'}}>
                <Text style={{textAlign:'center', fontSize:myFontSize, color:'#988C6C', }}>{item.completi}/{item.totali}</Text>           
                </View>
                </View> */}
                </ScrollView>             
              </View> 
          );
        } 
 
    render() {

        return (
            
          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
           
          <Text style={{fontSize:30, color:'#988C6C', textAlign:'center'}}>Dove hai dolore?</Text>

          <FlatGrid
            items={immagini}
            renderItem={({item, index}) => (this._renderItem(item, index))}
             style={{flex:1}}
            itemDimension={150} 
            itemContainerStyle={{justifyContent:'center', alignContent:'center', alignItems:'center', padding:1}} 
            spacing={10}
            />  

         </View>
        );
      }
}

