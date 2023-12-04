import state from "./state.js"
import { reset } from "./actions.js"

export const minutos = document.getElementById('minutes')

export const segudos = document.getElementById('second')

export function countDown() {
    /* recursão */

    clearTimeout(state.countdownId)
    
    if(!state.isRunning) {
        return
    }

    let minutes = Number(minutos.textContent)
    let seconds = Number(segudos.textContent)

    seconds--

    if (seconds < 0) {
        seconds = 59
        minutes--
    }

    if (minutes < 0) {
        reset()
        return
    }

    updateDisplay(minutes,seconds)

    /* CallBack */
    state.countdownId = setTimeout(() => countDown(), 1000);
}

export function updateDisplay(minutes,seconds) {

    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds


    minutos.textContent = String(minutes).padStart(2,'0')
    segudos.textContent = String(seconds).padStart(2,'0')
}