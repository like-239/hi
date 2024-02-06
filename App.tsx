import React, { useState , useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar
} from 'react-native';

import { COLORS, SIZES } from '../MyApp/constants';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import login from '../MyApp/screens/login';
import signup from '../MyApp/screens/signup';
import profile from '../MyApp/screens/profile';
import API from '../MyApp/service/GlobalAPI';
import orderManagement from './screens/orderManagement';
import orderdetail from './screens/orderdetail';
const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="orderdetail"
          component={orderdetail}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="Login"
          component={orderManagement}
          options={{headerShown: false}}
        />
        
      <Stack.Screen
          name="Signup"
          component={signup}
          options={{headerShown: false}}
        />

        
       <Stack.Screen
          name="Profile"
          component={profile}
          options={{headerShown: false}}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  coverImage: {
      
    width: '100%',
    height: SIZES.height/3,
    resizeMode:"cover"
  },
  container: {
    flex: 1,
    backgroundColor:COLORS.lightWhite
    
  },
  profileContainer:{
    //flex:1,
    alignItems:"center",
    marginTop: -40,
  marginBottom: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 999,
    marginTop: -90,
    resizeMode:"cover",
    borderWidth:2,
    borderColor:COLORS.primary
  },
  name:{
    fontFamily:"bold",/*bold/*/
    color:COLORS.primary,
    marginVertical:5,
  
},
menuText:{
  fontFamily:"Poppins",//regular
  color:COLORS.gray,
  marginLeft:20,
  fontWeight:'600',
  fontSize:14,
  lineHeight:26
},
loginBtn:{
  backgroundColor:COLORS.secondary,
  padding:1.5,
  borderWidth:0.4,
  borderColor:COLORS.primary,
  borderRadius:SIZES.medium
},
menuItem:{
  borderBottomWidth:1,
  flexDirection:'row',
  paddingVertical:13,
  paddingHorizontal:35,
  borderColor:COLORS.gray2
},
menuWrapper:{
  //marginTop:SIZES.xLagrge,
  width:SIZES.width-SIZES.large,
  backgroundColor:COLORS.lightWhite,
  borderRadius:12
},
});

export default App;
