import React, {Component} from 'react'
import {View , Text , StyleSheet , TouchableOpacity , ImageBackground} from 'react-native'

export default class DiabetesCure extends Component{
  render(){
    return(
      <View style={{backgroundColor: 'cyan' , flex:1}}>
      <ImageBackground source={require('../assets/bg2.jpg')} style={{flex:1 , width:'100%' , height:'100%'}}>
      <Text style={styles.title}> CURE & PREVENTION </Text>
      <Text style={styles.detail}> {'Diabetes prevention : \n\n - Lose extra weight. Losing weight reduces the risk of diabetes. ...\n\n - Be more physically active. There are many benefits to regular physical activity. ...\n\n - Eat healthy plant foods. ...\n\n - Eat healthy fats. ...\n\n - Skip fad diets and make healthier choices.'}'
</Text>

       

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('DB')}
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