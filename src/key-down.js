import { moveRight } from './game-logic.js'

const keyPress = (fence) => {
    fence.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            moveRight()
        }
    })
}

export default keyPress
