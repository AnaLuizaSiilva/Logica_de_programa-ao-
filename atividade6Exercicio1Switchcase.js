let idioma = prompt(&quot;Escolha um idioma: Portugues, Ingles ou Chines:&quot;)
switch(idioma){
case &quot;Portugues&quot;:
console.log(&quot;Ol�&quot;);
break;

case &quot;Ingles&quot;:
console.log(&quot;Hello&quot;)
break;

case &quot;Chines&quot;:
console.log(&quot;??&quot;)
break;
default:
console.log(&quot;idioma n�o encontrado&quot;)
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
console.log(&quot;Ter�a-feira&quot;);
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
console.log(&quot;S�bado&quot;);
break;
default:
console.log(&quot;Dia da semana n�o encontrado. Digite um n�mero de 1 a
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
console.log(&quot;�nibus&quot;);
break;
case 4:
console.log(&quot;Trem&quot;);
break;
case 5:
console.log(&quot;Avi�o&quot;);
break;
default:
console.log(&quot;Transporte n�o encontrado. Digite um n�mero de 1 a 5.&quot;);
}

let nivel = 3; // Altere esse valor para testar diferentes n�veis de urg�ncia

switch (nivel) {
case 1:
console.log(&quot;Urg�ncia Baixa&quot;);
break;
case 2:
console.log(&quot;Urg�ncia M�dia&quot;);
break;
case 3:
console.log(&quot;Urg�ncia Alta&quot;);

break;
default:
console.log(&quot;N�mero inv�lido. Digite 1 para baixa, 2 para m�dia ou 3
para alta.&quot;);
}

let categoria = &quot;SUV&quot;;

switch (categoria) {
case &quot;compacto&quot;:
console.log(&quot;Ve�culo compacto: hatch ou sedan pequeno.&quot;);
break;
case &quot;SUV&quot;:
console.log(&quot;Ve�culo SUV: utilit�rio esportivo, ideal para fam�lia.&quot;);
break;
case &quot;caminh�o&quot;:
console.log(&quot;Ve�culo caminh�o: usado para transporte de cargas.&quot;);
break;
default:
console.log(&quot;Categoria n�o encontrada. Escolha entre: compacto, SUV
ou caminh�o.&quot;);
}
let horas = 3; // Altere esse valor para testar diferentes dura��es
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
console.log(&quot;Tempo inv�lido.&quot;);
tarifa = null;
}

if (tarifa !== null) {
console.log(`Tempo estacionado: ${horas} hora(s).`);
console.log(`Tarifa a pagar: R$ ${tarifa.toFixed(2)}`);
}

let nivel = 2; // Altere esse valor para 1, 2 ou 3
switch (nivel) {

case 1:
console.log(&quot;N�vel F�cil&quot;);
break;
case 2:
console.log(&quot;N�vel M�dio&quot;);
break;
case 3:
console.log(&quot;N�vel Dif�cil&quot;);
break;
default:
console.log(&quot;Nivel n�o encontrado. Escolha 1 para f�cil, 2 para m�dio ou
3 para dif�cil.&quot;);
}

let categoria = &quot;muscula��o&quot;; // Altere para &quot;aula de yoga&quot;,
&quot;muscula��o&quot; ou &quot;personal trainer&quot;

switch (categoria) {
case &quot;aula de yoga&quot;:
console.log(&quot;Servi�o: Aula de Yoga - Foco em respira��o, flexibilidade e
equil�brio.&quot;);
break;
case &quot;muscula��o&quot;:
console.log(&quot;Servi�o: Muscula��o - Treinamento com pesos para ganho
de for�a e massa muscular.&quot;);
break;
case &quot;personal trainer&quot;:

console.log(&quot;Servi�o: Personal Trainer - Treinamento individualizado
com acompanhamento profissional.&quot;);
break;
default:
console.log(&quot;Categoria n�o encontrada. Escolha entre: aula de yoga,
muscula��o ou personal trainer.&quot;);
}

let categoria = &quot;meia entrada&quot;; // Altere para &quot;estudante&quot;, &quot;meia
entrada&quot; ou &quot;inteira&quot;

switch (categoria) {
case &quot;estudante&quot;:
console.log(&quot;Pre�o do ingresso (Estudante): R$ 15,00&quot;);
break;
case &quot;meia entrada&quot;:
console.log(&quot;Pre�o do ingresso (Meia Entrada): R$ 20,00&quot;);
break;
case &quot;inteira&quot;:
console.log(&quot;Pre�o do ingresso (Inteira): R$ 40,00&quot;);
break;
default:
console.log(�Escolha entre: estudante, meia entrada ou inteira.&quot;);
}
let faixaEtaria = 25; // Altere esse valor para testar diferentes faixas
et�rias

switch (true) {

case (faixaEtaria &lt;= 18):
console.log(&quot;N�vel de Dificuldade: Iniciante - Exerc�cios leves e focados
em desenvolvimento de resist�ncia.&quot;);
break;
case (faixaEtaria &lt;= 35):
console.log(&quot;N�vel de Dificuldade: Intermedi�rio - Exerc�cios com
intensidade moderada para melhorar for�a e resist�ncia.&quot;);
break;
case (faixaEtaria &lt;= 50):
console.log(&quot;N�vel de Dificuldade: Avan�ado - Exerc�cios de alta
intensidade para manter a forma f�sica.&quot;);
break;
case (faixaEtaria &gt; 50):
console.log(&quot;N�vel de Dificuldade: Moderado - Exerc�cios de baixo
impacto e foco em flexibilidade e mobilidade.&quot;);
break;
default:
console.log(&quot;Faixa et�ria invalida.&quot;);
}
let generoMusical = &quot;rock&quot;; // Altere para &quot;rock&quot;, &quot;jazz&quot;, &quot;cl�ssica&quot; ou
&quot;pop&quot;

switch (generoMusical.toLowerCase()) {
case &quot;rock&quot;:
console.log(&quot;Instrumentos t�picos do Rock: guitarra el�trica, baixo,
bateria.&quot;);
break;
case &quot;jazz&quot;:

console.log(&quot;Instrumentos t�picos do Jazz: saxofone, piano,
contrabaixo.&quot;);
break;
case &quot;cl�ssica&quot;:
console.log(&quot;Instrumentos t�picos da M�sica Cl�ssica: violino, piano,
flauta.&quot;);
break;
case &quot;pop&quot;:
console.log(&quot;Instrumentos t�picos do Pop: guitarra, teclado, bateria.&quot;);
break;
default:
console.log(&quot;G�nero musical inv�lido. Escolha entre: rock, jazz, cl�ssica
ou pop.&quot;);
}

let area = &quot;front-end&quot;; // Altere para &quot;front-end&quot;, &quot;back-end&quot; ou
&quot;mobile&quot;

switch (area.toLowerCase()) {
case &quot;front-end&quot;:
console.log(&quot;Cursos oferecidos na �rea de Front-End: HTML, CSS,
JavaScript, React, Vue.&quot;);
break;
case &quot;back-end&quot;:
console.log(&quot;Cursos oferecidos na �rea de Back-End: Node.js, Python,
Ruby, Java, APIs RESTful.&quot;);
break;
case &quot;mobile&quot;:

console.log(&quot;Cursos oferecidos na �rea de Mobile: Desenvolvimento
Android (Kotlin), Desenvolvimento iOS (Swift), React Native.&quot;);
break;
default:
console.log(&quot;�rea inv�lida. Escolha entre: front-end, back-end ou
mobile.&quot;);
}

let idade = 30; // Altere esse valor para testar diferentes idades

switch (true) {
case (idade &lt;= 12):
console.log(&quot;N�vel de Habilidade: Iniciante - Foco no aprendizado das
habilidades b�sicas.&quot;);
break;
case (idade &lt;= 18):
console.log(&quot;N�vel de Habilidade: Intermedi�rio - Aperfei�oamento das
habilidades e maior envolvimento em competi��es.&quot;);
break;
case (idade &lt;= 35):
console.log(&quot;N�vel de Habilidade: Avan�ado - Alto desempenho e
habilidade, com participa��o em competi��es profissionais.&quot;);
break;
case (idade &lt;= 50):
console.log(&quot;N�vel de Habilidade: Experiente - Manuten��o de alto
desempenho, embora com maior �nfase em preven��o de les�es.&quot;);
break;
case (idade &gt; 50):

console.log(&quot;N�vel de Habilidade: S�nior - Foco na manuten��o da
sa�de, flexibilidade e atividades de baixo impacto.&quot;);
break;
default:
console.log(&quot;Idade inv�lida.&quot;);
}

let categoria = &quot;intermedi�rio&quot;; // Altere para &quot;b�sico&quot;, &quot;intermedi�rio&quot;
ou &quot;avan�ado&quot;

switch (categoria.toLowerCase()) {
case &quot;b�sico&quot;:
console.log(&quot;Desafios Matem�ticos - N�vel B�sico: Opera��es simples
como adi��o, subtra��o, multiplica��o e divis�o.&quot;);
break;
case &quot;intermedi�rio&quot;:
console.log(&quot;Desafios Matem�ticos - N�vel Intermedi�rio: Equa��es,
radicais, porcentagens e fra��es.&quot;);
break;
case &quot;avan�ado&quot;:
console.log(&quot;Desafios Matem�ticos - N�vel Avan�ado: C�lculo
diferencial, integrais, �lgebra linear, e teoria dos n�meros.&quot;);
break;
default:
console.log(&quot;Categoria inv�lida. Escolha entre: b�sico, intermedi�rio ou
avan�ado.&quot;);
}
