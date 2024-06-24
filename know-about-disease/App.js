import { Text, SafeAreaView, StyleSheet } from 'react-native';
import Diabetes from './screens/Diabetes'
import Ebola from './screens/ebola'
import Stroke from './screens/stroke'
import TB from './screens/tb'
import AIDS from './screens/aids'
import DiabetesSymptom from './screens/diabetesSymptom'
import EbolaSymptom from './screens/ebolaSymptom'
import StrokeSymptom from './screens/strokeSymptom'
import AidsSymptom from './screens/aidsSymptom'
import TBSymptom from './screens/tbSymptom'
import DiabetesCure from './screens/diabetesCure'
import EbolaCure from './screens/ebolaCure'
import StrokeCure from './screens/strokeCure'
import AidsCure from './screens/aidsCure'
import TBCure from './screens/tbCure'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
const Stack = createStackNavigator()

import Home from './screens/home'
export default function App() {
  return (
   <NavigationContainer>
   <Stack.Navigator  initialRouteName='Home'  screenOptions={{headerShown:false}}>
   <Stack.Screen name='Home' component={Home}/>
   <Stack.Screen name='DB' component={Diabetes}/>
   <Stack.Screen name='Ebola' component={Ebola}/>
   <Stack.Screen name='Stroke' component={Stroke}/>
   <Stack.Screen name='Aids' component={AIDS}/>
   <Stack.Screen name='TB' component={TB}/>
   <Stack.Screen name='DBSymptom' component={DiabetesSymptom}/>
   <Stack.Screen name='EbolaSymptom' component={EbolaSymptom}/>
   <Stack.Screen name='StrokeSymptom' component={StrokeSymptom}/>
   <Stack.Screen name='AidsSymptom' component={AidsSymptom}/>
   <Stack.Screen name='TBSymptom' component={TBSymptom}/>
   <Stack.Screen name='DBCure' component={DiabetesCure}/>
   <Stack.Screen name='EbolaCure' component={EbolaCure}/>
   <Stack.Screen name='StrokeCure' component={StrokeCure}/>
   <Stack.Screen name='AidsCure' component={AidsCure}/>
   <Stack.Screen name='TBCure' component={TBCure}/>
   </Stack.Navigator>
   </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
