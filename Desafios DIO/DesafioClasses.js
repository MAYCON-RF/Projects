/**
Cria uma classe generica que represente um personagem com as seguintes propriedades: nome, idade e tipo;
*/

class personagem {
    constructor(nomeDoPersonagem, idadeDoPersonagem, tipoDoPersonagem) {
        this.nomeDoPersonagem = nomeDoPersonagem;
        this.idadeDoPersonagem = idadeDoPersonagem;
        this.tipoDoPersonagem = tipoDoPersonagem;

    }

    atack() {
        let tipoDoAtaque = "";
        switch (this.tipoDoPersonagem) {
            case "mago":
                tipoDoAtaque = "magia";
                break;

            case "guerreiro":
                tipoDoAtaque = "espada";
                break;

            case "monge":
                tipoDoAtaque = "artes marciais";
                break;

            case "ninja ":
                tipoDoAtaque = "shuriken";
                break;
        }

        console.log(`O ${this.tipoDoPersonagem} atacou usando ${tipoDoAtaque}`);
    }
}

// Exemplo de uso da classe e instanciação de um objeto
const maguinMaluco = new personagem("maguin", 29, "mago");

maguinMaluco.atack(); // Saída: "O mago atacou usando usou magia"
