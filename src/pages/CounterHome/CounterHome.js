import React, { useState, useEffect } from "react";
import { StyleSheet, Image, Text, View, FlatList } from "react-native";
import firebase from '../../Config/firebase';
import Paho from 'paho-mqtt';
import { collection, getDocs } from "firebase/firestore";

//var entrada; 
var saida;
var mensagem1
var mensagem;

const client = new Paho.Client(
  'broker.emqx.io',
  8083,
  '/'
)

try{
client.connect({
    onSuccess: function () {
        console.log("conectado")
        //client.subscribe("esp32/output")
        //client.subscribe("esp32/counter")
        client.subscribe("teste"); // As linhas a seguir sao uma tentativa de envio de mensagem
      const message1 = new Paho.Message('connected')
      message1.destinationName = "teste"
      client.send(message1)
    },
    onFailure: function () {
        console.log("Desconectado")
    },
  
    //userName: 'emqx',
    //password: 'public',
    //useSSL: true,
})} catch (error) {
  alert(error);
}


export default function CounterEvent(props) {
  const [task, setTask] = useState([]);
  const database = firebase.firestore();
  const [msg, setMsg] = useState('')
  const [entrada, setEntrada] = useState(0)
  const [saida1, setSaida1] = useState(0)
  

// Função para recebimento

/*client.onMessageArrived = function (message) {
  console.log('Topic:' + message.destinationName + ", Message:" + message.payloadString);
  entrada = message.destinationName;
  mensagem = message.payloadString;
  setmsg(mensagem)
  setmsgRec(mensagem1)
}*/

/*logica contabiliza 1 na entrada se receber 1. e contabiliza -1 na saida
 if(count == 1){
  count++;
}else if(count == -1) {
  count--;
} */

// Função para envio

client.onMessageArrived = function (message) {
  console.log('Topic:' + message.destinationName + ", Message:" + message.payloadString);
  saida = message.destinationName;
  mensagem1 = message.payloadString;
setMsg(mensagem1)


 if(mensagem1 === 1){
    setEntrada(entrada++);
    setMsg(entrada)
  }else {
    mensagem1--;
    setSaida1(saida1++);
    setMsg(saida1)
  }

}

useEffect(() => {

//const q = query(citiesRef, where("desciption", "==", props.route.params.Evento));

  database.collection("Tasks").onSnapshot((query) => {
    const list = [];
    query.forEach((doc) => {
      list.push({ ...doc.data(), id: doc.id });
    });
    setTask(list);
  });
}, []);

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
          <Text>M1:{entrada}</Text>
        <Text>M2 Test:{saida}</Text>
        <Text>M1:{msg}</Text>
        <Text>M2 Test:{mensagem1}</Text>
        <Text style={styles.TituloEvent}>{props.route.params.Evento}</Text>    
         
          <View style={styles.InicioEntrada}>
            <View style={styles.CardInfo}>
            <Text style={styles.SaidaTexto}>ENTRADAS</Text>
            <Text style={styles.Value}>{saida1}</Text>
              
              
            
              <Text style={styles.Value}>
                {mensagem1}
              </Text>
            </View>
          </View>
          <View style={styles.HeaderPricipal}>
            <View style={styles.CardInfo}>
            <Text style={styles.SaidaTexto}>SAÍDAS</Text>
              <Text style={styles.Value}>{saida1}</Text>
            </View>
          </View>
          <View style={styles.IniciarEntradas}>
              <Text style={styles.BotaoIniciar}>ENCERRAR</Text>
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
    fontSize: 10,
    top: 15,
    fontWeight: "900",
    color: "rgba(67,66,66,1)",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  Value: {
    fontSize: 30,
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
    fontSize: 15,
    fontWeight: "600",
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
    backgroundColor: "red",
    width: 360,
  },
})