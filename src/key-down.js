import { moveDown, moveLeft, moveRight, moveUp } from './game-logic.js'

const keyPress = (fence) => {
    fence.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowRight':
                moveRight()
                break
            case 'ArrowLeft':
                moveLeft()
                break
            case 'ArrowUp':
                moveUp()
                break
            case 'ArrowDown':
                moveDown()
                break
        }
    })
}

export default keyPress
