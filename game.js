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
    apple.style.left = `${gameState.position.left}px`
    apple.style.top = `${gameState.position.top}px`
    apple.style.position = 'absolute'

    div.appendChild(apple)

    app.appendChild(div)

    div.addEventListener('keydown', (event) => {
        console.log('log key', event.key)
    })
}

export default appleShooter
