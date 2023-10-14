/* O objetivo desse código é informar o jogador sobre a presença de tesouros ou monstros em cada sala, com base nas configurações definidas nas listas salasComTesouro e salasComMonstro */


const totalRooms = parseInt(gets());
const treasureRoom = [2, 4, 7];
const roomsWithMonstro = [3, 6, 8];

for (let room = 1; room <= totalRooms; room++) {
    const hasTreasure = treasureRoom.includes(room);
    const hasMonster = roomsWithMonstro.includes(room);

    if (hasTreasure) {
        print("Tesouro na sala " + room + "!");

    } else if (hasMonster) {
        print("Monstro na sala " + room + "!");
    }
}