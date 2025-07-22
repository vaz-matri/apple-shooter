const appleShooter = (app) => {
    const div = document.createElement('div')

    div.style.height = '500px'
    div.style.width = '500px'
    div.style.border = '1px solid blue'
    div.style.position = 'relative'
    div.tabIndex = 0

    const apple = document.createElement('div')
    apple.style.height = '50px'
    apple.style.width = '50px'
    apple.style.background = 'green'
    apple.style.left = '10px'
    apple.style.top = '10px'
    apple.style.position = 'absolute'

    div.appendChild(apple)

    app.appendChild(div)

    div.addEventListener('keydown', (event) => {
        console.log('log key', event.key)
    })
}

export default appleShooter
