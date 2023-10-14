/* Código usado para receber a escolha de um Pokémon inicial de um jogador e informar qual Pokémon foi escolhido. */

let trainerChoice = parseInt(gets());
let chosenPokemon;

switch (trainerChoice) {
    case 1:
        chosenPokemon = "Bulbasaur";
        break;

    case 2:
        chosenPokemon = "Charmander";
        break;

    case 4:
        chosenPokemon = "Pikachu";
        break;

    case 5:
        chosenPokemon = "Mewtwo";
        break;
}

print("Voce escolheu o " + chosenPokemon + " como seu Pokemon inicial.");