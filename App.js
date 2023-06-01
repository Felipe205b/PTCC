import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import C1 from './components/comp1';
export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.txt1}>Crie sua conta</Text>
    </View>
);

};//fechamento do class App

  const estilos= StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#f2f2f2',
    },

    txt1:{
      color: '#563595',
      fontSize: 32,
      fontFamily: 'GothicA1-Black',
    }
  });
