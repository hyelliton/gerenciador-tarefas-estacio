import React, {useRef, useCallback, useMemo} from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

function Desliza(){
    

    const bottomSheetModalRef = useRef(null);

    const snapPoints = useMemo(() => [50, '70%'], []);

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
      }, []);
      /*const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
      }, []);*/
  
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
        <BottomSheetModalProvider>
            <View style={styles.container}>
                <Button
                    onPress={handlePresentModalPress}
                    title="/\"
                    color="black"
                    flexDirection="row"
                    
                />
                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={1}
                    snapPoints={snapPoints}
                    
                    /*onChange={handleSheetChanges}*/
                  >
                    <View style={styles.contentContainer}>
                        <Text> oi </Text>
                    </View>  
                </BottomSheetModal>
            </View>    
        </BottomSheetModalProvider>
    );
  };
const styles = StyleSheet.create({
    container: {
      flex: 1,  
      padding: 150,
      justifyContent: 'center'
    },

    contentContainer: {
      flex: 1,
      alignItems: 'center',
      padding: 100,
    },
});
  
  export default gestureHandlerRootHOC(Desliza)