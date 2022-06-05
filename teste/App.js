import React from "react";
import MyStack from "./src/Rotas";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
    <MyStack />
    </NavigationContainer>
  );
}


