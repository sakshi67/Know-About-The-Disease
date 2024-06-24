import React, {Component} from 'react'
import {View , Text , StyleSheet , TouchableOpacity , ImageBackground} from 'react-native'

export default class EbolaSymptom extends Component{
  render(){
    return(
      <View style={{backgroundColor: 'cyan' , flex:1}}>
      <ImageBackground source={require('../assets/bg3.jpg')} style={{flex:1 , width:'100%' , height:'100%'}}>
      <Text style={styles.title}> SYMPTOMS  </Text>
      <Text style={styles.detail}> {'* The symptoms of Ebola infection can be sudden and include: \n\n -> Fever\n  -> Fatigue\n -> Muscle Pain \n -> Headache and Sore Throat\n\n * These are followed by \n\n -> Vomiting\n -> Diarrhoea \n -> Rash \n -> Internal and External Bleeding.'}
 </Text>

       

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Ebola')}
         style={{marginTop:50 , alignSelf:'center', borderWidth:2 , width:130 , height:50 , justifyContent:'center' , alignItems:'center' , borderRadius:20}}>
        <Text style={{ fontSize:20 , fontWeight:'bold'}}>Back</Text>
        </TouchableOpacity>
      </ImageBackground>
      </View>
    )
  }
}

const styles= StyleSheet.create({

title:{
  textAlign:'center',
  fontSize: 35,
  textDecorationLine: 'underline',
  fontWeight: 'bold'
  
},

detail:{
  marginTop: 30,
  fontSize:20,
 
  fontFamily: 'cursive'
}

})