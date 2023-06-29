/*import React from "react"
import {View, Text, TouchableOpacity} from "react-native"

const HomeMapScreen = ({navigation}) => {
    return(
        <View>
            <TouchableOpacity style={{margin:120}}
                    onPress={()=> navigation.navigate("UserScreen")}>
                        <Text>Cadastrar</Text>
                    </TouchableOpacity>
        </View>
    )
}

export default HomeMapScreen;*/

import React, { useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Button,

} from 'react-native';
import estilos from "./style"
const Img = "../../../assets/mapa.jpeg"
/*função do drawer*/

const ImgBolt ="../../..//assets/Icons/IconBolt.png"
export default function Stein({navigation}){
  return(
      <View style={estilos.superior}>

<View style={estilos.fundo}>
<ImageBackground 
  source={require(Img)} resizeMode='repeat' style={estilos.background}
  />
 <View style={{ height: 100, width: 100, resizeMode:'contain', position:  'absolute', top:'70%', left:'70%' }}>
  <TouchableOpacity>
  <Image style={{ height: 100, width: 100, resizeMode:'contain' ,}} source={require('../../../assets/Icons/IconBolt.png')}/>
 </TouchableOpacity>
  </View>
<View style={estilos.partesuperior}>
</View>
</View><View style={estilos.inferior}>
<TouchableOpacity>
<Image source={require('../../../assets/Icons/user.png')} style={{resizeMode:'contain',
height:'92%', width:'92%',position:'relative',right:'36%',top:'10%'}}/>
</TouchableOpacity>
<TouchableOpacity
onPress={()=> navigation.navigate("UserScreen")}
>

<Image source={require('../../../assets/Icons/lupa.png')} style={{resizeMode:'contain',
height:'92%', width:'92%',position:'relative',left:'40%',bottom:'90%'}}/>
</TouchableOpacity>

</View>
</View>
)}