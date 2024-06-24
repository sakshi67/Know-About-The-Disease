import React, {Component} from 'react'
import {View, Text , ImageBackground , StyleSheet , TouchableOpacity} from 'react-native'

export default class Home extends Component{

  render(){
    return(
  <View style={styles.container}>
  <ImageBackground source={require('../assets/bg.png')}style={{flex:1 , resizeMode: 'contain'}}> 
    <Text style={styles.title}>Know About Diseases</Text>

    <TouchableOpacity 
    onPress={()=>this.props.navigation.navigate('DB')} 
    style={{borderWidth:3 , width:200 , height:80 , marginTop:30 , borderRadius:40 , justifyContent: 'center' , alignItems:'center' , marginLeft: 10 , backgroundColor: '#FF9033' }}>
    <Text style={{fontSize: 30 , fontFamily:'cursive' , color:'white' , fontWeight:'bold'}}>DIABETES</Text>
    </TouchableOpacity>

    <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Stroke')} 
    style={{borderWidth:3 , width:200 , height:80 , marginTop:30 , borderRadius:40 , justifyContent: 'center' , alignItems:'center' , marginLeft: 170 , backgroundColor: '#F74361'}}>
    <Text style={{fontSize: 30 , fontFamily:'cursive' , color:'white' , fontWeight:'bold'}}>STROKE</Text>
    </TouchableOpacity>

    <TouchableOpacity   onPress={()=>this.props.navigation.navigate('TB')} 
    style={{borderWidth:3 , width:230 , height:80 , marginTop:30 , borderRadius:40 , justifyContent: 'center' , alignItems:'center' , marginLeft: 10 , backgroundColor: '#FF9033'}}>
    <Text style={{fontSize: 25 , fontFamily:'cursive' , color:'white' , fontWeight:'bold'}}>TUBERCULOSIS</Text>
    </TouchableOpacity>

    <TouchableOpacity   onPress={()=>this.props.navigation.navigate('Aids')} 
    style={{borderWidth:3 , width:200 , height:80 , marginTop:30 , borderRadius:40 , justifyContent: 'center' , alignItems:'center' , marginLeft: 170 , backgroundColor: '#F74361'}}>
    <Text style={{fontSize: 30 , fontFamily:'cursive' , color:'white' , fontWeight:'bold'}}>AIDS</Text>
    </TouchableOpacity>

    <TouchableOpacity   onPress={()=>this.props.navigation.navigate('Ebola')} 
    style={{borderWidth:3 , width:200 , height:80 , marginTop:30 , borderRadius:40 , justifyContent: 'center' , alignItems:'center' , marginLeft: 10 , backgroundColor: '#FF9033'}}>
    <Text style={{fontSize: 30 , fontFamily:'cursive' , color:'white' , fontWeight:'bold'}}>EBOLA</Text>
    </TouchableOpacity>

    </ImageBackground>
  </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  title:{
    fontSize: 40,
    textAlign:'center',
    fontFamily:'cursive'
  }

})