import React,{useState} from "react";
import {View, TouchableOpacity, StyleSheet, TextInput, Text} from "react-native";

export default function Login({navigation}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function Logar(){

    }
    
    return(
        <View style={style.container}>

            <View style={style.tela}>

            <TextInput style={style.input}
            placeholder="Email"
            onChangeText={setEmail}
            />
            <TextInput style={style.input}
             placeholder="senha"
             onChangeText={setPassword}
             />

            <TouchableOpacity 
            style={style.botao}
            onPress={Logar}>

                <Text>Logar</Text>

            </TouchableOpacity >
            <TouchableOpacity 
            style={style.botao}
            onPress={() => navigation.navigate("Cadastro")}>

                <Text>Cadastrar</Text>

            </TouchableOpacity>
            </View>
        </View>

    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    tela: {
        height: 200,
        width: 200,
        
    },
    input: {
        padding: 10,
        width: 100,
    },
    botao: {
        backgroundColor: "gray",
        margin: 10,
        width: 80,
        height: 30,
    }

})