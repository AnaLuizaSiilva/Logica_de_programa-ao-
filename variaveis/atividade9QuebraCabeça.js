// --- Código 1: Categoria de Voto por Idade ---
let idade = prompt("Digite sua idade:");
idade = Number(idade); // Convertendo para número

if (idade < 0 || isNaN(idade)) {
    console.log("Categoria inválida");
} else if (idade < 16) {
    console.log("Não pode votar");
} else if ((idade >= 16 && idade < 18) || idade >= 70) {
    console.log("Voto facultativo");
} else if (idade >= 18 && idade < 70) {
    console.log("Voto obrigatório");
}

// --- Código 2: Repetição da lógica de categoria de voto (explicado detalhadamente) ---
if (idade >= 18 && idade < 70) {
    console.log("Voto obrigatório");
} else if (idade < 16) {
    console.log("Não pode votar");
} else if (idade >= 16 && idade < 18) {
    console.log("Voto facultativo");
} else if (idade >= 70) {
    console.log("Voto facultativo");
}

// --- Código 3: Verificação de número positivo, negativo ou zero ---
let numero = prompt("Digite um número:");
numero = Number(numero); // Convertendo para número

if (numero < 0) {
    console.log("Negativo");
} else if (numero > 0) {
    console.log("Positivo");
} else {
    console.log("Zero");
}

// --- Código 4: Verificação de Tipo de Combustível ---
let combustivel = prompt("Digite o tipo de combustível:");

if (combustivel === "Gasolina") {
    console.log("Você escolheu gasolina");
} else if (combustivel === "Álcool") {
    console.log("Você escolheu o Álcool");
} else if (combustivel === "Diesel") {
    console.log("Você escolheu o Diesel");
} else {
    console.log("Opção Inválida");
}

// --- Código 5: Verificação de Velocidade ---
let velocidade = prompt("Digite a velocidade:");
velocidade = Number(velocidade); // Convertendo para número

if (velocidade < 75) {
    console.log("Atenção");
} else if (velocidade >= 80) {
    console.log("Multado");
}

if (velocidade <= 60) {
    console.log("Dentro do limite");
} else {
    console.log("Velocidade não permitida");
}

