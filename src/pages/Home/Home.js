import React from "react"
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";
import HomeSvg from './../../assets/Home.svg'
import firebase from "firebase";

export default function Home() {
  const navigation = useNavigation();

const Logout = () => {
  firebase.auth().signOut().then(() => {
    navigation.navigate("Welcome")
  }).catch((error) => {
  });
}

  return (
    <View style={styles.Home}>
      <View style={styles.Index}>
        <View style={styles.SubIndex}>
          <Image
            style={styles.Logotipo}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/rdtago5agnq-75%3A108?alt=media&token=d7fb2260-54cf-48d0-a3d8-744b60ed3ca2",
            }}
          />
          <Text style={styles.TextBemVindo}>Bem vindo(a)</Text>

          <TouchableOpacity style={styles.StyleLogout} onPress={Logout}>
          <View style={styles.border}>
            <Text style={styles.textlogout}>Logout</Text>
          </View>
          </TouchableOpacity>
        <View style={styles.ImgHome}>
            <HomeSvg width={370} height={370}/>
        </View>

          <Text style={styles.TituloHome}>PEOPLE COUNTER</Text>
        </View>
        <Text style={styles.rodape}>
          Todos os direitos reservados a sool queijo 2022
        </Text>
      </View>
      <TouchableOpacity style={styles.Buttoms} onPress={ () => navigation.navigate('CadEvent')}>
            <Text style={styles.textbuttomcadastrar}>Cadastrar Evento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.ButtomEvent} onPress={ () => navigation.navigate('EventCad')}>
            <Text style={styles.textbuttomevent}>Eventos Cadastrados</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  Home: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    paddingTop: 0,
    paddingBottom: 13,
    backgroundColor: "rgba(234,234,234,1)",
    height: 926,
  },
  Index: {
    width: 400,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  SubIndex: {
    position: "relative",
    marginBottom: 30,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    backgroundColor: "rgba(0,166,166,1)",
    width: 428,
    height: 700,
  },
  Logotipo: {
    position: "absolute",
    top: 20,
    left: 31,
    width: 62,
    height: 50,
  },
ImgHome: {
    position: "absolute",
    top: 130,
    left: 35,
},
  TextBemVindo: {
    position: "absolute",
    top: 75,
    left: 31,
    fontSize: 25,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 1)",
    width: 180,
    height: 60,
  },
  StyleLogout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    left: 125,
    top: 28,
  },
  border: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 7.5,
    paddingRight: 7.5,
    marginBottom: 480,
    borderRadius: 5,
    borderWidth: 2.5,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 1)",
    height: 40,
  },
  textlogout: {
    fontSize: 20,
    fontFamily: "Poppins, sans-serif",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },
  TituloHome: {
    position: "absolute",
    top: 480,
    left: 105,
    fontSize: 25,
    fontWeight: "800",
    color: "rgba(255, 255, 255, 1)",
    width: 219,
    height: 38,
  },

  rodape: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(157,157,157,1)",
  },

  Buttoms: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 530,
    left: 15,
    paddingTop: 9,
    paddingBottom: 40,
    paddingLeft: 9,
    paddingRight: 9,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 1)",
   
    width: 360,
    height: 15,
  },
  textbuttomcadastrar: {
    fontSize: 18,
    fontWeight: "700",
    color: "rgba(67,66,66,1)",
    width: 350,
    height: 150,
    left: 100,
    top: 76,
  },

  ButtomEvent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 600,
    left: 15,
    paddingTop: 9,
    paddingBottom: 40,
    paddingLeft: 9,
    paddingRight: 9,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 1)",
   
    width: 360,
    height: 15,
  },
  textbuttomevent: {
    fontSize: 18,
    fontWeight: "700",
    color: "rgba(67,66,66,1)",
    width: 350,
    height: 150,
    left: 85,
    top: 78,
  },
})
