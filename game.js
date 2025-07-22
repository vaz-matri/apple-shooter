import config from './src/config.js'
import keyDown from './src/key-down.js'
import { registerApple } from './src/render.js'

const appleShooter = (app) => {
    const div = document.createElement('div')

    div.style.height = `${config.fence.height}px`
    div.style.width = `${config.fence.width}px`
    div.style.border = '1px solid blue'
    div.style.position = 'relative'
    div.tabIndex = 0

    const apple = document.createElement('div')
    apple.style.height = `${config.apple.height}px`
    apple.style.width = `${config.apple.width}px`
    apple.style.background = 'green'
    apple.style.position = 'absolute'

    registerApple(apple)

    keyDown(div)

    div.appendChild(apple)
    app.appendChild(div)
}

export default appleShooter
