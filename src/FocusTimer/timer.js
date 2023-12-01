import state from "./state.js"

const minute = document.getElementById('minutes')

const second = document.getElementById('second')

export function updateDisplay(minutes,seconds) {

    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds


    minute.textContent = String(minutes).padStart(2,'0')
    second.textContent = String(seconds).padStart(2,'0')
}