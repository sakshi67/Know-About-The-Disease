import React,{Component} from 'react'
import {View ,Text , StyleSheet , TouchableOpacity ,ImageBackground , Image} from 'react-native'

export default class Ebola extends Component{
  render(){
    return(
      <View style={{ flex:1}}>
       <ImageBackground source={require('../assets/d5.jpg')} style={{flex:1 , width:'100%' , height:'100%'}}>
        <View style={{flexDirection: 'row'}}>
       <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
       <Image source={require('../assets/arrow.png')} style={{width:50 , height:50}}/>
       </TouchableOpacity>
      <Text style={styles.title}> EBOLA VIRUS </Text>
      </View>
      <Text style={styles.detail}>Ebola virus disease (EVD or Ebola) is a rare but severe illness in humans. It is often fatal. Ebola enters the body through cuts in the skin or when touching one’s eyes, nose or mouth. Early symptoms include fever, fatigue and headache.
Some types of Ebola can be prevented with vaccines and treated with medicines. Ebola first appeared in 1976 in 2 simultaneous outbreaks, one in what is now Nzara, South Sudan, and the other in Yambuku, Democratic Republic of the Congo. The latter occurred in a village near the Ebola River, from which the disease takes its name.</Text>
     

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('EbolaSymptom')}
        style={{marginTop:20 , alignSelf:'center', borderWidth:2 , width:130 , height:50 , justifyContent:'center' , alignItems:'center' , borderRadius:20 , borderColor:'white'}}>
        <Text style={{ fontSize:20 , fontWeight:'bold' , color:'white'}}>SYMPTOMS</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('EbolaSymptom')}
        style={{marginTop:20 , alignSelf:'center', borderWidth:2 , width:130 , height:50 , justifyContent:'center' , alignItems:'center' , borderRadius:20 , borderColor:'white'}}>
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
  fontFamily:'cursive',
  color:'white',
  marginLeft: 40
  
},
detail:{
  fontSize:20,
  textAlign:'center',
  marginTop:20,
  color:'white',
  fontWeight:'bold'
}

})