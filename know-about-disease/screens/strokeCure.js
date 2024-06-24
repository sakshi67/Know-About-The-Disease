import React, {Component} from 'react'
import {View , Text , StyleSheet , TouchableOpacity ,ImageBackground} from 'react-native'

export default class StrokeCure extends Component{
  render(){
    return(
      <View style={{backgroundColor: 'cyan' , flex:1}}>
      <ImageBackground source={require('../assets/bg2.jpg')} style={{flex:1 , width:'100%' , height:'100%'}}>
      <Text style={styles.title}> CURE  & PREVENTION </Text>
      <Text style={styles.detail}> {'- The best way to help prevent a stroke is to eat a healthy diet, exercise regularly, and avoid smoking and drinking too much alcohol.\n\n -These lifestyle changes can reduce your risk of problems like: arteries becoming clogged with fatty substances (atherosclerosis) high blood pressure.'} </Text>

       

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Stroke')}
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
  fontSize: 30,
  textDecorationLine: 'underline',
  fontWeight: 'bold'
  
},

detail:{
  marginTop: 20,
  fontSize:25,
  textAlign:'center',
  fontFamily: 'cursive'
}

})