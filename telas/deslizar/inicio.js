import React from "react";
import {View, Image, StyleSheet, Text} from "react-native";
import styles from './style'

export default function Inicio(){
    return(
        <View>
            <View style={styles.boxInicio}>
                <Image source={require('../../Imagens/estacioAzul.png' )} style={styles.imgLogo} ></Image>
            </View>
            <View>
                <Text style={styles.textTitulo_1}>Deslize</Text>
                <Text style={styles.textTitulo_2}>e agende seu mundo com a ESTACIO!</Text>
            </View>
            

        </View>
    );
}