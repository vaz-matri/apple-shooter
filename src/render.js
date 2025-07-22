let apple

export const registerApple = (el) => {
    apple = el
}

export const updateApplePosition = (left, top) => {
    apple.style.left = left + 'px'
    apple.style.top = top + 'px'
}
