import React from "react";
import Topo from "./componentes/Topo";
import Jogos from "./componentes/Jogos";
export default function Home(){
    return(       
        <Jogos Topo	={Topo}/>
    )
}