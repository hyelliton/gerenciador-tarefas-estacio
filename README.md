"# gerenciador-tarefas-estacio"  
Bão para subir a tela
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
    <Text style={stylesLogin.titulo3}>FAÇA SEU LOGIN</Text>
    <Text style={stylesLogin.textMatricula}>MATRÍCULA:</Text>
    <BottomSheetTextInput value="Awesome 🎉"
    style={styles.textInput} />
    </View>
</BottomSheetModal>