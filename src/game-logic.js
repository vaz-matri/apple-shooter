import config from './config.js'
import gameState from './game-state.js'
import { updateApplePosition } from './render.js'

export const moveRight = () => {
    let left = gameState.position.left

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

    const leftMax = 0

    if (left > leftMax) {
        left = left - 5
        gameState.position.left = left

        updateApplePosition(left, top)
    }
}
