

Atenção
Em nossa resolução utilizamos a função.includes() do JavaScript para verificar se um número(representando a sala atual) está presente nos arrays salasComTesouro e salasComMonstro.

    Entrada

O número total de salas no dungeon(um número inteiro).
    Saída

Sempre que encontrar um tesouro, imprima " Tesouro na sala X!".

Sempre que encontrar um monstro, imprima "Monstro na sala X!".
    Exemplos

A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas.Certifique - se de testar seu programa com esses exemplos e com outros casos possíveis.


const totalSalas = parseInt(gets());
const salasComTesouro = [2, 4, 7];
const salasComMonstro = [3, 6, 8];
for (let sala = 1; sala <= totalSalas; sala++) {
    const temTesouro = salasComTesouro.includes(sala);
    const temMonstro = salasComMonstro.includes(sala);
    if (temTesouro) {
        print("Tesouro na sala " + sala + "!");
    } else if (temMonstro) {
        print("Monstro na sala " + sala + "!");
    }
}