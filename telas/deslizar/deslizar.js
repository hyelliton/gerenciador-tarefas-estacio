import React, {useRef, useCallback, useMemo} from "react";
import {TouchableOpacity, View, Text, StyleSheet, Button, TextInput, KeyboardAvoidingView, ScrollView} from "react-native";
import BottomSheet,{ BottomSheetModal, BottomSheetModalProvider, BottomSheetTextInput } from '@gorhom/bottom-sheet';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import stylesLogin from './style';
import {Ionicons} from '@expo/vector-icons';

function Desliza(){

  const bottomSheetModalRef = useRef(null);

  const snapPoints = useMemo(() => [100, 500, 2000], []);

  const handlePresentModalPress = useCallback(() => {
      bottomSheetModalRef.current?.present();
    }, []);
    const handleSheetChanges = useCallback((index: number) => {
      console.log('handleSheetChanges', index);
    }, []);

  const renderFooter = useCallback(
    props => (
      <BottomSheetFooter {...props} bottomInset={24} >
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Footer</Text>
        </View>
      </BottomSheetFooter>
    ),
    []
  );

  return(
      
    <View style={styles.container}>
      <BottomSheet
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
         
        > 
        <KeyboardAvoidingView 
          keyboardVerticalOffset={-500}
          behavior="padding"
          style={{flex: 1}}
          >
          
          <ScrollView style={{width: '100%'}}>
            <Text style={stylesLogin.titulo3}>FAÇA SEU LOGIN</Text >           
            <Text style={stylesLogin.textMatricula}>MATRÍCULA:</Text>
            <TextInput style={stylesLogin.textInputMatricula} 
            placeholder= 'Digite sua matrícula' ></TextInput>
            
            {/* <BottomSheetTextInput value="Awesome 🎉"
            style={stylesLogin.textInput} /> */}
            
            <Text style={stylesLogin.textSenha}>SENHA:</Text>
            <TextInput style={stylesLogin.textInputSenha} 
            placeholder= 'Digite sua senha' ></TextInput>

            {/* <BottomSheetTextInput value="Awesome 🎉"
            style={stylesLogin.textInput} /> */}

            <Text style={stylesLogin.esqueciSenha}>Esqueci a senha</Text>

            <View style={{ flexDirection: 'row'}}>
              <Text style={stylesLogin.naoTemConta}>Não tenho conta</Text>
              <Text style={stylesLogin.cadastre}>CADASTRE-SE</Text>
            </View>

            <Button />
            
            
            
          </ScrollView>   
        </KeyboardAvoidingView >
      </BottomSheet>
    </View>    
      
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      color: 'black',
    },

    contentContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    
});
  
  export default gestureHandlerRootHOC(Desliza)