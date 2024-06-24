import React,{Component} from 'react'
import {View ,Text , StyleSheet , TouchableOpacity , ImageBackground , Image} from 'react-native'

export default class Stroke extends Component{
  render(){
    return(
      <View style={{ flex:1}}>
       <ImageBackground source={require('../assets/d2.jpg')} style={{flex:1 , width:'100%' , height:'100%'}}>
        <View style={{flexDirection: 'row'}}>
       <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
       <Image source={require('../assets/arrow.png')} style={{width:50 , height:50}}/>
       </TouchableOpacity>
      <Text style={styles.title}> STROKE </Text>
      </View>
      <Text style={styles.detail}>A stroke occurs when a blockage or bleed of the blood vessels either interrupts or reduces the supply of blood to the brain. When this happens, the brain does not receive enough oxygen or nutrients, and brain cells start to die.

Stroke is a cerebrovascular disease. This means that it affects the blood vessels that feed the brain oxygen. If the brain does not receive enough oxygen, damage may start to occur.

This is a medical emergency. Although many strokes are treatable, some can lead to disability or death.</Text>
     

        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('StrokeSymptom')}
        style={{marginTop:30 , alignSelf:'center',borderColor:'white', borderWidth:2 , width:130 , height:50 , justifyContent:'center' , alignItems:'center' , borderRadius:20}}>
        <Text style={{ fontSize:20 , fontWeight:'bold' , color:'white'}}>SYMPTOMS</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('StrokeCure')}
        style={{marginTop:30 , alignSelf:'center',borderColor:'white' ,borderWidth:2 , width:130 , height:50 , justifyContent:'center' , alignItems:'center' , borderRadius:20}}>
        <Text style={{ fontSize:20 , fontWeight:'bold', color:'white'}}>CURE</Text>
        </TouchableOpacity>
        </ImageBackground>

         </View>
    )
  }
}
 
const styles= StyleSheet.create({
title:{
  fontSize: 30,
  textAlign:'center',
  textDecorationLine:'underline',
   fontFamily: 'cursive',
  color:'white',
  marginLeft: 50,
  fontWeight:'bold'
  
},
detail:{
  fontSize:20,
  textAlign:'center',
  marginTop:20,
  color:'white',
  fontWeight:'bold'
}

})