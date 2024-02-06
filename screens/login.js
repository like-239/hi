import { Image,Text,View,ScrollView,TouchableOpacity,StyleSheet, Pressable} from "react-native";
import React,{useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from '../constants';
import { TextInput } from "react-native-gesture-handler";
import API from '../service/GlobalAPI';
import getToken from '../service/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const Login =()=>{
    const navigation = useNavigation();
    const [password, setPassword] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handlePasswordVisibility = () => {
      if (rightIcon === 'eye') {
        setRightIcon('eye-off');
        setPasswordVisibility(!passwordVisibility);
      } else if (rightIcon === 'eye-off') {
        setRightIcon('eye');
        setPasswordVisibility(!passwordVisibility);
      }
    };
  
    const handleLogin = async () => {
      const loginData = {
        username: email,
        password: password
      };
    
      const response = await API.requestPOST_Login('/auth/login', loginData);
    
      if (response && response.token) {
        AsyncStorage.setItem('userToken', response.token);
  
        navigation.navigate('profile');
      } else {
        setMessage('Đăng nhập không thành công');
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
          {/* <Text style={styles.title}>Khám phá thế giới nội thất</Text> */}
          <View>
            <View style={styles.wrapper}>
              <Text style={styles.label}>Email</Text>
              <View style={styles.inputWrapper}>
                <Fontisto
                  name="email"
                  size={20}
                  color={COLORS.gray}
                  style={styles.iconStyle}
                />
                <TextInput
                  placeholder="Enter email"
                  onChangeText={text => setEmail(text)}
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
                    <Feather
                      name={rightIcon}
                      size={25}
                      style={styles.eyeIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <Pressable
              onPress={handleLogin}
              style={{
                backgroundColor: COLORS.primary,
                borderRadius: 6,
                padding: 15,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                Đăng nhập
              </Text>
            </Pressable>

            {message ? <Text style={styles.errorMessage}>{message}</Text> : null}

            <TouchableOpacity
              onPress={() => navigation.navigate('signup')}
              style={{marginTop: 15}}>
              <Text
                style={{
                  textAlign: 'center',
                  color: COLORS.black,
                  fontSize: 16,
                }}>
                Bạn chưa có tài khoản?{' '}
                <Text
                  style={{
                    textAlign: 'center',
                    color: COLORS.primary,
                    fontSize: 16,
                  }}>
                  Đăng ký
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
        alignItems:"center",
        position: "absolute",
        //zIndex:999,
        top: SIZES.large-10
    },
    cover: {
        height:SIZES.height/2.4,
        width:SIZES.width-60,
        resizeMode:"contain",
        marginBottom:SIZES.xxLarge
    },
    title:{
        
        fontSize:SIZES.xLarge,
    color:COLORS.primary,
    fontWeight:'bold',
    alignItems:"center",
    marginBottom:SIZES.large,
    },
    wrapper:{
        marginBottom:20,
        
    },
    label:{
        fontFamily:"regular",
        fontSize:SIZES.xSmall,
        marginBottom:5,
        marginEnd:5,
        textAlign:"right",
        fontWeight:'bold'
    },
    inputWrapper:{
        
        backgroundColor:COLORS.lightWhite,
        borderWidth:1,
        height:55,
        borderRadius:12,
        flexDirection:'row',
        paddingHorizontal:15,
        alignItems:"center",
        fontWeight:'bold'
    },
    buttonStyle:{
        backgroundColor:COLORS.primary,
        borderWidth:1,
        height:45,
        borderRadius:12,
        alignItems:"center",
        justifyContent:'center',
        marginVertical:20
      },
      btnText:{
        color:COLORS.white,
        fontSize:18
      }
})
export default Login;