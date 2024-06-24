import React, {Component} from 'react'
import {View , Text , StyleSheet , TouchableOpacity ,ImageBackground} from 'react-native'

export default class EbolaCure extends Component{
  render(){
    return(
      <View style={{backgroundColor: 'cyan' , flex:1}}>
      <ImageBackground source={require('../assets/bg2.jpg')} style={{flex:1 , width:'100%' , height:'100%'}}>
      <Text style={styles.title}> CURE & PREVENTION  </Text>
      <Text style={styles.detail}> {'- Avoid touching the body of someone who died from Ebola, or use protective equipment if you have to. This includes funeral customs. \n\n - Avoid contact with body fluids and tissues of animals (dead or alive) that could have Ebola. \n\n - Don’t eat bush meat (the meat of wild animals). \n\n- If you’ve recently returned from travel to a place where there’s an Ebola outbreak, monitor yourself for symptoms for 21 days. Get medical care right away if you develop symptoms. \n\n - Isolate yourself from others if you could have Ebola.'}</Text>

       

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
  fontSize: 30,
  textDecorationLine: 'underline',
  fontWeight: 'bold'
  
},

detail:{
  marginTop: 20,
  fontSize:20,
  textAlign:'center',
  fontFamily: 'cursive'
}

})