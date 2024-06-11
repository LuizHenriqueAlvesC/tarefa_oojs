function CriacaoPersonagem (nome, raca, tamanho) {
    this.nome = nome;
    this.raca = raca;
    this.tamanho = tamanho;
}

function personagem (nome, raca, tamanho, estamina, magia, vida) {
    CriacaoPersonagem.call(this, nome, raca, tamanho)
    this.estamina = estamina;
    this.magia = magia;
    this.vida = vida;
}

function Dragonborn (nome, raca, tamanho, estamina, magia, vida, thuum) {
    personagem.call(this, nome, raca, tamanho, estamina, magia, vida)
    this.thuum = thuum;
}

function NpcPlayers (nome, raca, tamanho, estamina, magia, vida) {
    personagem.call(this, nome, raca, tamanho, estamina, magia, vida);
}

const PlayerPrincipal = new Dragonborn("LuizinhoMatadorDeDragões", "Nórdico", 1.90, 200, 100, 120, "palavras de poder");
const Player2 = new NpcPlayers("Jorge", "argoniano", 1.80, 110, 100, 150);
const Player3 = new NpcPlayers("Lídia", "não definida", 1.65, 200, 200, 100);

console.log(PlayerPrincipal);
console.log(Player2);
console.log(Player3);
