import React from "react";
import {View, Image, StyleSheet, Text} from "react-native";

export default function Inicio(){
    return(
        <View>
            <View>
                <Image source={require('../Imagens/estacioAzul.png' )} ></Image>
            </View>
            <View>
                <Text >Deslize</Text>
                <Text >e agende seu mundo com a ESTACIO!.</Text>
            </View>
            

        </View>
    );
}
const estilos = StyleSheet.create({
    item_login:{
        textAlign: 'center',
        margin:'15px',
        width: '90%',
        height:'80%',
        borderRadius: '10px'
    },

    logo:{
        width: '100px',
        height: '80px',
        alignSelf: 'center',
        marginTop: '140px',
    },
    titulo1:{
        margin: '2%',
        width: '24%',
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: '20px',
        marginTop: '20%',
        backgroundColor: '',
    },

    titulo2:{
        marginLeft: '26%',
        marginTop: '-11%',
        width: '65%',
        color: ['black'],
        fontSize: '20px',
        fontBorder: 'bold',
        backgroundColor: '',
    },
});