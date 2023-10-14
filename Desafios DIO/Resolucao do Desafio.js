/* O objetivo é criar uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói e, com base na XP, determinar o nível do herói. */


let nomeDoHeroi = "Super-kuGo"; //será digitada pelo usuario
let quantidadeDeXp = 10000; //será digitada pelo usuario

let classificação = "";
if (quantidadeDeXp < 1000) {
    classificação = "Ferro";
} else if (quantidadeDeXp >= 1001 && quantidadeDeXp <= 2000) {
    classificação = "Bronze";
} else if (quantidadeDeXp >= 2001 && quantidadeDeXp <= 5000) {
    classificação = "Prata";
} else if (quantidadeDeXp >= 6001 && quantidadeDeXp <= 7000) {
    classificação = "Ouro";
} else if (quantidadeDeXp >= 7001 && quantidadeDeXp <= 8000) {
    classificação = "Platina";
} else if (quantidadeDeXp >= 8001 && quantidadeDeXp <= 9000) {
    classificação = "Ascendente";
} else if (quantidadeDeXp >= 9001 && quantidadeDeXp <= 10000) {
    classificação = "Imortal";
} else {
    classificação = "Radiante";
}

//SAIDA DE DADOS

console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + classificação);

