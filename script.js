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
function abrirMenu(){

  const menu =
  document.getElementById("menuLateral");

  menu.classList.toggle("ativo");

}
function descobrirTamanho(){

    let altura = Number(document.getElementById("altura").value);
    let peso = Number(document.getElementById("peso").value);

    if(!altura || !peso){
        document.getElementById("resultadoProvador").innerHTML =
        "Preencha sua altura e peso.";
        return;
    }

    let tamanho = "";

    if(altura <= 160){

        if(peso <= 55){
            tamanho = "P";
        }else if(peso <= 68){
            tamanho = "M";
        }else if(peso <= 82){
            tamanho = "G";
        }else{
            tamanho = "GG";
        }

    }else if(altura <= 170){

        if(peso <= 60){
            tamanho = "P";
        }else if(peso <= 72){
            tamanho = "M";
        }else if(peso <= 86){
            tamanho = "G";
        }else{
            tamanho = "GG";
        }

    }else{

        if(peso <= 65){
            tamanho = "P";
        }else if(peso <= 78){
            tamanho = "M";
        }else if(peso <= 92){
            tamanho = "G";
        }else{
            tamanho = "GG";
        }

    }

    document.getElementById("resultadoProvador").innerHTML =

    "💖 Recomendamos o tamanho <strong>"+tamanho+"</strong><br><br>Essa é uma sugestão baseada na altura e no peso informados.";
}
