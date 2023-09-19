import { useEffect, useState } from "react";
import { carregaJogos } from "../servicos/carregaDados";

export default function useJogos() {
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);
    useEffect(() => {
        const retorno = carregaJogos();
        setTitulo(retorno.titulo);
        setLista(retorno.lista)
    }, []);
    return [titulo, lista];
}