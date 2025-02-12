// Seleciona os elementos do HTML
const botao = document.getElementById("botao");
const numero = document.getElementById("numero");

// Inicializa a variável do contador
let contador = 0;



console.log(contador)
contador = 1

console.log(contador + 100)
contador = contador + 50
console.log(contador * 5)


// Adiciona um evento de clique ao botão
botao.addEventListener("click", () => {
    contador++; // Incrementa o valor do contador
    numero.textContent = contador; // Atualiza o número na tela
});
