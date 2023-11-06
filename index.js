const nome = prompt("Digite o nome do herói:");
const idade = parseInt(prompt("Digite a idade do herói:"));
const tipo = prompt(
  "Selecione o tipo do herói (mago, guerreiro, monge, ninja):"
);

class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";
    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "você não definiu o tipo";
        break;
    }

    console.log(
      `${this.nome} com idade ${this.idade} anos escolheu o ${this.tipo} e atacou usando ${ataque}`
    );
  }
}

if (["mago", "guerreiro", "monge", "ninja"].includes(tipo)) {
  const heroiDoUsuario = new Heroi(nome, idade, tipo);

  heroiDoUsuario.atacar();
} else {
  console.log(
    "Tipo de herói inválido. Escolha entre mago, guerreiro, monge ou ninja."
  );
}
