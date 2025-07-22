const appleShooter = (app) => {
    const div = document.createElement('div')

    div.style.height = '500px'
    div.style.width = '500px'
    div.style.border = '1px solid blue'

    app.appendChild(div)
}

export default appleShooter
