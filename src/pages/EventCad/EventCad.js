import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function EventoCad() {
  return (
    <View style={styles.EventoCad}>
        <View style={styles.Group925}>
        <Image
          style={styles.Logotipo}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ryei6pn9ndf-75%3A147?alt=media&token=f8cadfdb-0b46-4ca3-8708-34d904df26ae",
          }}
        />
        <Text style={styles.TituloEventoCad}>Eventos Cadastrados</Text>
      </View>
      <View style={styles.HeaderPrincipal}>
        <View style={styles.Cadastrados}>
          <Text style={styles.TituloEventoRegistrado}>Juri Simulado</Text>
          <Image
            style={styles.IconEditar}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ryei6pn9ndf-I75%3A151%3B4%3A119?alt=media&token=80cd863f-a40d-4b62-826b-29906c46afd8",
            }}
          />
          <Image
            style={styles.IconLixeira}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ryei6pn9ndf-I75%3A151%3B4%3A123?alt=media&token=8a82433c-d3e7-45b4-a57b-974b98914b79",
            }}
          />
        </View>
        <View style={styles.LinhaInput} />

        <View style={styles.Cadastrados}>
          <Text style={styles.TituloEventoRegistrado}>Juri Simulado</Text>
          <Image
            style={styles.IconEditar}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ryei6pn9ndf-I75%3A151%3B4%3A119?alt=media&token=80cd863f-a40d-4b62-826b-29906c46afd8",
            }}
          />
          <Image
            style={styles.IconLixeira}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ryei6pn9ndf-I75%3A151%3B4%3A123?alt=media&token=8a82433c-d3e7-45b4-a57b-974b98914b79",
            }}
          />
        </View>
        <View style={styles.LinhaInput} />
        <View style={styles.Cadastrados}>
          <Text style={styles.TituloEventoRegistrado}>Juri Simulado</Text>
          <Image
            style={styles.IconEditar}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ryei6pn9ndf-I75%3A151%3B4%3A119?alt=media&token=80cd863f-a40d-4b62-826b-29906c46afd8",
            }}
          />
          <Image
            style={styles.IconLixeira}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ryei6pn9ndf-I75%3A151%3B4%3A123?alt=media&token=8a82433c-d3e7-45b4-a57b-974b98914b79",
            }}
          />
        </View>
        <View style={styles.LinhaInput} />
        <View style={styles.Cadastrados}>
          <Text style={styles.TituloEventoRegistrado}>Juri Simulado</Text>
          <Image
            style={styles.IconEditar}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ryei6pn9ndf-I75%3A151%3B4%3A119?alt=media&token=80cd863f-a40d-4b62-826b-29906c46afd8",
            }}
          />
          <Image
            style={styles.IconLixeira}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ryei6pn9ndf-I75%3A151%3B4%3A123?alt=media&token=8a82433c-d3e7-45b4-a57b-974b98914b79",
            }}
          />
        </View>
        <View style={styles.LinhaInput} />

        <View style={styles.Cadastrados}>
          <Text style={styles.TituloEventoRegistrado}>Juri Simulado</Text>
          <Image
            style={styles.IconEditar}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ryei6pn9ndf-I75%3A151%3B4%3A119?alt=media&token=80cd863f-a40d-4b62-826b-29906c46afd8",
            }}
          />
          <Image
            style={styles.IconLixeira}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ryei6pn9ndf-I75%3A151%3B4%3A123?alt=media&token=8a82433c-d3e7-45b4-a57b-974b98914b79",
            }}
          />
        </View>
        <View style={styles.LinhaInput} />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  EventoCad: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 40,
    backgroundColor: "rgba(0,166,166,1)",
  },
  HeaderPrincipal: {
    display: "flex",
    flexDirection: "column",
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: "rgba(249,249,249,1)",
    height: 680,
  },
  EventCadastrado: {
    position: "absolute",
    fontSize: 24,
    fontWeight: "700",
  },
  Logotipo: {
    width: 62,
    height: 50,
    left: 15,
    marginBottom: 25,
  },
  TituloEventoCad: {
    fontSize: 24,
    fontWeight: "700",
    top: 15,
    left: 10,
  },
  InfoCad: {
    display: "flex",
    flexDirection: "row", 
  },
  IconEditar: {
    width: 30,
    height: 30,
    marginRight: 11,
  },
  IconLixeira: {
    width: 22,
    height: 23,
    top: 4,
  },

  Cadastrados: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
    marginTop: 50,
  },
  TituloEventoRegistrado: {
    fontSize: 24,
    fontWeight: "700",
    marginRight: 156,
    left: 10,
  },

  LinhaInput: {
    backgroundColor: "rgba(0,166,166,1)",
    width: 396,
    height: 2,
  },
})
