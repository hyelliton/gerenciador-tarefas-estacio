import React from "react";
import {View, Image, Text} from "react-native";
import styles from './style'

export default function Inicio(){
  
  return(
    <View>
      <View style={styles.boxInicio}>
        <Image source={require('../../Imagens/estacioAzul.png' )} style={styles.imgLogo} ></Image>
        <Text style={styles.textTitulo_1}>Deslize</Text>
        <Text style={styles.textTitulo_2}>e agende seu mundo com a ESTACIO!</Text>
      </View>
      
    </View>
  );
}