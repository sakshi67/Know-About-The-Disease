import React, {Component} from 'react'
import {View , Text , StyleSheet , TouchableOpacity , ImageBackground} from 'react-native'

export default class TBCure extends Component{
  render(){
    return(
      <View style={{flex:1}}>
      <ImageBackground source={require('../assets/bg2.jpg')} style={{flex:1 , width:'100%' , height:'100%'}}>
      <Text style={styles.title}> CURE & PREVENTION  </Text>
      <Text style={styles.detail}> {' - If you’re traveling to a place where TB is common, avoid spending a lot of time in crowded places with sick people. \n\n - Cover your mouth when you laugh, sneeze, or cough. \n\n - Wear a surgical mask when you’re around other people.\n\n - Keep your space ventilated. Open windows, if possible, and use a fan. Germs spread more easily in poorly ventilated places.\n\n Tuberculosis vaccine :\n\n-Children in countries where TB is common often get the BCG vaccine.\n'}
</Text>

       

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