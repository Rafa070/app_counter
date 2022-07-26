import React from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";
import Paho from 'paho-mqtt';


const client = new Paho.Client(
    'broker.emqx.io',
    8083,
    '/'
)

client.connect({
    onSuccess: function () {
        console.log("connected")
        client.subscribe("esp32/output")
        client.subscribe("esp32/counter")
        client.subscribe("World"); // As linhas a seguir sao uma tentativa de envio de mensagem
        const message1 = new Paho.Message("Conexao OK"); // AGORA funcionando
        message1.destinationName = "World"; // para testar

        client.send(message1); // abrir o broker online
    },
    onFailure: function () {
        console.log("Besti Besti")
    },
    //userName: 'emqx',
    //password: 'public',
    //useSSL: true,
})

export default function CounterEvent() {
  return (
    <View style={styles.CounterEvent}>
      <View style={styles.HeaderPricipal}>
        <View style={styles.HeaderSecundario}>
          <Image
            style={styles.Logotipo}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/p63k3y1hvxe-75%3A145?alt=media&token=f894ae6f-6ae8-40bb-b3bc-93f2949751cf",
            }}
          />
          <View>
            <Text style={styles.TituloEvent}>JURI SIMULADO</Text>
            </View>
          <View style={styles.InicioEntrada}>
            <View style={styles.CardInfo}>
              <Text style={styles.EntradaTexto}>ENTRADAS</Text>
              <Text style={styles.Value}>00</Text>
            </View>
            <View style={styles.IniciarEntradas}>
              <Text style={styles.BotaoIniciar}>INICIAR</Text>
            </View>
          </View>
          <View style={styles.HeaderPricipal}>
            <View style={styles.CardInfo}>
            <Text style={styles.SaidaTexto}>SAÍDAS</Text>
              <Text style={styles.Value}>00</Text>
            </View>
          </View>
          <View style={styles.IniciarEntradas}>
              <Text style={styles.BotaoIniciar}>INICIAR</Text>
            </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  CounterEvent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: "rgba(234,234,234,1)",
    height: 926,
  },
  HeaderPricipal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  HeaderSecundario: {
    display: "flex",
    flexDirection: "column",
  },
  TituloEvent: {
    fontSize: 30,
    fontWeight: "900",
    color: "rgba(67,66,66,1)",
     textAlign: "center",
     marginBottom: 25,
  },
  Logotipo: {
    width: 62,
    height: 50,
    marginBottom: 30,
  },
  InicioEntrada: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 81,
  },
  CardInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 25,
    paddingBottom: 4,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,166,166,1)",
  },
  EntradaTexto: {
    textAlign: "center",
    fontSize: 30,
    top: 15,
    fontWeight: "900",
    color: "rgba(67,66,66,1)",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  Value: {
    fontSize: 50,
    fontWeight: "300",
    color: "rgba(67,66,66,1)",
  },
  BotaoIniciar: {
    fontSize: 20,
    fontWeight: "900",
    color: "rgba(255, 255, 255, 1)",
  },
  CardInfo: {
    marginBottom: 9,
    borderRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,166,166,1)",
    width: 260,
    height: 161,
  },
  Value: {
    fontSize: 80,
    fontWeight: "600",
    color: "rgba(67,66,66,1)",
    textAlign: "center",
  },
  SaidaTexto: {
    top: 12,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "900",
    color: "rgba(67,66,66,1)",
    
  },
  IniciarEntradas: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 9,
    paddingBottom: 9,
    borderRadius: 10,
    backgroundColor: "rgba(0,166,166,1)",
    width: 360,
  },
})
