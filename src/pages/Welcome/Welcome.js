import React from "react"
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function Welcome() {
const navigation = useNavigation();

  return (
    <View style={styles.Welcome}>
      <View style={styles.Group917}>
        <Image
          style={styles.Logotipo}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/nu6yxatp2m-75%3A74?alt=media&token=33da3fdf-5561-441f-80e1-6569c84b68e4",
          }}
        />
        <Text style={styles.BoasVindas}>Let's Count Together</Text>
        <TouchableOpacity style={styles.ButtonDeLogin} onPress={ () => navigation.navigate('Login')}>
          <Text style={styles.Login}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ButtonCadastro} onPress={ () => navigation.navigate('Cadastro')}>
          <Text style={styles.Cadastro}>Cadastro</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Welcome: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 203,
    paddingBottom: 166,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 50,
    backgroundColor: "rgba(234,234,234,1)",
    width: 428,
    height: 926,
  },
  Group917: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Logotipo: {
    width: 295,
    height: 226,
    marginBottom: 10,
  },

  BoasVindas: {
    display: "flex",
    flexDirection: "row",
    fontSize: 30,
    fontWeight: "800",
  },

  ButtonDeLogin: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 8,
    marginTop: 35,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    marginBottom: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(0,166,166,1)",
    width: 320,
    height: 48,
  },
  Login: {
    fontSize: 18,
    fontWeight: "800",
    color: "rgba(67,66,66,1)",
  },

  ButtonCadastro: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 9,
    paddingRight: 9,
    borderRadius: 15,
    backgroundColor: "rgba(0,166,166,1)",
    width: 320,
    height: 48,
  },
  Cadastro: {
    fontSize: 18,
    fontWeight: "800",
    color: "black",
  },
})
