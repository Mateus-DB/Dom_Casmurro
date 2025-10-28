const botaoPlayPause = document.getElementById('play-pause');

const botaoProximoCapitulo = document.getElementById('proximo');

const botaoCapituloAnterior = document.getElementById('anterior');

const textoCapitulo = document.getElementById('capitulo');

const audio = document.getElementById('audio-capitulo');

const qtdCapitulos = 10;

let tocando = false;
let capituloAtual = 1;

const tocarFaixa = () => {
    audio.play();
    tocando = true;

    botaoPlayPause.classList.add('tocando')

}

const pausarFaixa = () => {
    audio.pause();
    tocando = false;

    botaoPlayPause.classList.remove('tocando')
}

const tocarOuPausar = () => {
    if (tocando) {
        pausarFaixa()
    } else {
        tocarFaixa()
    }
}

const proximoCapitulo = () => {
    pausarFaixa()
    if (capituloAtual < qtdCapitulos) {
        capituloAtual = capituloAtual + 1
    } else {
        capituloAtual = 1
    }

    audio.src = './audio/' + capituloAtual + '.mp3'
    textoCapitulo.textContent = 'Capítulo' + " " + capituloAtual


}

const capituloAnterior = () => {
    pausarFaixa()
    if (capituloAtual === 1) {
        capituloAtual = qtdCapitulos
    } else {
        capituloAtual = capituloAtual - 1
    }

    audio.src = './audio/' + capituloAtual + '.mp3'
    textoCapitulo.textContent = 'Capítulo' + " " + capituloAtual


}


botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoProximoCapitulo.addEventListener('click', proximoCapitulo);
botaoCapituloAnterior.addEventListener('click', capituloAnterior);