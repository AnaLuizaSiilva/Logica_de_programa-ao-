
let plataformas = prompt(&quot;Qual plataforma você gostaria de utilizar? cmd

ou linux:&quot;)

if (plataformas == &quot;cmd&quot; || plataformas == &quot;CMD&quot;){
console.log(&quot;Modo cmd ativado&quot;)

let cmd = prompt(&quot;Qual comando você gostaria de aprender?:&quot;)
switch (cmd){

case&quot;Dir&quot;:
console.log(&quot;utizado para acessar uma pasta e verificar oque tem
dentro&quot;)
break;
case &quot;Move&quot;:
console.log(&quot;Mover o Arquivo&quot;)
break;
case&quot;cd ..&quot;:
console.log(&quot;Voltar para o diretório&quot;)
break;
case&quot;Cd&quot;:
console.log(&quot;Acessar o diretório&quot;)
break;
case&quot;cls&quot;:
console.log(&quot;Limpar a tela cmd&quot;)

break;
case&quot;mkdir&quot;:
console.log(&quot;Criar um diretorio&quot;)
break;
case&quot;Rmdir&quot;:
console.log(&quot;Remover o diretorio&quot;)
break;
case&quot;Echo&quot;:
console.log(&quot;Criar um arquivo&quot;)
break;
case&quot;Del&quot;:
console.log(&quot;Apagar o arquivo&quot;)
break;
case&quot;Ren&quot;:
console.log(&quot;Renomear Pasta&quot;)
break;
case&quot;Copy&quot;:
console.log(&quot;Copiar um arquivo para outra pasta &quot;)
break;
case&quot;exit&quot;:
console.log(&quot;Fechar o terminal&quot;)
break;
default:
console.log(&quot;Código não encontrado &quot;)
}
}

else if (plataformas == &quot;linux&quot; || &quot;LINUX”)
console.log(&quot;Modo linux ativado&quot;)

let linux = prompt(&quot;Qual comando você gostaria de aprender?:&quot;)
switch (linux){

case&quot;mkdir&quot;:
console.log(&quot;Criar um diretórios&quot;)
break;
case&quot;ls&quot;:
console.log(&quot;Acessar um diretório e verificar o que tem dentro&quot;)
break;
case&quot;cd&quot;:
console.log(&quot;Entrar no diretório&quot;)
break;
case&quot;cd ..&quot;
console.log(&quot;Voltar para o diretório&quot;)
break;
case&quot;Rm&quot;:
console.log(&quot;Remover um diretório&quot;)
break;
case&quot;Clear&quot;:
console.log(&quot;Limpar a tela do terminal&quot;)
break;
case&quot;Cp&quot;:
console.log(&quot;Copiar um arquivo&quot;)

break;
case&quot;mv&quot;:
console.log(&quot;Mover um arquivo para outro diretório&quot;)
break;
case&quot;cat&quot;:
console.log(&quot;Ver o que tem dentro do arquivo&quot;)
break;
case&quot;echo&quot;:
console.log(&quot;Exibir um texto no terminal&quot;)
break;
default:
console.log(&quot;código não encontrado&quot;)
}