import React from "react"
import {SafeAreaView, TextInput, StyleSheet, Image, Text, View, TouchableOpacity} from "react-native"
import { useNavigation } from "@react-navigation/native"
import firebase from "../../Config/firebase";



export default function Cadastro() {
  const navigation = useNavigation();
  

  return (
    <SafeAreaView style={styles.Cadastro}>
      <Image
        style={styles.Logotipo}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/31ag8rfohun-75%3A81?alt=media&token=9197ebd6-c6dd-4173-897a-38749e128a3b",
        }}
      />
      <View style={styles.Nome}>
        <TextInput
         style={styles.PlaceholderInput} 
          placeholder="Nome">
         </TextInput>
      </View>

      <View style={styles.Email}>
        <TextInput
         style={styles.PlaceholderInput} 
          placeholder="Email">
         </TextInput>
      </View>

      <View style={styles.Senha}>
        <TextInput
         style={styles.PlaceholderInput} 
          placeholder="Senha">
         </TextInput>
      </View>

      <View style={styles.ConfirmarSenha}>
        <TextInput
         style={styles.PlaceholderInput}
         placeholder="Confirmar Senha">
         </TextInput>
      </View>
      <View style={styles.Cadastrar}>
        <Text style={styles.ButtonEntrar}>Entrar</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Cadastro: {
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
  Nome: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
    top: 320,
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
  Email: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
    top: 385,
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
    top: 450,
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
  ConfirmarSenha: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
    top: 515,
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

  Cadastrar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 585,
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
})
