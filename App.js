import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Inicio from './telas/inicio'

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#9FB9FC', '#9FB9FC', '#9FB9FC']}
        style={styles.background}
      />

      <Inicio/>         
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 852,
  },
});
