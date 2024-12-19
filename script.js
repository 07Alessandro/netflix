let botaoSom =  document.querySelector('.botao-som')
let video = document.querySelector('.video')
let botao = document.querySelector('.link-info')
let modal = document.querySelector('.modal')
let audio = document.querySelector('.audio')


// << LIGAR O SOM>> 
botaoSom.addEventListener('click', ligaSom)

function ligaSom() {
    video.muted = !video.muted
}

// MOSTRAR O MODAL

botao.addEventListener('click', mostarModal)


function mostarModal() {
modal.style.display = 'block'
}

modal.addEventListener('click',esconderModal )

function esconderModal() {
modal.style.display = 'none'
}

// << TOCAR O TUMTUM >>

window.addEventListener('load', tocarAudio)

function tocarAudio() {
 audio.play()
}