let idioma = prompt(&quot;Escolha um idioma: Portugues, Ingles ou Chines:&quot;)
switch(idioma){
case &quot;Portugues&quot;:
console.log(&quot;Olá&quot;);
break;

case &quot;Ingles&quot;:
console.log(&quot;Hello&quot;)
break;

case &quot;Chines&quot;:
console.log(&quot;??&quot;)
break;
default:
console.log(&quot;idioma não encontrado&quot;)
}
let numero = 5;
switch (numero) {
case 1:
console.log(&quot;Domingo&quot;);
break;
case 2:
console.log(&quot;Segunda-feira&quot;);
break;

case 3:
console.log(&quot;Terça-feira&quot;);
break;
case 4:
console.log(&quot;Quarta-feira&quot;);
break;
case 5:
console.log(&quot;Quinta-feira&quot;);
break;
case 6:
console.log(&quot;Sexta-feira&quot;);
break;
case 7:
console.log(&quot;Sábado&quot;);
break;
default:
console.log(&quot;Dia da semana não encontrado. Digite um número de 1 a
7.&quot;);
}

let numero = 2;

switch (numero) {
case 1:
console.log(&quot;Carro&quot;);
break;
case 2:

console.log(&quot;Bicicleta&quot;);
break;
case 3:
console.log(&quot;Ônibus&quot;);
break;
case 4:
console.log(&quot;Trem&quot;);
break;
case 5:
console.log(&quot;Avião&quot;);
break;
default:
console.log(&quot;Transporte não encontrado. Digite um número de 1 a 5.&quot;);
}

let nivel = 3; // Altere esse valor para testar diferentes níveis de urgência

switch (nivel) {
case 1:
console.log(&quot;Urgência Baixa&quot;);
break;
case 2:
console.log(&quot;Urgência Média&quot;);
break;
case 3:
console.log(&quot;Urgência Alta&quot;);

break;
default:
console.log(&quot;Número inválido. Digite 1 para baixa, 2 para média ou 3
para alta.&quot;);
}

let categoria = &quot;SUV&quot;;

switch (categoria) {
case &quot;compacto&quot;:
console.log(&quot;Veículo compacto: hatch ou sedan pequeno.&quot;);
break;
case &quot;SUV&quot;:
console.log(&quot;Veículo SUV: utilitário esportivo, ideal para família.&quot;);
break;
case &quot;caminhão&quot;:
console.log(&quot;Veículo caminhão: usado para transporte de cargas.&quot;);
break;
default:
console.log(&quot;Categoria não encontrada. Escolha entre: compacto, SUV
ou caminhão.&quot;);
}
let horas = 3; // Altere esse valor para testar diferentes durações
let tarifa;

switch (true) {
case (horas &lt;= 1):

tarifa = 5.00;
break;
case (horas &lt;= 3):
tarifa = 10.00;
break;
case (horas &lt;= 6):
tarifa = 15.00;
break;
case (horas &lt;= 12):
tarifa = 20.00;
break;
case (horas &gt; 12):
tarifa = 30.00;
break;
default:
console.log(&quot;Tempo inválido.&quot;);
tarifa = null;
}

if (tarifa !== null) {
console.log(`Tempo estacionado: ${horas} hora(s).`);
console.log(`Tarifa a pagar: R$ ${tarifa.toFixed(2)}`);
}

let nivel = 2; // Altere esse valor para 1, 2 ou 3
switch (nivel) {

case 1:
console.log(&quot;Nível Fácil&quot;);
break;
case 2:
console.log(&quot;Nível Médio&quot;);
break;
case 3:
console.log(&quot;Nível Difícil&quot;);
break;
default:
console.log(&quot;Nivel não encontrado. Escolha 1 para fácil, 2 para médio ou
3 para difícil.&quot;);
}

let categoria = &quot;musculação&quot;; // Altere para &quot;aula de yoga&quot;,
&quot;musculação&quot; ou &quot;personal trainer&quot;

switch (categoria) {
case &quot;aula de yoga&quot;:
console.log(&quot;Serviço: Aula de Yoga - Foco em respiração, flexibilidade e
equilíbrio.&quot;);
break;
case &quot;musculação&quot;:
console.log(&quot;Serviço: Musculação - Treinamento com pesos para ganho
de força e massa muscular.&quot;);
break;
case &quot;personal trainer&quot;:

console.log(&quot;Serviço: Personal Trainer - Treinamento individualizado
com acompanhamento profissional.&quot;);
break;
default:
console.log(&quot;Categoria não encontrada. Escolha entre: aula de yoga,
musculação ou personal trainer.&quot;);
}

let categoria = &quot;meia entrada&quot;; // Altere para &quot;estudante&quot;, &quot;meia
entrada&quot; ou &quot;inteira&quot;

switch (categoria) {
case &quot;estudante&quot;:
console.log(&quot;Preço do ingresso (Estudante): R$ 15,00&quot;);
break;
case &quot;meia entrada&quot;:
console.log(&quot;Preço do ingresso (Meia Entrada): R$ 20,00&quot;);
break;
case &quot;inteira&quot;:
console.log(&quot;Preço do ingresso (Inteira): R$ 40,00&quot;);
break;
default:
console.log(“Escolha entre: estudante, meia entrada ou inteira.&quot;);
}
let faixaEtaria = 25; // Altere esse valor para testar diferentes faixas
etárias

switch (true) {

case (faixaEtaria &lt;= 18):
console.log(&quot;Nível de Dificuldade: Iniciante - Exercícios leves e focados
em desenvolvimento de resistência.&quot;);
break;
case (faixaEtaria &lt;= 35):
console.log(&quot;Nível de Dificuldade: Intermediário - Exercícios com
intensidade moderada para melhorar força e resistência.&quot;);
break;
case (faixaEtaria &lt;= 50):
console.log(&quot;Nível de Dificuldade: Avançado - Exercícios de alta
intensidade para manter a forma física.&quot;);
break;
case (faixaEtaria &gt; 50):
console.log(&quot;Nível de Dificuldade: Moderado - Exercícios de baixo
impacto e foco em flexibilidade e mobilidade.&quot;);
break;
default:
console.log(&quot;Faixa etária invalida.&quot;);
}
let generoMusical = &quot;rock&quot;; // Altere para &quot;rock&quot;, &quot;jazz&quot;, &quot;clássica&quot; ou
&quot;pop&quot;

switch (generoMusical.toLowerCase()) {
case &quot;rock&quot;:
console.log(&quot;Instrumentos típicos do Rock: guitarra elétrica, baixo,
bateria.&quot;);
break;
case &quot;jazz&quot;:

console.log(&quot;Instrumentos típicos do Jazz: saxofone, piano,
contrabaixo.&quot;);
break;
case &quot;clássica&quot;:
console.log(&quot;Instrumentos típicos da Música Clássica: violino, piano,
flauta.&quot;);
break;
case &quot;pop&quot;:
console.log(&quot;Instrumentos típicos do Pop: guitarra, teclado, bateria.&quot;);
break;
default:
console.log(&quot;Gênero musical inválido. Escolha entre: rock, jazz, clássica
ou pop.&quot;);
}

let area = &quot;front-end&quot;; // Altere para &quot;front-end&quot;, &quot;back-end&quot; ou
&quot;mobile&quot;

switch (area.toLowerCase()) {
case &quot;front-end&quot;:
console.log(&quot;Cursos oferecidos na área de Front-End: HTML, CSS,
JavaScript, React, Vue.&quot;);
break;
case &quot;back-end&quot;:
console.log(&quot;Cursos oferecidos na área de Back-End: Node.js, Python,
Ruby, Java, APIs RESTful.&quot;);
break;
case &quot;mobile&quot;:

console.log(&quot;Cursos oferecidos na área de Mobile: Desenvolvimento
Android (Kotlin), Desenvolvimento iOS (Swift), React Native.&quot;);
break;
default:
console.log(&quot;Área inválida. Escolha entre: front-end, back-end ou
mobile.&quot;);
}

let idade = 30; // Altere esse valor para testar diferentes idades

switch (true) {
case (idade &lt;= 12):
console.log(&quot;Nível de Habilidade: Iniciante - Foco no aprendizado das
habilidades básicas.&quot;);
break;
case (idade &lt;= 18):
console.log(&quot;Nível de Habilidade: Intermediário - Aperfeiçoamento das
habilidades e maior envolvimento em competições.&quot;);
break;
case (idade &lt;= 35):
console.log(&quot;Nível de Habilidade: Avançado - Alto desempenho e
habilidade, com participação em competições profissionais.&quot;);
break;
case (idade &lt;= 50):
console.log(&quot;Nível de Habilidade: Experiente - Manutenção de alto
desempenho, embora com maior ênfase em prevenção de lesões.&quot;);
break;
case (idade &gt; 50):

console.log(&quot;Nível de Habilidade: Sênior - Foco na manutenção da
saúde, flexibilidade e atividades de baixo impacto.&quot;);
break;
default:
console.log(&quot;Idade inválida.&quot;);
}

let categoria = &quot;intermediário&quot;; // Altere para &quot;básico&quot;, &quot;intermediário&quot;
ou &quot;avançado&quot;

switch (categoria.toLowerCase()) {
case &quot;básico&quot;:
console.log(&quot;Desafios Matemáticos - Nível Básico: Operações simples
como adição, subtração, multiplicação e divisão.&quot;);
break;
case &quot;intermediário&quot;:
console.log(&quot;Desafios Matemáticos - Nível Intermediário: Equações,
radicais, porcentagens e frações.&quot;);
break;
case &quot;avançado&quot;:
console.log(&quot;Desafios Matemáticos - Nível Avançado: Cálculo
diferencial, integrais, álgebra linear, e teoria dos números.&quot;);
break;
default:
console.log(&quot;Categoria inválida. Escolha entre: básico, intermediário ou
avançado.&quot;);
}
