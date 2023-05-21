import {StyleSheet} from "react-native";

const stylesLogin = StyleSheet.create({
	boxInicio:{
		
		justifyContent:"center",
		padding: 10,
	},

	imgLogo:{
    top: 250,
    height: 75,
    width: 300,
    alignItems: "center",
  },

  textTitulo_1:{
    top: 280,
    alignItems: 'center',
    fontSize: 30,
    color: "#000000",
  },
  textTitulo_2:{
    top: 282,
    alignItems: 'baseline',
    fontSize: 20,
    color: "#FFFFFF",
  },

  janela:{
    flex: 1,
  },
  
  titulo3:{
    top: 30,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 20,
    justifyContent: 'center',
    color:'black',
    marginLeft: '30%',
  },

  textMatricula:{
    marginLeft: '20%',
    top: 65,
    fontStyle: 'normal',
    fontSize: 15,
    color:'black',
  },

  textInputMatricula: {
    marginTop: '18%',
    marginLeft: '20%',
    backgroundColor: '#F4F3F3',
    width: '50%',
    height: '18%',
    color: 'black',
    padding: 10,
    borderRadius: 10,
  },
 
  textSenha:{
    marginLeft: '20%',
    top: 10,
    fontStyle: 'normal',
    fontSize: 15,
    color:'black',
  },

  textInputSenha: {
    marginTop: '3%',
    marginLeft: '20%',
    backgroundColor: '#F4F3F3',
    width: '50%',
    height: '18%',
    color: 'black',
    padding: 10,
    borderRadius: 10,
  },

  esqueciSenha:{
    marginLeft: '50%',
    top: 10,
    fontStyle: 'normal',
    fontSize: 15,
    color:'black',
  },

  naoTemConta:{
    marginLeft: '34%',
    marginTop: '5%',
    fontSize: 15,
    color: 'black'
  },

  cadastre:{
    marginLeft: '-10%',
    marginTop: '5%',
    fontSize: 15,
    color: 'black'
  },

  botao:{
    position: 'absolute',
    justifyContent: 'center',
    height: '8%',
    borderRadius: '20',
    right: '40%',
    bottom: '-20%'
  },

  textInput: {
    alignSelf: "stretch",
    marginHorizontal: 12,
    marginBottom: 12,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "grey",
    color: "white",
    textAlign: "center",
  },
  
  	
});

export default stylesLogin