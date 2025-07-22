import config from './config.js'
import gameState from './game-state.js'
import { updateApplePosition } from './render.js'

export const moveRight = () => {
    let left = gameState.position.left
    let top = gameState.position.top // not changed

    const rightMax = config.fence.width - config.apple.width

    if (left >= rightMax) {
        // do nothing
    } else {
        left = left + 5
        gameState.position.left = left

        updateApplePosition(left, top)
    }
}

export const moveLeft = () => {
    let left = gameState.position.left
    let top = gameState.position.top // not changed

    const leftMax = 0

    if (left > leftMax) {
        left = left - 5
        gameState.position.left = left

        updateApplePosition(left, top)
    }
}

export const moveDown = () => {
    let left = gameState.position.left // not changed
    let top = gameState.position.top

    const bottomMax = config.fence.height - config.apple.height //:TODO add 5 to the equation

    if (top >= bottomMax) {
        // do nothing
    } else {
        top = top + 5
        gameState.position.top = top

        updateApplePosition(left, top)
    }
}

export const moveUp = () => {
    let left = gameState.position.left // not changed
    let top = gameState.position.top

    const topMax = 0

    if (top > topMax) {
        top = top - 5
        gameState.position.top = top

        updateApplePosition(left, top)
    }
}
