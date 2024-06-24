import React, {Component} from 'react'
import {View , Text , StyleSheet , TouchableOpacity ,ImageBackground} from 'react-native'

export default class StrokeSymptom extends Component{
  render(){
    return(
      <View style={{backgroundColor: 'cyan' , flex:1}}>
      <ImageBackground source={require('../assets/bg3.jpg')} style={{flex:1 , width:'100%' , height:'100%'}}>
      <Text style={styles.title}> SYMPTOMS  </Text>
      <Text style={styles.detail}> {'Symptoms of stroke include:\n\n-> Trouble speaking and understanding what others are saying.\n-> Numbness, weakness or paralysis in the face, arm or leg.\n-> Problems seeing in one or both eyes.\n-> Headache \n-> Vomiting, dizziness and a change in consciousness may occur with the headache.\n-> Trouble walking. '}</Text>

       

        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Stroke')}
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
  marginTop: 20,
  fontSize:20,
 
  fontFamily: 'cursive'
}

})