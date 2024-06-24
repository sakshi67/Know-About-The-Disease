import React,{Component} from 'react'
import {View ,Text , StyleSheet , TouchableOpacity , ImageBackground ,Image} from 'react-native'

export default class TB extends Component{
  render(){
    return(
      <View style={{flex:1}}>
       <ImageBackground source={require('../assets/tbimg1.png')} style={{ width:'100%' , height:'100%'}}>
       <View style={{flexDirection:'row'}}>
       <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
       <Image source={require('../assets/arrow.png')} style={{width:50 , height:50}}/>
       </TouchableOpacity>
      <Text style={styles.title}> TUBERCULOSIS </Text>
      </View>
      <Text style={styles.detail}>Tuberculosis (TB) is a serious illness that mainly affects the lungs. The germs that cause tuberculosis are a type of bacteria.

Tuberculosis can spread when a person with the illness coughs, sneezes or sings. This can put tiny droplets with the germs into the air. Another person can then breathe in the droplets, and the germs enter the lungs.

Tuberculosis spreads easily where people gather in crowds or where people live in crowded conditions. People with HIV/AIDS and other people with weakened immune systems have a higher risk of catching tuberculosis than people with typical immune systems.</Text>
     

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('TBSymptom')} 
        style={{marginTop:20 , alignSelf:'center', borderColor:'white',borderWidth:2 , width:130 , height:50 , justifyContent:'center' , alignItems:'center' , borderRadius:20}}>
        <Text style={{ fontSize:20 , fontWeight:'bold', color:'white'}}>SYMPTOMS</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('TBCure')}
        style={{marginTop:10 , alignSelf:'center', borderColor:'white',borderWidth:2 , width:130 , height:50 , justifyContent:'center' , alignItems:'center' , borderRadius:20}}>
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
  marginLeft:30,
  fontWeight:'bold'
  
},
detail:{
  fontSize:20,
  textAlign:'center',
  marginTop:10,
  color:'white',
  fontWeight:'bold'
}

})