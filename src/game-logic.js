import config from './config.js'
import gameState from './game-state.js'
import { updateApplePosition } from './render.js'

export const moveRight = (cb) => {
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
