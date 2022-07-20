import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from "react-native";
import firebase from '../../Config/firebase';
import { useNavigation } from "@react-navigation/native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

export default function EventCad() {
  const [task, setTask] = useState([]);
  const database = firebase.firestore();
  const navigation = useNavigation();

  function deleteTask(id) {
    database.collection("Tasks").doc(id).delete();
  }
 
  useEffect(() => {
    database.collection("Tasks").onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setTask(list);
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={task}
        renderItem={( { item } )=>{
           return(
          <View style={styles.Tasks}>
           
            <View>
              <Text style={styles.DescriptionTask}>{item.description} </Text>
             <TouchableOpacity
             style={styles.updateTask}
             onPress={()=>
               navigation.navigate("Details",{
                 id: item.id,
                 description: item.description,
               })
             }
             >
              <MaterialCommunityIcons
              name="pencil"
              size={23}
              color="blue"
            >
            </MaterialCommunityIcons>
            </TouchableOpacity>
            </View>  
 
            <TouchableOpacity
              style={styles.deleteTask}
              onPress={() => {
                deleteTask(item.id)
              }}
            >
            <MaterialCommunityIcons
              name="delete"
              size={23}
              color="#F92e6A"
            >
            </MaterialCommunityIcons>
            </TouchableOpacity>

          </View>
          )
        }}
      />
      <TouchableOpacity 
        style={styles.AddEvent}
        onPress={() => navigation.navigate("CadEvent")}
      >
        <Text style={styles.addButton}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff",
    paddingTop: 20
 },
 Tasks:{
  width:"100%",
  flexDirection:"row",
  justifyContent:"space-between",
  marginTop:5
 },
 deleteTask:{
   justifyContent:"center",
   paddingLeft:15,
   top:15,
 },
 updateTask: {
left: 325,
bottom: 10,
 },
 DescriptionTask:{
  width:310,
  alignContent:"flex-start",
  backgroundColor:"#f5f5f5cf",
  padding:13,
  top: 30,
  paddingHorizontal: 20,
  borderRadius:10,
  marginBottom: 5,
  marginRight:15,
  color:"#282b2db5",
 },
 AddEvent:{
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
 addButton:{
  color:"#ffffff",
  fontSize:25,
  fontWeight:"bold",
  width: 150,
  left:25,
 },
});