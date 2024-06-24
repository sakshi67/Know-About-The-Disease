import React, {Component} from 'react'
import {View , Text , StyleSheet , TouchableOpacity , ImageBackground} from 'react-native'

export default class TBSymptom extends Component{
  render(){
    return(
      <View style={{backgroundColor: 'cyan' , flex:1}}>
      <ImageBackground source={require('../assets/bg3.jpg')} style={{flex:1 , width:'100%' , height:'100%'}}>
      <Text style={styles.title}> SYMPTOMS  </Text>
      <Text style={styles.detail}> {'->  A cough that lasts more than 3 weeks – you may cough up mucus (phlegm) or mucus with blood in it.\n-> Feeling tired or exhausted.\n-> A high temperature or night sweats.\n-> Loss of appetite.\n-> Weight loss.\n-> Feeling generally unwell.'} </Text>

       

        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('TB')}
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
  fontSize:30,
  fontFamily: 'cursive',
  
}

})