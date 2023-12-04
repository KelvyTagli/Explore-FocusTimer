import state from "./state.js";
import * as timer from './timer.js'

export function toggleRunning() {

    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countDown();
}

export function reset() {
    
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function set() {
    timer.minutos.setAttribute('contenteditable',true)
    timer.minutos.focus()
}

export function toggleMusic(){
    
    state.isMute = document.documentElement.classList.toggle('music-on')
}