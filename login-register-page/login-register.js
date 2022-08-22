// CHANGE WINDOW TO LOGIN

let registerWindow = document.getElementById('registration-section')
let loginWindow = document.getElementById('login-section')


document.getElementById('change-window-to-login').addEventListener('click', () => {
    loginWindow.style.display = 'flex'
    registerWindow.style.display = 'none'
})

document.getElementById('change-window-to-registration').addEventListener('click', () => {
    loginWindow.style.display = 'none'
    registerWindow.style.display = 'flex'
})