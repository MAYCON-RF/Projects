/* O objetivo é criar uma função que recebe a quantidade de vitórias e derrotas de um jogador e calcula o saldo das partidas ranqueadas. */

let qtdDeVitorias = 20
let qtdDeDerrotas = 10
let saldoDeVitorias = calculaSaldo(qtdDeVitorias, qtdDeDerrotas);
let classificacao = defineElo(saldoDeVitorias);

// calcula o saldo
function calculaSaldo(qtdDeVitorias, qtdDeDerrotas) {
    return qtdDeVitorias - qtdDeDerrotas;
}

//calcula o elo
function defineElo(saldo) {
    if (saldo <= 10) {
        return "Ferro"
    }
    else if (saldo >= 11 && saldo <= 20) {
        return "Bronze"
    }
    else if (saldo >= 21 && saldo <= 50) {
        return "Prata"
    }
    else if (saldo >= 51 && saldo <= 80) {
        return "Ouro"
    }
    else if (saldo >= 81 && saldo <= 90) {
        return "Diamante"
    }
    else if (saldo >= 91 && saldo <= 100) {
        return "Lendario"
    }
    else {
        return "Imortal"
    }

}

//saida
console.log(`O Herói tem de saldo de ${saldoDeVitorias} e está no nível de ${classificacao}`)
