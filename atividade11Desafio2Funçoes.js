function login() {

let usuarioCorreto = &quot;admin&quot;;
let senhaCorreta = &quot;1211&quot;;

let usuariodigitado = prompt(&quot;Digite seu nome de usuário: &quot;);
let senhadigitada = prompt(&quot;Digite sua senha: &quot;);
let resultado = &quot;&quot;;

let usuario1 = &quot;pessoa 1&quot;, senha1 = &quot;luiza&quot;
let usuario2 = &quot;pessoa 2&quot;, senha2 = &quot;ana&quot;
let usuario3 = &quot;pessoa 3&quot;, senha3 = &quot;banana&quot;
let usuario4 = &quot;pessoa 4&quot;, senha4 = &quot;bolha&quot;
let usuario5 = &quot;pessoa 5&quot;, senha5 = &quot;silva&quot;
let usuario6 = &quot;pessoa 6&quot;, senha6 = &quot;gol&quot;
let usuario7 = &quot;pessoa 7&quot;, senha7 = &quot;pote&quot;
let usuario8 = &quot;pessoa 8&quot;, senha8 = &quot;van&quot;
let usuario9 = &quot;pessoa 9&quot;, senha9 = &quot;tomate&quot;

function verificarlogin(usuario, senha) {
let mensagem = &quot;&quot;;

if (usuariodigitado === usuario1 &amp;&amp; senhadigitada === senha1) {
mensagem = &quot;Login efetuado com sucesso!&quot;;
} else if (usuariodigitado === usuario2 &amp;&amp; senhadigitada === senha2) {
mensagem = &quot;Login efetuado com sucesso!&quot;;

} else if (usuariodigitado === usuario3 &amp;&amp; senhadigitada === senha3) {
mensagem = &quot;Login efetuado com sucesso!&quot;;
} else if (usuariodigitado === usuario4 &amp;&amp; senhadigitada === senha4) {
mensagem = &quot;Login efetuado com sucesso!&quot;;
} else if (usuariodigitado === usuario5 &amp;&amp; senhadigitada === senha5) {
mensagem = &quot;Login efetuado com sucesso!&quot;;
} else if (usuariodigitado === usuario6 &amp;&amp; senhadigitada === senha6) {
mensagem = &quot;Login efetuado com sucesso!&quot;;
} else if (usuariodigitado === usuario7 &amp;&amp; senhadigitada === senha7) {
mensagem = &quot;Login efetuado com sucesso!&quot;;
} else if (usuariodigitado === usuario8 &amp;&amp; senhadigitada === senha8) {
mensagem = &quot;Login efetuado com sucesso!&quot;;
} else if (usuariodigitado === usuario9 &amp;&amp; senhadigitada === senha9) {
mensagem = &quot;Login efetuado com sucesso!&quot;;
} else {
mensagem = &quot;Login negado. Usuário ou senha incorretos.&quot;;
}

return mensagem;
}

resultado = verificarlogin(usuariodigitado, senhadigitada);
console.log(resultado);
const usuarioDigitado = prompt(&quot;Digite o usuário:&quot;);
const senhaDigitada = prompt(&quot;Digite a senha:&quot;);

if (usuarioDigitado === usuarioCorreto &amp;&amp; senhaDigitada === senhaCorreta) {
console.log(&quot;Login efetuado com sucesso!&quot;);
} else {

console.log(&quot;Login negado. Usuário ou senha incorretos.&quot;);
}
}
login();
