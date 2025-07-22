const gameState = {
    fence: {
        height: 500,
        width: 500
    },
    apple: {
        height: 50,
        width: 50
    },
    position: {
        left: 10,
        top: 10
    }
}

const appleShooter = (app) => {
    const div = document.createElement('div')

    div.style.height = `${gameState.fence.height}px`
    div.style.width = `${gameState.fence.width}px`
    div.style.border = '1px solid blue'
    div.style.position = 'relative'
    div.tabIndex = 0

    const apple = document.createElement('div')
    apple.style.height = `${gameState.apple.height}px`
    apple.style.width = `${gameState.apple.width}px`
    apple.style.background = 'green'
    apple.style.position = 'absolute'

    const renderMove = () => {
        console.log('log left position', gameState.position.left)

        apple.style.left = `${gameState.position.left}px`
        apple.style.top = `${gameState.position.top}px`
    }

    div.appendChild(apple)

    renderMove()

    app.appendChild(div)

    div.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            let left = gameState.position.left
            if (left >= (gameState.fence.width - gameState.apple.width)) {
                // do nothing
            } else {
                left = left + 5
                gameState.position.left = left

                renderMove()
            }
        }
    })
}

export default appleShooter
