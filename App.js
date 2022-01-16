
/*
* File: App.js
* Author: Jakab ATtila 
* Copyright: 2022,Jakab Attila
* Group: SzoftIIN
* Date: 2022-01-06
* Github: https://github.com/Attila2001
* Licenc: GNU GPL
*/
import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

console.log("A program kiszámolja egy pentagon területét: Jakab Attila, 2022.01.14.");

export default function App() {

  const [side, setSide] = useState(0);
  const [area, setArea] = useState(0);

  function calcArea(){
    let result = (5*Math.pow(side, 2)*Math.tan(54*Math.PI/180))/4;
    setArea(parseFloat(result).toFixed(2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pentagon</Text>
      
      <View style={styles.start}>

        <Text style={styles.inputTitle}>A oldal</Text>
        <TextInput placeholder="A oldal" 
        style={styles.input} onChangeText={ side => setSide(side) } />

        <Button title="szamit" 
        color="red" onPress={calcArea}/>

      </View>
      <Text style={[styles.inputTitle,{fontSize: 40}]}>Eredmeny: {area}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfe3ee',
    alignItems: 'center',
  },

  start: {
    alignItems: 'flex-start',
    backgroundColor: 'rgb(68, 172, 195)',
    paddingHorizontal: 50,
    paddingBottom: 30,
    width: '100%',
  },
  input: {
    borderWidth: 2,
    borderColor: '#3b5998',
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  title: {
    color: "#f75116",
    margin: 50,
    fontSize: 90,
    fontWeight: "bold"
  },
  inputTitle: {
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  }
});
