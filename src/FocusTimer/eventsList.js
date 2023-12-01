import * as actions from './actions.js'

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