import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SIZES } from '../constants';

const  orderdetail= () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.headerText}>Order detail </Text>
    </View>

    <View style={styles.menuItem}>
      <Text style={styles.address}>Địa chỉ nhận hàng</Text>
      <Text style={styles.userInfor}>Tên người gửi </Text>
        <Text >Số điện thoại</Text>
        <Text >Địa chỉ</Text>
        </View>
<View>
  <View style={styles.menuItem}>
    <Text style={styles.address}> Thông tin sản phẩm</Text>
    
    <Text>Ghế sofa cao cấp X1</Text>
    <Text>Bàn làm việc X2</Text>
    </View>
</View>

<View>
    <Text> Tổng thanh toán: </Text>
    <Text>Trạng thái: đã hoàn thành</Text>
</View>

            </ScrollView>
        
    )
}
const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor:COLORS.lightWhite
    //padding: 20,
    
  },
  container1:{
    flex: 1,
    backgroundColor: COLORS.offwhite, 
    height: SIZES.height/6,

  },
  container2:{
    
    backgroundColor:COLORS.lightWhite,
    borderWidth:1,
    height:65,
    borderRadius:12,
    flexDirection:'row',
    paddingHorizontal:15,
    alignItems:"center",
    

  },
  textContainer:{
    flex:1,
    marginHorizontal:SIZES.medium
  },
 
  header: {
     justifyContent: 'center', 
    alignItems: 'center',
    marginBottom: 20,
    marginTop:20
  },
  headerText: {
    fontWeight: 'bold',
    fontFamily:"bold",
    fontSize:SIZES.xLarge,
    color:COLORS.primary,
    marginBottom:SIZES.xLarge
  },

  
  infoBottom: {
    
    flexDirection: 'row',
    justifyContent: 'space-between',
  alignItems: 'center', 
  position: 'relative',
  height: 50,
  width: '80%', 
  marginHorizontal: 'auto',
  
  },


 
inputWrapper:{
 backgroundColor:COLORS.primary,
  borderWidth:1,
  height:55,
  borderRadius:12,
  flexDirection:'row',
  paddingHorizontal:15,
  alignItems:"center",
  
 
},
  coverImage: {
      
    width: '100%',
    height: SIZES.height/3,
    resizeMode:"cover"
  },
  checkoutButton: {
    backgroundColor: COLORS.primary,
    padding:1.5,
  borderWidth:0.4,
  borderRadius:SIZES.medium,
    marginHorizontal:'auto'
  },

  checkoutButtonText: {
    color: COLORS.white,
    fontFamily: 'bold',
    marginHorizontal:20,
    fontWeight:'600',
    fontSize:13,
    lineHeight:26,
  },


address:{
  lineHeight:26,
  color:COLORS.primary,
  marginVertical:5,
  fontSize:SIZES.large,
  fontFamily: 'bold', 
  fontWeight: 'bold',
},
userInfor:{
lineHeight:26,
  color:COLORS.primary,
  marginVertical:5,
  fontSize:SIZES.medium,
  fontFamily: 'bold', 
  fontWeight: 'bold',
},
menuItem:{
borderBottomWidth:1,
paddingHorizontal:25,
borderColor:COLORS.gray2,
paddingBottom:20
},

});
export default orderdetail; 