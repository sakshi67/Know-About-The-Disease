import React, {Component} from 'react'
import {View , Text , StyleSheet , TouchableOpacity , ImageBackground} from 'react-native'

export default class AidsSymptom extends Component{
  render(){
    return(
      <View style={{backgroundColor: 'cyan' , flex:1}}>
      <ImageBackground source={require('../assets/bg3.jpg')} style={{flex:1 , width:'100%' , height:'100%'}}>
      <Text style={styles.title}> SYMPTOMS  </Text>
      <Text style={styles.detail}> {'May have an influenza-like illness including: \n->Fever \n->Headache\n->Rash\n->Sore Throat\n'}

</Text>
<Text style={styles.detail}>{'The infection progressively weakens the immune system. This can cause other signs and symptoms:\n-> Swollen Lymph Nodes\n-> Weight Loss\n-> Fever\n-> Diarrhoea\n-> Cough\n Without treatment, people with HIV infection can also develop severe illnesses: \n-> Tuberculosis (TB)\n-> Cryptococcal Meningitis\n-> Severe Bacterial Infections\n->Cancers such as Lymphomas and Kaposi sarcoma'} </Text>

       

        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Aids')}
        style={{marginTop:40 , alignSelf:'center', borderWidth:2 , width:130 , height:50 , justifyContent:'center' , alignItems:'center' , borderRadius:20}}>
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
  fontSize: 35,
  textDecorationLine: 'underline',
  fontWeight: 'bold'
  
},

detail:{
  marginTop: 10,
  fontSize:19,

  fontFamily: 'cursive'
}

})