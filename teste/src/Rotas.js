import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/Login';
import Cadastro from './components/Cadastro';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Login' >

      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />

    </Stack.Navigator>
  );
}