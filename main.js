let nome = prompt("What is your name?");
alert("Oi " + nome + "! Bem-vindo to JavaScript programming.");

let numero = parseFloat(prompt("Enter the first number:"));

for (let i = 0; i < numero; i++) {
    console.log(i + ": Você vai aprender programação!");
}

console.log("Parabéns, " + nome + "! Você completou o loop.");