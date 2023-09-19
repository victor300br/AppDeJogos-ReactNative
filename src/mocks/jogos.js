import AmongUs from '../telas/Home/Assets/jogos/AmongUs.png';
import DeadCells from '../telas/Home/Assets/jogos/DeadCells.png';
import roblox from '../telas/Home/Assets/jogos/Roblox.jpg';
import SubwaySurf from '../telas/Home/Assets/jogos/SubwaySurf.jpg';
import WildRift from '../telas/Home/Assets/jogos/WildRift.jpg';

const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const jogos = {
    titulo: "Jogos",
    lista: [
        {
            nome: "AmongUs",
            imagem: AmongUs,
            NumAvaliacoes: `${gerarNumeroAleatorio(1, 500)}mil`,
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "DeadCells",
            imagem: DeadCells,
            NumAvaliacoes: `${gerarNumeroAleatorio(1, 500)}mil`,
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "roblox",
            imagem: roblox,
            NumAvaliacoes: `${gerarNumeroAleatorio(1, 500)}mil`,
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "SubwaySurf",
            imagem: SubwaySurf,
            NumAvaliacoes: `${gerarNumeroAleatorio(1, 500)}mil`,
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "WildRift",
            imagem: WildRift,
            NumAvaliacoes: `${gerarNumeroAleatorio(1, 500)}mil`,
            estrelas: gerarNumeroAleatorio(1, 5),
        }
    ]
}

export default jogos;