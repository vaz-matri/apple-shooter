import { moveLeft, moveRight } from './game-logic.js'

const keyPress = (fence) => {
    fence.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            moveRight()
        } else if (event.key === 'ArrowLeft') {
            moveLeft()
        }
    })
}

export default keyPress
