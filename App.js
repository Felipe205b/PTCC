import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import C1 from './components/comp1';
export default function App() {
  return (
    <View style={estilos.container}>
      <C1/>
      <C1/>
      <Text style={estilos.txt1}> não</Text>
    </View>
);

};//fechamento do class App

  const estilos= StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#435570',
      alignItems: 'center',
      justifyContent: 'center'
    },

    txt1:{
      color: '#4287f5',
      fontSize: 48,
      
    }
  });
