import React, { useState } from "react"
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert}  from "react-native"
import firebase from "../../Config/firebase"

export default function Details({navigation, route}){
  const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
  const idTask = route.params.id
  const database = firebase.firestore();
 
  function editTask(description, id){
    database.collection("Tasks").doc(id).update({
      description: description,
    })
    navigation.navigate("EventCad")
  }

  return(
    <View style={styles.container}>
      <Text style={styles.label}>Descrição</Text>
      <TextInput
      style={styles.input}
      placeholder="Ex: estudar javascript"
      onChangeText={setDescriptionEdit}
      value={descriptionEdit}
      />
      <TouchableOpacity 
        style={styles.buttonNewTask}
        onPress={()=>{
          editTask(descriptionEdit, idTask)
          Alert.alert("Atualizado", "Descrição do seu evento foi atualizada com sucesso!!")
        }}
      >
        <Text style={styles.iconButton}>Salvar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { 
      flex:1,
      backgroundColor:'#fff'
    },
    label:{
      width:"90%",
      marginTop: 20,
      fontSize:16,
      marginLeft: 20,
      color:"#F92E6A"
    },
    input:{
     width:"90%",
     marginTop:10,
     padding:10,
     height:50,
     borderBottomWidth: 1,
     borderBottomColor:"#F92E6A",
     marginLeft:"auto",
     marginRight:"auto"
    },
    buttonNewTask:{
        width:350,
        height:50,
        position:"absolute",
        bottom: 30,
        left:20,
        backgroundColor: "rgba(0,166,166,1)",
        borderRadius:50,
        justifyContent:"center",
        alignItems: "center"
    },
    iconButton:{
        color:"#ffffff",
        fontSize:25,
        fontWeight:"bold",
        width: 150,
        left:45,
    }
    
   });