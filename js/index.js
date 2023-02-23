import resetControls from "./controls.js"//defaul import

//named import
import { countdown, resetTimer } from "./timer.js"

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonSet = document.querySelector('.set')
const buttonStop = document.querySelector('.stop')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerDisplayTimeOut

buttonPlay.addEventListener('click', function(){
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  countdown()
})

buttonPause.addEventListener('click', function(){
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  clearTimeout(timerDisplayTimeOut)

})

buttonStop.addEventListener('click', function(){
  resetControls()
  resetTimer()
})

buttonSoundOn.addEventListener('click', function(){
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
})

buttonSoundOff.addEventListener('click', function(){
  buttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
})

buttonSet.addEventListener('click', function(){
  let newMinutes = prompt('Quantos minutos?')
  if(!newMinutes) {
    resetTimer()
    return
  }
  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
})