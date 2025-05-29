let num1 = Number(prompt(&quot;Digite o primeiro numero:&quot;))
let num2 = Number(prompt(&quot;Digite o segundo numero:&quot;))
let operaçao = prompt(&quot;Qual a operaçao? Digite apenas simbolos:&quot;)
let resultado = 0

function soma (num1, num2){
return resultado = num1 + num2
}
function subtraçao (num1, num2){
return resultado = num1 - num2
}
function divisao (num1, num2){
return resultado = num1 / num2
}
function multiplicacao (num1, num2){
return resultado = (num1 * num2)
}

switch(operaçao){
case &quot;+&quot;:
resultado = soma(num1,num2)
break

case &quot;-&quot;:
resultado = subtracao(num1,num2)
break;
case &quot;/&quot;:

resultado = divisao(num1,num2)
break;
case &quot;*&quot;:
resultado = multiplicacao(num1,num2)
break;
}

console.log(&quot;O resultado é&quot;, resultado)
