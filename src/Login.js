import React from 'react';
import {Dimensions, Image, SafeAreaView, StyleSheet, View, Text } from 'react-native';
import {Input, Button} from './components';

function Main(){

  return (
  <SafeAreaView style = {styles.container}>
  <View style = {styles.container}>
  <View style={styles.textContainer}>
          <Text style={styles.text}>MySongs</Text>
        </View>
    <Image style = {styles.image}
    source={require('./icon/image.png')}
    resizeMode = "center" />
    
    <Input 
     Inputtype = "email"
    placeholder="E-posta adresinizi giriniz..."
    
    />
    <Input 
     Inputtype = "Password"
    placeholder="Şifrenizi giriniz..."
    
    />
    
    <Button 
    title="Giriş Yap" 
    variant="log_in"
    />
    <Button
    title="Kayıt Ol"
    variant="sign"
    />

   
  </View>

</SafeAreaView>
);
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#c8e6c9'
  },

  textContainer:{
    margin:10,
    paddingTop:15,
   
    
},
text:{
  
    justifyContent:'center',
    fontSize:30,
    color:'black',
    fontWeight:'bold',
    alignItems:'center'
    

},

  image: {
    width: Dimensions.get('window').width * 0.3 ,
    height: Dimensions.get('window').height * 0.5,
    left:150,
  },



})

export default Main;