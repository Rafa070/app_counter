import React, { useState } from "react";
import {SafeAreaView, StyleSheet, TextInput, Image, Text, View, TouchableOpacity} from "react-native"
import firebase from "firebase";

export default function CadEvent({ navigation }, props) {
  const database = firebase.firestore();
  const [description, setDescription] = useState(null);

  function addTask(){
    database.collection('Tasks').add({
      description: description,
      status: false
    })
    navigation.navigate("EventCad");
  }
  return (
    <SafeAreaView style={styles.CadEvent}>
      <View style={styles.Group224}>
        <Image
          style={styles.Logotipo}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/gzefwqekmns-75%3A127?alt=media&token=120fa4bd-fa01-4bb5-87d6-7c3d54d1e02c",
          }}
        />
        <Text style={styles.Titulo}>CADASTRE SEU EVENTO</Text>
        <View style={styles.InputNomeDoEvento}>
          <TextInput style={styles.Evento}
          placeholder="Cadastrar Evento"
          onChangeText={setDescription}
          value={description}
         />
        </View>

        <TouchableOpacity 
        style={styles.ButtonCadastrarEvento}
       onPress={()=>{
        addTask()
       }}
       >
          <Text style={styles.CadastrarEvento}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  CadEvent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 50,
    paddingBottom: 538,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 50,
    backgroundColor: "rgba(234,234,234,1)",
    width: 428,
    height: 926,
  },
  Group224: {
    display: "flex",
    flexDirection: "column",
  },
  Logotipo: {
    width: 62,
    height: 50,
    marginBottom: 50,
  },
  Titulo: {
    fontSize: 31,
    fontWeight: "800",
    color: "rgba(67,66,66,1)",
    marginBottom: 30,
  },
  InputNomeDoEvento: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 9,
    paddingRight: 9,
    marginBottom: 22,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,166,166,1)",
    width: 350,
    height: 44,
  },
  Evento: {
    width: 330,
    fontSize: 18,
    fontWeight: "800",
    color: "rgba(67,66,66,1)",
  },

  ButtonCadastrarEvento: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 9,
    paddingRight: 9,
    borderRadius: 10,
    backgroundColor: "rgba(0,166,166,1)",
    width: 350,
  },
  CadastrarEvento: {
    fontSize: 20,
    fontWeight: "900",
    color: "rgba(255, 255, 255, 1)",
  },
})
