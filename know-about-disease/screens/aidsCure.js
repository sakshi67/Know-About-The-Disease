import React, {Component} from 'react'
import {View , Text , StyleSheet , TouchableOpacity , ImageBackground} from 'react-native'

export default class AidsCure extends Component{
  render(){
    return(
      <View style={{backgroundColor: 'cyan' , flex:1}}>
      <ImageBackground source={require('../assets/bg2.jpg')} style={{flex:1 , width:'100%' , height:'100%'}}>
      <Text style={styles.title}> CURE & PREVENTION </Text>
      <Text style={styles.detail}> {'-Use latex condoms (rubbers) whenever you have any type of sex (vaginal, anal or oral).\n\n - Dont use condoms made from animal products (like lambskin).\n\n - Use water-based lubricants (lotion).\n\n -Never share needles to take drugs.\n\n - Get tested and treated for other STIs.\n\n - Other STIs can put you at higher risk for an HIV infection.'}</Text>

       

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Aids')}
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