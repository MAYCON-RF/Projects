let biblioteca = {
    livro: "Harry Potter",
    revista: "Veja",
    cd: {
        rock: "U2",
        sertanejo: "Paula Fernandes",
        gospel: "Slipknot"
    },
    dvd: {
        aovivo: ["Renata Aragao", "vocal"],
        cover: ["Paulo Vilmar", "instrumentista"],
        educativo: ["Plai Boi", "fotografo"]
    }
}

for (let index in biblioteca.dvd) {
    let [dvdColecao, cantordvd] = biblioteca.dvd[index]
    console.log(`Os dvds são ${dvdColecao} : ${cantordvd}`)
}
