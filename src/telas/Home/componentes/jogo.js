import React, { useReducer, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Estrelas from "../../../componentes/Estrelas";

export default function Jogo({ nome, imagem, NumAvaliacoes, estrelas }) {
    const [selecionado,inverterSelecionado] = useReducer(
        (selecionado)=> !selecionado,
        false
    );
    return (
        <TouchableOpacity style={estilos.cartao} onPress={inverterSelecionado}>
            <Image source={imagem} accessibilityLabel={nome} style={estilos.imagem} />
            <View style={estilos.informacoes}>
                <View>
                <Text style={estilos.nome}>{nome}</Text>
                <Estrelas quantidade={estrelas} editavel={selecionado} grande={selecionado}/>
                </View>
                <Text style={estilos.NumAvaliacoes}>{NumAvaliacoes}</Text>
            </View>

        </TouchableOpacity>
    )
}
const estilos =StyleSheet.create({
    cartao:{
        backgroundColor:'#F6F6F6',
        marginVertical:8,
        marginHorizontal:16,
        borderRadius: 6,
        flexDirection:"row",
        elevation:4
    },
    imagem:{
        width:48,
        height:48,
        borderRadius:6,
        marginVertical:16,
        marginLeft:16,
    },
    informacoes:{
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:8,
        marginVertical:16,
        marginRight:16,
    },
    nome:{
        fontSize: 14,
        lineHeight:22,
        fontWeight:'bold',
    },
    NumAvaliacoes:{
        fontSize:12,
        lineHeight:19,
    }
});