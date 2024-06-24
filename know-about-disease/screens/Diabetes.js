import React, {Component} from 'react'
import {View , Text , StyleSheet , TouchableOpacity ,ImageBackground , Image} from 'react-native'

export default class Diabetes extends Component{
  render(){
    return(
      <View style={{ flex:1}}>
       <ImageBackground source={require('../assets/dbimg1.jpg')} style={{flex:1 , width:'100%' , height:'100%' , resizeMode:'cover'}}>
       <View style={{flexDirection: 'row'}}>
       <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
       <Image source={require('../assets/arrow.png')} style={{width:50 , height:50}}/>
       </TouchableOpacity>
      <Text style={styles.title}> DIABETES  </Text>
      </View>
      <Text style={styles.detail}> Diabetes is a chronic disease that occurs either when the pancreas does not produce enough insulin or when the body cannot effectively use the insulin it produces. Insulin is a hormone that regulates blood glucose. Hyperglycaemia, also called raised blood glucose or raised blood sugar, is a common effect of uncontrolled diabetes and over time leads to serious damage to many of the body's systems, especially the nerves and blood vessels.</Text>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('DBSymptom')}
        style={{marginTop:30 , alignSelf:'center', borderWidth:2 , width:130 , height:50 , justifyContent:'center' , alignItems:'center' , borderRadius:20}}>
        <Text style={{ fontSize:20 , fontWeight:'bold'}}>SYMPTOMS</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('DBCure')}
        style={{marginTop:30 , alignSelf:'center', borderWidth:2 , width:130 , height:50 , justifyContent:'center' , alignItems:'center' , borderRadius:20}}>
        <Text style={{ fontSize:20 , fontWeight:'bold'}}>CURE</Text>
        </TouchableOpacity>
      </ImageBackground>
      </View>
    )
  }
}

const styles= StyleSheet.create({

title:{
  textAlign:'center',
   fontFamily: 'cursive',
  fontSize: 35,
  textDecorationLine: 'underline',
  fontWeight: 'bold',
  color:'white',
  marginLeft: 40
  
},

detail:{
  marginTop: 20,
  fontSize:20,
  textAlign:'center',
  color:'black',
  fontWeight:'bold'
}

})