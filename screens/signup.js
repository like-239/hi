import { Image,Text,View,ScrollView,TouchableOpacity,StyleSheet, Pressable } from "react-native";
import React,{useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Font } from 'expo';
import { COLORS, SIZES } from '../constants';
//import Button from '../MyApp/screens/Button';
import { TextInput } from "react-native-gesture-handler";
import 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import API from '../service/GlobalAPI';
const Signup =()=>{
    const navigation = useNavigation();
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye');
    const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber,setPhoneNumber]=useState('');

  
  const handleSignup = async () => {
    const signupData = {
      username,
      email,
      address: location,
      password,
      firstName: 'DefaultFirstName', 
      lastName: 'DefaultLastName',   
      phoneNumber,        
      roleID: '653a2547a823940702a4b90e', 
      avatar: {
        public_id: 'string',
        url: 'string',
      },
    };

    const response = await API.requestSignup('/users/create',signupData);

    if (response && response.data) {
      console.log('Signup successful:', response.data);
      navigation.navigate('login')
      
    } else {
      console.log('Signup failed');
      
    }
  };

    const handlePasswordVisibility = () => {
      if (rightIcon === 'eye') {
        setRightIcon('eye-off');
        setPasswordVisibility(!passwordVisibility);
      } else if (rightIcon === 'eye-off') {
        setRightIcon('eye');
        setPasswordVisibility(!passwordVisibility);
      }
    };
    

    return (
       
        <ScrollView>
        <SafeAreaView style={{marginHorizontal: 20}}>
          <View>
            <Image
              source={require('./bk.png')}
              style={styles.cover}
            />
            <View style={{marginTop: 10}}>
              <View style={styles.wrapper}>
                <Text style={styles.label}>Username</Text>
                <View style={styles.inputWrapper}>
                  <MaterialCommunityIcons
                    name="face-man-profile"
                    size={20}
                    color={COLORS.gray}
                    style={styles.iconStyle}
                  />
                  <TextInput 
                  placeholder="Username"
                  onChangeText={(text) => setUsername(text)}
                  />
                </View>
              </View>
  
              <View style={styles.wrapper}>
                <Text style={styles.label}>Email</Text>
                <View style={styles.inputWrapper}>
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={20}
                    color={COLORS.gray}
                    style={styles.iconStyle}
                  />
                  <TextInput placeholder="Email" 
                  onChangeText={(text) => setEmail(text)}
                  />
                </View>
              </View>

              <View style={styles.wrapper}>
                <Text style={styles.label}>Phone number</Text>
                <View style={styles.inputWrapper}>
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={20}
                    color={COLORS.gray}
                    style={styles.iconStyle}
                  />
                  <TextInput placeholder="Phone number"
                  onChangeText={(text) => setPhoneNumber(text)}
                  />
                </View>
              </View>
  
              <View style={styles.wrapper}>
                <Text style={styles.label}>Location</Text>
                <View style={styles.inputWrapper}>
                  <Ionicons
                    name="location-outline"
                    size={20}
                    color={COLORS.gray}
                    style={styles.iconStyle}
                  />
                  <TextInput placeholder="Location" 
                  onChangeText={(text) => setLocation(text)}
                  />
                </View>
              </View>
  
              <View style={styles.wrapper}>
                <Text style={styles.label}>Password</Text>
                <View style={styles.passwordWrapper}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <MaterialCommunityIcons
                    name="lock"
                    size={20}
                    color={COLORS.gray}
                    style={styles.iconStyle}
                  />
                  <TextInput
                    placeholder="Enter password"
                    secureTextEntry={passwordVisibility}
                    value={password}
                    onChangeText={text => setPassword(text)}
                  />
                  </View>
  
                  <View>
                  <TouchableOpacity onPress={handlePasswordVisibility}>
                    <Feather name={rightIcon} size={25} style={styles.eyeIcon} />
                  </TouchableOpacity>
                  </View>
                </View>
              </View>
  
              <Pressable
                style={{
                  backgroundColor: COLORS.primary,
                  borderRadius: 6,
                  padding: 10,
                  height:40
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  Đăng ký
                </Text>
              </Pressable>
  
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={{marginTop: 1}}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: COLORS.black,
                    fontSize: 16,
                  }}>
                  Đã có tài khoản?{' '}
                  <Text
                    style={{
                      textAlign: 'center',
                      color: COLORS.primary,
                      fontSize: 16,
                    }}>
                    Đăng nhập
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
  
    )
};
const styles = StyleSheet.create({
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
        marginBottom: 8,
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
})
export default Signup;

