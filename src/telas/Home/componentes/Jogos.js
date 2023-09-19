import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import Jogo from "./jogo";
import useJogos from "../../../hooks/useJogos";
export default function Jogos({Topo}) {
    const[titulo,lista] = useJogos();
    const TopoLista = () => {
        return (
            <>
             <Topo/>
            <Text style={estilos.titulo}>{titulo}</Text>
            </>
        )
    }
    return (
        <FlatList 
            data={lista}
            renderItem={({ item }) => <Jogo{...item}/>}
            keyExtractor={({nome})=>nome}
            ListHeaderComponent={TopoLista} />
    )
}
const estilos = StyleSheet.create({
    titulo:{
        fontSize:20,
        lineHeight:32,
        marginHorizontal:16,
        marginTop:16,
        fontWeight: 'bold',
        color:'#464646',
    }
})