import React, {useState, useEffect} from "react"
import {TextInput, StyleSheet, Image, Text, View, TouchableOpacity, KeyboardAvoidingView, Alert, ActivityIndicator} from "react-native"
import firebase from "../../Config/firebase"
import { MaterialCommunityIcons } from "@expo/vector-icons"

export default function Login({navigation}) {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errorLogin, setErrorLogin] = useState("");
const loginFirebase = ()=>{
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    let user = userCredential.user;
    navigation.navigate("Home", {idUser: user.uid})
  })
  .catch((error) => {
    setErrorLogin(true)
    let errorCode = error.code;
    let errorMessage = error.message;
  });
}
useEffect(()=>{
}, []);

const redefinirSenha = ()=>{
  firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    Alert.alert("Acesse seu Email", "Um link para refefinir sua senha foi enviado para seu email")
  })
  .catch((error) => {
    Alert.alert("Email não existe", "Não foi possível encontrar seu email em nosso banco de dados")
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}
  return (
    <KeyboardAvoidingView  
    style={styles.Login}
    keyboardVerticalOffset={80} >
      <Image
        style={styles.Logotipo}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/31ag8rfohun-75%3A81?alt=media&token=9197ebd6-c6dd-4173-897a-38749e128a3b",
        }}
      />
      <View style={styles.Usuario}>
        <TextInput
         style={styles.PlaceholderInput} 
          placeholder="Email"
            type="text"
            onChangeText={(text) => setEmail(text)}
            value={email}
         />
      </View>

      <View style={styles.Senha}>
        <TextInput
         style={styles.PlaceholderInput}
         secureTextEntry={true}
         placeholder="Senha"
          onChangeText={(text) => setPassword(text)}
          value={password}
         />
      </View>

{errorLogin === true
?
<View style={styles.ErrorLogin}>
  <MaterialCommunityIcons
  name="alert-circle"
  size={34}
  color="red"/>
  <Text style={styles.TextError}>Usuário ou senha incorretos</Text>
</View>
:
<View/>
}
{ email === "" || password === ""
?
<TouchableOpacity
disabled={true}
style={styles.Entrar}>
  <Text style={styles.ButtonEntrar} testID="entrar">Entrar</Text>
</TouchableOpacity>
:
<TouchableOpacity
style={styles.Entrar}
onPress={loginFirebase}
>
<Text style={styles.ButtonEntrar}>Entrar</Text>
</TouchableOpacity>
}
      <TouchableOpacity>
      <Text style={styles.EsqueceuSenha} onPress={redefinirSenha}>Esqueceu a Senha?</Text>
      </TouchableOpacity>

      <Text style={styles.Cadastrar}>Não tem uma conta?</Text>
      <TouchableOpacity onPress={ () => navigation.navigate('Cadastro')}>
      <Text style={styles.Cadastre}>Cadastre-se</Text>
      </TouchableOpacity>
      
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  Login: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    backgroundColor: "rgba(234,234,234,1)",
    width: 428,
    height: 926,
  },
  Logotipo: {
    position: "absolute",
    top: 100,
    left: 60,
    width: 295,
    height: 200,
  },
  Usuario: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
    top: 365,
    left: 15,
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 9,
    paddingRight: 169,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 366,
    height: 49,
  },
  PlaceholderInput: {
    fontSize: 18,
    fontWeight: "800",
    color: "rgba(67,66,66,1)",
    textAlign: "left",
    justifyContent: "center",
    width: 350,
  },

  Senha: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
    top: 440,
    left: 16,
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 9,
    paddingRight: 169,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 366,
    height: 49,
  },

  Entrar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 516,
    left: 16,
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 9,
    paddingRight: 9,
    borderRadius: 10,
    backgroundColor: "rgba(0,166,166,1)",
    width: 365,
    height: 45,
  },
  ButtonEntrar: {
    fontSize: 20,
    fontWeight: "800",
    color: "rgba(255, 255, 255, 1)",
  },

  EsqueceuSenha: {
    position: "absolute",
    top: 571,
    left: 25,
    fontSize: 14,
    fontWeight: "600",
    color: "rgba(97,137,233,1)",
    width: 138,
    height: 21,
  },
ErrorLogin: {
flexDirection: "row",
position: "absolute",
top: 310,
left: 30,
},

TextError: {
  fontSize: 24,
  fontWeight: "700",
  color:"red"
},

  Cadastrar: {
  position: "absolute",
  top: 590,
  left: 25,
  fontSize: 14,
  fontWeight: "600",
  color: "black",
  width: 138,
  height: 21,
  },
  Cadastre: {
    position: "absolute",
    top: 590,
    left: 165,
    fontSize: 14,
    fontWeight: "600",
    color: "rgba(97,137,233,1)"
  }
})
