let total = 0;
let frete = 0;
let desconto = 0;

function adicionarCarrinho(produto, preco){

  let lista =
  document.getElementById("listaCarrinho");

  let item =
  document.createElement("li");

  item.innerHTML = `
    ${produto} - R$ ${preco.toFixed(2)}
    <button onclick="removerItem(this, ${preco})">
      ❌
    </button>
  `;

  lista.appendChild(item);

  total += preco;

  atualizarTotal();

}

function removerItem(botao, preco){

  botao.parentElement.remove();

  total -= preco;

  if(total < 0){
    total = 0;
  }

  atualizarTotal();

}

function calcularFrete(){

  let cep =
  document.getElementById("cep").value;

  if(cep.length < 8){

    alert("Digite um CEP válido");

    return;

  }

  frete = 15;

  if(cep.startsWith("0")){
    frete = 25;
  }

  document.getElementById("frete").innerHTML =
  "Frete: R$ " + frete.toFixed(2);

  atualizarTotal();

}

function aplicarCupom(){

  let cupom =
  document.getElementById("cupom").value;

  desconto = 0;

  if(cupom.toUpperCase() === "HILLARY10"){

    desconto = total * 0.10;

    alert("Cupom aplicado! 💖");

  } else {

    alert("Cupom inválido");

  }

  document.getElementById("desconto").innerHTML =
  "Desconto: R$ " +
  desconto.toFixed(2);

  atualizarTotal();

}

function atualizarTotal(){

  let totalFinal =
  total + frete - desconto;

  if(totalFinal < 0){
    totalFinal = 0;
  }

  document.getElementById("total").innerHTML =
  "Total: R$ " +
  totalFinal.toFixed(2);

}

function buscarProduto(){

  let pesquisa =
  document.getElementById("pesquisa")
  .value
  .toLowerCase();

  let cards =
  document.querySelectorAll(".card");

  cards.forEach(card => {

    if(
      card.innerText
      .toLowerCase()
      .includes(pesquisa)
    ){

      card.style.display = "block";

    } else {

      card.style.display = "none";

    }

  });

}
