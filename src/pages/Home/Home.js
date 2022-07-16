import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"
import HomeSvg from './../../assets/Home.svg'

export default function Home() {
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
          <Text style={styles.TextBemVindo}>Bem vindo(a), Usuário!</Text>
          <Image
            style={styles.Menu}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/rdtago5agnq-75%3A105?alt=media&token=132120cc-b1c0-4459-823d-45cb613e5c2b",
            }}
          />
        <View style={styles.ImgHome}>
            <HomeSvg width={370} height={370}/>
        </View>

          <Text style={styles.TituloHome}>PEOPLE COUNTER</Text>
        </View>
        <Text style={styles.rodape}>
          Todos os direitos reservados a sool queijo 2022
        </Text>
      </View>
      <View style={styles.CardDescript}>
        <Text style={styles.description}>
          O people Counter é um app que irá realizar contagens de pessoas no seu
          evento através de um sensor ultrassônico auxiliando na estátística de
          permanência ou evasão de um determinado evento cadastrado.
        </Text>
      </View>
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
    marginBottom: 130,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    backgroundColor: "rgba(0,166,166,1)",
    width: 428,
    height: 600,
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
  Menu: {
    position: "absolute",
    top: 20,
    left: 340,
    width: 50,
    height: 50,
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

  CardDescript: {
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
    shadowColor: "rgba(0,0,0,0.25)",
    elevation: 0,
    shadowOffset: { width: 0, height: 4 },
    width: 360,
    height: 152,
  },
  description: {
    fontSize: 18,
    fontWeight: "700",
    color: "rgba(67,66,66,1)",
    width: 350,
    height: 150,
    top: 25,
    left: 5,
  },
})
