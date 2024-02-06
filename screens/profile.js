import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  StyleProp,
  ViewStyle,
  Touchable,
  TouchableOpacity, 
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {COLORS, SIZES} from '../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const getUserDetails = async () => {
    try {
      
      const userToken = await AsyncStorage.getItem('userToken');
  
      if (userToken) {
      
        const response = await API.requestGET_UserDetails('/users', {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
  
        // Kiểm tra nếu có thông tin người dùng, thì cập nhật state
        if (response && response.data) {
          setUsername(response.data.username);
          setUserEmail(response.data.email);
        }
      }
    } catch (error) {
      console.log('Error getting user details:', error);
    }
  }; 

  const handleLogout = async () => {
    
    await AsyncStorage.removeItem('userToken');
    navigation.navigate('Login');
  };
  
  return (
   <View style={styles.container}>
      
    <StatusBar backgroundColor={COLORS.gray}/>

     <View style={{width:'100%'}}>
      <Image
       source={require('./space.jpg')} 
       style={styles.coverImage }
       resizeMode='cover'
     />
   </View>
   
      <View style={styles.profileContainer}>
      <Image
        source={require( './profile.jpeg' )} 
        style={styles.avatar }
      />
        
        <Text style={styles.name}>{username}</Text>
      <View style={styles.loginBtn}>
     
          <Text style={styles.menuText}>{userEmail}</Text>
        </View>
        </View>
        


        <TouchableOpacity onPress={()=>{}}>
        <View style={styles.menuItem}>
        
          <Text style={styles.menuText}>Favorites</Text>
        </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => navigation.navigate('orderManagement')}>
  <View style={styles.menuItem}>
    <Text style={styles.menuText}>Orders</Text>
  </View>
</TouchableOpacity>



        <TouchableOpacity onPress={()=>navigation.navigate('OrderCardView')}>
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Cart</Text>
        </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=>{}}>
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Clear Cache</Text>
        </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=>{}}>
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Delete Account</Text>
        </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={handleLogout}>
  <View style={styles.menuItem}>
    <Text style={styles.menuText}>Log out</Text>
  </View>
</TouchableOpacity>

         </View>
   
  );
};
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

export default ProfileScreen;