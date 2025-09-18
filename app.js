// Funções para recuperar os IDs dos elemnentos Sortear, Quantidade de numeros e até qual numero sortear
function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);


// Proteção para evitar valor do número inicial maior que o valor do número máximo
    if (de >= ate) {
        alert('O valor do "Número inicial" deve ser menor que o valor do "Número final".');
        reiniciar();
        desabilitarBotaoReiniciar();
        return; 
    }  


// Proteção para o caso da quantidade de números a serem sorteados for maior que o range de números que podem ser sorteados
    if(quantidade > (ate - de + 1)) {
        alert ('Quantidade de números a serem sorteados e menor que o intervalo de números, verifique e tente novamente!');
        reiniciar();
        desabilitarBotaoReiniciar();
        return;
}

    let sorteados = []; // Array para armazenar os numeros sorteados
    let numero; 

    for(let i = 0; i < quantidade; i++) // Laço para sortear a quantidade de numeros desejada 
        {
        numero = obterNumeroAleatorio(de, ate); 
        while(sorteados.includes(numero)) { // Verifica se o numero ja foi sorteado
            numero = obterNumeroAleatorio(de, ate); // Se ja foi sorteado, gera outro numero 
        }  
        sorteados.push(numero);  // Adiciona o numero sorteado no array
   }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>` // Exibe os numeros sorteados na tela
    habilitarBotaoReiniciar(); // Chama a função para alterar o status do botão Sortear
}



// Função para gerar o numero aleatorio
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Função para habilitar botão
function habilitarBotaoReiniciar() {
    let botao = document.getElementById('btn-reiniciar');
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
    botao.disabled = false; 
}

// Função para desabilitar botão
function desabilitarBotaoReiniciar() {
    let botao = document.getElementById('btn-reiniciar');
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
    botao.disabled = true;
}

// Função para reiniciar a página
function reiniciar() {
    document.getElementById('quantidade').value = ''; // Limpa os campos de input
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    desabilitarBotaoReiniciar();
}
