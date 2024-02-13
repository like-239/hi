import React, { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View, 
  TextInput,
  ScrollView,
  SafeAreaView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SIZES } from '../../constants';
import API from '../../services/GlobalAPI';
import Ionicons from 'react-native-vector-icons/Ionicons';
const UserDetails = () => {
    const navigation = useNavigation(); 
    const [username, setUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [location, setLocation] = useState('');
  const [phoneNumber,setPhoneNumber]=useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem('username');
        const storedUserEmail = await AsyncStorage.getItem('email');
        const storedUserId = await AsyncStorage.getItem('userId');
       
          setUsername(storedUsername);
         
        
          const loginData = {
            username: 'Admin',
           password: '123456',
          };
          const response = await API.requestPOST_Login('/auth/login', loginData);
 const userToken=response.token;
 const responses = await API.requestGET_USER_DETAILS(`/users/details?id=${storedUserId}&token=${userToken}`);
 
 const { user } = responses;
 const { username ,email, address, phone,password} = user;
    setUserEmail(email)
          setPhoneNumber(phone)
          setLocation(address)
          setPassword(password)
      } catch (error) {
        console.log('Error getting user details:', error);
      }
    };

    getUserDetails();
  }, []); 
    return (
        <View style={styles.container}>
      
        <StatusBar backgroundColor={COLORS.gray}/>
    
         <View style={{width:'100%'}}>
          <Image
           source={require('../../../assets/images/space.jpg')} 
           style={styles.coverImage }
           resizeMode='cover'
         />
       </View>
       
          <View style={styles.profileContainer}>
          <Image
            source={require( '../../../assets/images/profile.jpeg' )} 
            style={styles.avatar }
          />
            
            <Text style={styles.name}>{username}</Text>
          <View style={styles.loginBtn}>
         
              <Text style={styles.menuText}>{userEmail}</Text>
            </View>
            </View>   

            <View >
            <View style={styles.menuItem}>
              <Text style={styles.label}>Name:</Text>
                <TextInput 
                  onChangeText={(text) => setUsername(text)}
                  value={username}
                />
              
            </View>

            <View style={styles.menuItem}>
              <Text style={styles.label}>Email:</Text>
                <TextInput 
                  onChangeText={(text) => setUsername(text)}
                  value={userEmail}
                />
              
            </View>

            <View style={styles.menuItem}>
              <Text style={styles.label}>PhoneNumber:</Text>
                <TextInput 
                  onChangeText={(text) =>setPhoneNumber(text)}
                  value={phoneNumber}
                />
            </View>
            
            <View style={styles.menuItem}>
              <Text style={styles.label}>Address:</Text>
                <TextInput 
                  onChangeText={(text) => setLocation(text)}
                  value={location}
                />
              
            </View>

            <View style={styles.menuItem}>
              <Text style={styles.label}>Password:</Text>
                <TextInput 
                  onChangeText={(text) => setPassword(text)}
                  value={password}
                />
              
            </View>

      </View>
            </View>





    )
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
      lineHeight:26,
      color:COLORS.primary,
      marginVertical:5,
      fontSize:SIZES.large,
      fontFamily: 'bold', 
      fontWeight: 'bold',
  },
  menuText:{
    
    color:COLORS.gray,
    marginHorizontal:20,
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
    marginLeft:20,
    flexDirection:'row',
    borderColor:COLORS.gray2,
    borderBottomWidth:1,  
    alignItems:'center',
  },
  menuWrapper:{
    //marginTop:SIZES.xLagrge,
    width:SIZES.width-SIZES.large,
    backgroundColor:COLORS.lightWhite,
    borderRadius:14
  },

  iconStyle: {
    marginRight: 10,
  },
    backbtn: {
    alignItems: 'center',
    position: 'absolute',
    //zIndex:999,
    top: SIZES.large - 10,
  },
  cover: {
    height: SIZES.height / 2.4,
    width: SIZES.width - 60,
    resizeMode: 'contain',
    marginBottom: SIZES.Large,
  },
  title: {
    fontFamily: 'Poppins' /*bold/*/,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    alignItems: 'center',
    marginBottom: SIZES.Large,
  },
  wrapper: {
    marginBottom: 10,
  },
 
  inputWrapper: {
    borderColor: COLORS.black,
    backgroundColor: COLORS.lightWhite,
    borderWidth: 1,
    height: 45,
    borderRadius: 12,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  passwordWrapper: {
    borderColor: COLORS.black,
    backgroundColor: COLORS.lightWhite,
    borderWidth: 1,
    height: 45,
    borderRadius: 12,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  eyeIcon: {
    zIndex: 999
  },
  iconStyle: {
    marginRight: 10,
  },
  
  label: {
    fontWeight: 'bold',
    fontSize: SIZES.small,
   
    color: COLORS.black,
  },
  cover: {
    height: SIZES.height / 2.4,
    width: SIZES.width - 60,
    resizeMode: 'contain',
    marginBottom: SIZES.Large,
  },
  title: {
    fontFamily: 'Poppins' /*bold/*/,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    alignItems: 'center',
    marginBottom: SIZES.Large,
  },
  wrapper: {
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: SIZES.small,
    marginBottom: 5,
    marginEnd: 5,
    color: COLORS.black,
  },
  inputWrapper: {
    borderColor: COLORS.black,
    backgroundColor: COLORS.lightWhite,
    borderWidth: 1,
    height: 45,
    borderRadius: 12,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  passwordWrapper: {
    borderColor: COLORS.black,
    backgroundColor: COLORS.lightWhite,
    borderWidth: 1,
    height: 45,
    borderRadius: 12,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  eyeIcon: {
    zIndex: 999
  },
  iconStyle: {
    marginRight: 10,
  },
  });
  export default UserDetails; 