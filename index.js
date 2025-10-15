// 🏆 Desafio: Classificador de Nível de Herói

// Variáveis para armazenar o nome e XP
let nomeDoHeroi = "Arkan"; // Você pode alterar o nome
let xp = 9500; // Altere o valor de XP para testar outros níveis

let nivel = ""; // Variável para armazenar o nível final

// Estrutura de decisão para classificar o nível com base na XP
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Mensagem final exibindo o resultado
console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivel + ".");

// Extra: exemplo com laço de repetição (opcional para praticar)
let herois = [
    { nome: "Luna", xp: 950 },
    { nome: "Thorg", xp: 3200 },
    { nome: "Ayla", xp: 8800 },
    { nome: "Ragnar", xp: 12000 }
];

for (let i = 0; i < herois.length; i++) {
    let h = herois[i];
    let nivelHeroi;

    if (h.xp < 1000) {
        nivelHeroi = "Ferro";
    } else if (h.xp <= 2000) {
        nivelHeroi = "Bronze";
    } else if (h.xp <= 5000) {
        nivelHeroi = "Prata";
    } else if (h.xp <= 7000) {
        nivelHeroi = "Ouro";
    } else if (h.xp <= 8000) {
        nivelHeroi = "Platina";
    } else if (h.xp <= 9000) {
        nivelHeroi = "Ascendente";
    } else if (h.xp <= 10000) {
        nivelHeroi = "Imortal";
    } else {
        nivelHeroi = "Radiante";
    }

    console.log("O Herói de nome " + h.nome + " está no nível de " + nivelHeroi + ".");
}