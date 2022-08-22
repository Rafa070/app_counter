import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from "react"
import Welcome from '../pages/Welcome/Welcome';
import Login from '../pages/Login/Login';
import Cadastro from '../pages/Cadastro/Cadastro';
import Home from '../pages/Home/Home';
import CadEvent from '../pages/CadEvent/CadEvent';
import EventCad from '../pages/EventCad/EventCad';
import CounterHome from '../pages/CounterHome/CounterHome';
import Details from '../pages/Details/Details';

const Stack = createNativeStackNavigator();
export default function Routes(){
  return(
     <Stack.Navigator>
         <Stack.Screen
            name = "Welcome"
            component={Welcome}
            options={{ headerShown: false }}
         />
            <Stack.Screen
            name = "Login"
            component={Login}
            options={{ headerShown: false }}
         />
          <Stack.Screen
            name = "Home"
            component={Home}
            options={{ headerShown: false }}
         />
          <Stack.Screen
            name = "Cadastro"
            component={Cadastro}
            options={{ headerShown: false }}
         />
          <Stack.Screen
            name = "EventCad"
            component={EventCad}
            options={{ headerShown: false }}
         />
          <Stack.Screen
          name = "Details"
          component={Details}
          options={{ headerShown: false }}
          />
          <Stack.Screen
            name = "CounterHome"
            component={CounterHome}
            options={{ headerShown: false }}
         />
          <Stack.Screen
            name = "CadEvent"
            component={CadEvent}
            options={{ headerShown: false }}
         />
     </Stack.Navigator>   
    )
}