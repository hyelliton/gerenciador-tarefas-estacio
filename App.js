import { StyleSheet, Text, View } from 'react-native';
import Inicio from './telas/inicio.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Inicio/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
