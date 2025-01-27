nomeHeroi = "Kakaroto"
quantidadeXp = 10999

switch (true) {
    case quantidadeXp < 1000:
        console.log("O Herói de nome " + nomeHeroi + " está no nível de Ferro");
        break;
    case quantidadeXp >= 1001 && quantidadeXp <= 2000:
        console.log("O Herói de nome " + nomeHeroi + " está no nível de Bronze");
        break;
    case quantidadeXp >= 2001 && quantidadeXp <= 5000:
        console.log("O Herói de nome " + nomeHeroi + " está no nível de Prata");
        break;
    case quantidadeXp >= 5001 && quantidadeXp <= 7000:
            console.log("O Herói de nome " + nomeHeroi + " está no nível de Ouro");
            break;
    case quantidadeXp >= 7001 && quantidadeXp <= 8000:
            console.log("O Herói de nome " + nomeHeroi + " está no nível de Platina");
            break;
    case quantidadeXp >= 8001 && quantidadeXp <= 9000:
            console.log("O Herói de nome " + nomeHeroi + " está no nível de Ascendente");
            break;
    case quantidadeXp >= 9001 && quantidadeXp <= 10000:
            console.log("O Herói de nome " + nomeHeroi + " está no nível de Imortal");
            break;
    case quantidadeXp >= 10000:
            console.log("O Herói de nome " + nomeHeroi + " está no nível de Radiante");
            break;        
    default:
        console.log("Nível não conhecido");
        break;
}