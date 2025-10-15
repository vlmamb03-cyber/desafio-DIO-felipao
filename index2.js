// Calculadora de partidas Rankeadas

// Função que calcula o saldo e o nível do jogador
function calcularRank(vitorias, derrotas) {
    // Calculando o saldo de partidas
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Estrutura de decisão para definir o nível
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Retornando a mensagem final
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Exemplo de uso da função
let vitorias = 55;
let derrotas = 20;

let resultado = calcularRank(vitorias, derrotas);
console.log(resultado); 