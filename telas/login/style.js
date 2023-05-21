import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    
  },

  fundo: {
    flex: 1
  },

  textMatricula:{
    
    marginLeft: '-220px',
    fontWeight: 'bold'
  },
  
  textSenha:{
    
    marginTop: 2,
    marginLeft: '-250px',
    fontWeight: 'bold'
  },

  textCampo:{
    
    flexDirection: 'row',
    marginTop: '2%',
    backgroundColor: '#F4F3F3',
    width: '90%',
    color: '#a1a1a1',
    margin: '4%',
    height: '30%',
    padding: '8px',
    borderRadius: '10px'
  },

  item_login:{
    
    marginTop: '10%',
    height:'40%'
  },

  item_senha:{
    marginTop: '-15%',
    height:'40%'
  },

  esqueci_senha:{

    marginHorizontal: '10%',
    marginTop: '-13%',
    height: '2%',
    fontFamily: 'Poppins',
    fontSize: '12px',
    lineHeight: '20px',
    alignItems: 'right',
    justifyContent: 'center',
    textAlign: 'right',
    color: 'black'

  },
  
  naoTemConta:{

    width: '96%',
    marginTop: '5%',
    height: '3%',
    fontFamily: 'Poppins',
    fontSize: '12px',
    color: 'black'

  },
  
  cadastre:{

    marginHorizontal: '62%',
    marginTop: '-3%',
    width: '30%',
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontWeight: 'bold',
    lineHeight: '140%',
    alignItems: 'right',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#B0C4DE',
    color: 'black'

  },
  
  botao:{
    position: 'absolute',
    justifyContent: 'center',
    height: '8%',
    borderRadius: '20px',
    right: '40%',
    bottom: '-20%'
    
  },

  bottonCadastre: {

  },
     
  titulo1:{
    margin: '4%',
    width: '20%',
    height: '3%',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '',
    fontSize: '170%',
    lineHeight: '40px',
    color: 'black'
  },

  titulo2:{
    margin: '3%',
    width: '70%',
    height: '17%',
    fontFamily: 'Poppins',
    textAlign: 'justify',
    fontStyle: 'normal',
    alignItems: 'center',
    fontSize: '170%',
    color: 'black'
  },

  titulo3:{
    height: '80px',
    marginTop: 30,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black'
  },
  
  logo:{
    width: '100%',
    resizeMode: 'contain',
    height: '80px',
    alignSelf: 'center',
    marginTop: '20px'
  }
});
export default styles