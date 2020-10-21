const utterance = new SpeechSynthesisUtterance()

const startSpeech = () => {
    const valueInput = document.querySelector('#input').value
    const configLanguage = document.querySelector('.language').value
    const configSpeed = document.querySelector('.speed').value

    utterance.lang = configLanguage
    utterance.rate = configSpeed
    utterance.text = valueInput

    if(speechSynthesis.paused === false){
        speechSynthesis.speak(utterance)

    }else {
        speechSynthesis.resume()        
    }
}
const buttonStart = document.querySelector('#btn-start')
buttonStart.addEventListener('click', startSpeech)


const pauseSpeech = () => {
    speechSynthesis.pause()
    console.log(speechSynthesis)
}
const buttonPause = document.querySelector('#btn-pause')
buttonPause.addEventListener('click', pauseSpeech)


const reloadSpeech = () => {
    speechSynthesis.cancel()
}
const buttonReload = document.querySelector('#btn-reload')
buttonReload.addEventListener('click', reloadSpeech)