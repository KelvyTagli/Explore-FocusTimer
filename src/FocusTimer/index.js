import state from './state.js'
import * as events from './eventsList.js'
import * as timer from './timer.js'

export function start(minutes, seconds) {
    state.minutes = minutes
    state.seconds = seconds

    timer.updateDisplay()

    events.eventControls()
}