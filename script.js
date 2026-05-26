let total = 0;
let frete = 0;
let desconto = 0;

function adicionarCarrinho(produto, preco){

  const lista =
  document.getElementById("listaCarrinho");

  const item =
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

  const cep =
  document.getElementById("cep").value;

  if(cep.length < 8){

    alert("Digite um CEP válido.");

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

  const cupom =
  document.getElementById("cupom")
  .value
  .toUpperCase();

  desconto = 0;

  if(cupom === "HILLARY10"){

    desconto = total * 0.10;

    alert("Cupom aplicado com sucesso! 💖");

  }else{

    alert("Cupom inválido.");
  }

  document.getElementById("desconto").innerHTML =
  "Desconto: R$ " + desconto.toFixed(2);

  atualizarTotal();
}

function atualizarTotal(){

  let totalFinal =
  total + frete - desconto;

  if(totalFinal < 0){
    totalFinal = 0;
  }

  document.getElementById("total").innerHTML =
  "Total: R$ " + totalFinal.toFixed(2);
}

function buscarProduto(){

  const pesquisa =
  document.getElementById("pesquisa")
  .value
  .toLowerCase();

  const cards =
  document.querySelectorAll(".card");

  cards.forEach(card => {

    const texto =
    card.innerText.toLowerCase();

    if(texto.includes(pesquisa)){

      card.style.display = "block";

    }else{

      card.style.display = "none";
    }

  });

}
