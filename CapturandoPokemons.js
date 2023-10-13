let escolhaDoTreinador = parseInt(gets());
let pokemonEscolhido;
switch (escolhaDoTreinador) {
    case 1:
        pokemonEscolhido = "Bulbasaur";
        break;
    case 2:
        pokemonEscolhido = "Charmander";
        break;
    case 4:
        pokemonEscolhido = "Pikachu";
        break;
    case 5:
        pokemonEscolhido = "Mewtwo";
        break;
}

print("Voce escolheu o " + pokemonEscolhido + " como seu Pokemon inicial.");