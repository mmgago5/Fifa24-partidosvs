
const clubes = [
    "Barcelona", "Real Madrid", "Bayern Munich", "Manchester City", "Liverpool", 
    "Chelsea", "Paris Saint-Germain", "Juventus", "Inter Milan", "AC Milan", 
    "Arsenal", "Tottenham Hotspur", "Borussia Dortmund", "Atletico Madrid", 
    "Sevilla", "Napoli", "Ajax", "AS Roma", "Lyon", "Porto"
];

function generarEnfrentamiento() {
    const equipo1 = clubes[Math.floor(Math.random() * clubes.length)];
    let equipo2 = clubes[Math.floor(Math.random() * clubes.length)];

    // Asegurarse de que el equipo1 no sea el mismo que el equipo2
    while (equipo1 === equipo2) {
        equipo2 = clubes[Math.floor(Math.random() * clubes.length)];
    }

    document.getElementById("equipo1").textContent = "P1: " + equipo1;
    document.getElementById("equipo2").textContent = "P2: " + equipo2;
}
