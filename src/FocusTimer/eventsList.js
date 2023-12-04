import * as actions from './actions.js'
import state from './state.js'
import * as element from './timer.js'

const control = document.getElementById('controls')

export function eventControls() {
    control.addEventListener('click', (event) => {
        
        const action = event.target.dataset.action

        if (typeof actions[action] != 'function') {
            return
        }

        actions[action]()
    })
}

export function setMinutes() {
    element.minutos.addEventListener('focus', () => {
        element.minutos.textContent = ''
    })

    element.minutos.onkeypress = (event) => /\d/.test(event.key)

    element.minutos.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time

        state.minutes = time
        state.seconds = 0

        element.updateDisplay()
        element.minutos.removeAttribute('contenteditable')
    })
}