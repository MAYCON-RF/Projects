//Função que inverte o nome independente do tamanho
function reverseName(name) {
    var invert = name.split(" ");
    for (i = invert.length - 1; i >= 0; i--) {
        console.log(invert[i]);
    }
}
let nameInverter = reverseName("Nadir Bossor Colono Pereira Marques Portuga");
