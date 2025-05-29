// --- C�digo 1: Categoria de Voto por Idade ---
let idade = prompt("Digite sua idade:");
idade = Number(idade); // Convertendo para n�mero

if (idade < 0 || isNaN(idade)) {
    console.log("Categoria inv�lida");
} else if (idade < 16) {
    console.log("N�o pode votar");
} else if ((idade >= 16 && idade < 18) || idade >= 70) {
    console.log("Voto facultativo");
} else if (idade >= 18 && idade < 70) {
    console.log("Voto obrigat�rio");
}

// --- C�digo 2: Repeti��o da l�gica de categoria de voto (explicado detalhadamente) ---
if (idade >= 18 && idade < 70) {
    console.log("Voto obrigat�rio");
} else if (idade < 16) {
    console.log("N�o pode votar");
} else if (idade >= 16 && idade < 18) {
    console.log("Voto facultativo");
} else if (idade >= 70) {
    console.log("Voto facultativo");
}

// --- C�digo 3: Verifica��o de n�mero positivo, negativo ou zero ---
let numero = prompt("Digite um n�mero:");
numero = Number(numero); // Convertendo para n�mero

if (numero < 0) {
    console.log("Negativo");
} else if (numero > 0) {
    console.log("Positivo");
} else {
    console.log("Zero");
}

// --- C�digo 4: Verifica��o de Tipo de Combust�vel ---
let combustivel = prompt("Digite o tipo de combust�vel:");

if (combustivel === "Gasolina") {
    console.log("Voc� escolheu gasolina");
} else if (combustivel === "�lcool") {
    console.log("Voc� escolheu o �lcool");
} else if (combustivel === "Diesel") {
    console.log("Voc� escolheu o Diesel");
} else {
    console.log("Op��o Inv�lida");
}

// --- C�digo 5: Verifica��o de Velocidade ---
let velocidade = prompt("Digite a velocidade:");
velocidade = Number(velocidade); // Convertendo para n�mero

if (velocidade < 75) {
    console.log("Aten��o");
} else if (velocidade >= 80) {
    console.log("Multado");
}

if (velocidade <= 60) {
    console.log("Dentro do limite");
} else {
    console.log("Velocidade n�o permitida");
}

