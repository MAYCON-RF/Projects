const quantityScams = 4;
let minerals = ["Carvao", "Ferro", "Diamante", "Pedra"];
for (let i = 1; i <= quantityScams; i++) {
    let mineIndex = (i-1) % minerals.length;
    print(i+": "+minerals[mineIndex]);

}