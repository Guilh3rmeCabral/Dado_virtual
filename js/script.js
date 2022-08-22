let numeroSorteado = 0
let imgDado = document.querySelector('#imgDado');
let btnSortear = document.querySelector('#btnSortear');
let sorteado = document.querySelector('#sorteado');
let dadoRolando = document.querySelector('#dadoRolando');

btnSortear.addEventListener('click', function() {
    //Animação no css
    imgDado.classList.add('animar');
    sorteado.classList.add('aparecer');

    //Efeito sonoro do dado
    dadoRolando.play();

    //Ocultaçãop do botão
    btnSortear.style.display = 'none';

    //Executando as ações após 1.75s
    setTimeout(function() {

        //Armazenar numero sorteado
        numeroSorteado = getRandomInt(1,6);

        //Escolher a face do dado de acordo com o num sorteado
        imgDado.setAttribute('src' , '../imagens/'+ numeroSorteado+'.png');

        //Escrever na tela num sorteado
        sorteado.innerHTML = numeroSorteado;

        //Exibir botão
        btnSortear.style.display = 'inline-block';

        //retirar animação
        imgDado.classList.remove('animar');
        sorteado.classList.remove('aparecer');

    }, 1750)

})


// Função que vai gerar um número em Random Int (min e max)
function getRandomInt(min, max) 
{
    min = Math.ceil(min); // Arredonda para cima ceil = teto
    max = Math.floor(max); // Arredonda para baixo floor = piso
    return Math.floor(Math.random() * (max - min + 1)) + min;
}