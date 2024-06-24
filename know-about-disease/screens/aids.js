import React,{Component} from 'react'
import {View ,Text , StyleSheet , TouchableOpacity , ImageBackground , Image} from 'react-native'

export default class AIDS extends Component{
  render(){
    return(
      <View style={{flex:1}}>
       <ImageBackground source={require('../assets/d3.jpg')} style={{flex:1 , width:'100%' , height:'100%'}}>
        <View style={{flexDirection: 'row'}}>
       <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
       <Image source={require('../assets/arrow.png')} style={{width:50 , height:50}}/>
       </TouchableOpacity>
      <Text style={styles.title}> AIDS </Text>
      </View>
      <Text style={styles.detail}>AIDS is the late stage of HIV infection that occurs when the body's immune system is badly damaged because of the virus. In the U.S., most people with HIV do not develop AIDS because taking HIV medicine as prescribed stops the progression of the disease.
      </Text>
     

        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('AidsSymptom')}
        style={{marginTop:30 , alignSelf:'center',borderColor:'white', borderWidth:2 , width:130 , height:50 , justifyContent:'center' , alignItems:'center' , borderRadius:20}}>
        <Text style={{ fontSize:20 , fontWeight:'bold', color:'white'}}>SYMPTOMS</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('AidsCure')}
         style={{marginTop:30 , alignSelf:'center',borderColor:'white' ,borderWidth:2 , width:130 , height:50 , justifyContent:'center' , alignItems:'center' , borderRadius:20}}>
        <Text style={{ fontSize:20 , fontWeight:'bold' , color:'white'}}>CURE</Text>
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
  marginLeft: 60

  
},
detail:{
  fontSize:25,
  textAlign:'center',
  marginTop:20,
   fontFamily: 'cursive',
  color:'white'
}

})