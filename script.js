let produtos = [

{

nome:"Vestido Floral",
preco:59.90,
estoque:5,
imagem:"https://via.placeholder.com/300x350.png?text=Vestido"

},

{

nome:"Conjunto Chic",
preco:79.90,
estoque:3,
imagem:"https://via.placeholder.com/300x350.png?text=Conjunto"

}

];

let total = 0;
let desconto = 0;
let frete = 0;

renderizarCatalogo();

function renderizarCatalogo(){

let catalogo =
document.getElementById(
"catalogoProdutos"
);

catalogo.innerHTML = "";

produtos.forEach((produto,index)=>{

catalogo.innerHTML += `

<div class="card">

<img src="${produto.imagem}">

<h2>${produto.nome}</h2>

<p>
R$ ${produto.preco}
</p>

<p>
Estoque:
${produto.estoque}
</p>

<select id="tamanho${index}">

<option>P</option>
<option>M</option>
<option>G</option>
<option>U</option>

</select>

<button
onclick="adicionarCarrinho(${index})">

Adicionar ao Carrinho

</button>

</div>

`;

});

}

function adicionarCarrinho(index){

let produto = produtos[index];

if(produto.estoque <= 0){

alert("Produto esgotado ❌");
return;

}

produto.estoque--;

renderizarCatalogo();

let tamanho =
document.getElementById(
"tamanho"+index
).value;

let lista =
document.getElementById(
"carrinho"
);

let item =
document.createElement("li");

item.innerHTML =

`${produto.nome}
- Tamanho ${tamanho}
- R$ ${produto.preco}`;

lista.appendChild(item);

total += produto.preco;

atualizarTotal();

}

function aplicarCupom(){

let cupom =
document.getElementById(
"cupom"
).value;

desconto = 0;

if(cupom == "HILLARY10"){

desconto =
total * 0.10;

}

document.getElementById(
"desconto"
).innerHTML =

"Desconto: R$ " +
desconto.toFixed(2);

atualizarTotal();

}

function calcularFrete(){

let cep =
document.getElementById(
"cep"
).value;

frete = 15;

if(cep.startsWith("0")){

frete = 25;

}

document.getElementById(
"frete"
).innerHTML =

"Frete: R$ " +
frete.toFixed(2);

atualizarTotal();

}

function atualizarTotal(){

let totalFinal =
total + frete - desconto;

document.getElementById(
"total"
).innerHTML =

"Total: R$ " +
totalFinal.toFixed(2);

}

function buscarProduto(){

let pesquisa =
document.getElementById(
"pesquisa"
).value.toLowerCase();

let cards =
document.querySelectorAll(".card");

cards.forEach(card=>{

if(
card.innerText.toLowerCase()
.includes(pesquisa)
){

card.style.display="block";

}else{

card.style.display="none";

}

});

}
