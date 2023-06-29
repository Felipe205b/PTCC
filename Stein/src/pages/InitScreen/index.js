import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from "./style";



export default function InitScreen({navigation}) {
  return (
    <View style={styles.conteiner}>
      <View style={styles.backgroundLogo}>
        <Image source={require("../../../assets/Icons/logoStein.png")} style={styles.logoStein}/>
      </View>
      <Text style={styles.textAbove}> It's alive! </Text>
      <TouchableOpacity style={styles.buttons} 
        onPress={()=> navigation.navigate("LoginScreen")}
        
      >
          <Text style={styles.textButtons}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity>
       <Text style={styles.textSingle1}>Ainda não possui conta?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons}
      onPress={()=> navigation.navigate("SinginScreen")}
      >
        <Text style={styles.textButtons}>Inscreva-se</Text>
      </TouchableOpacity>

    </View>
  );
};


