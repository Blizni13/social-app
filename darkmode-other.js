let enableDarkMode = () => {
    document.body.classList.add('darkmode')
}

let disableDarkMode = () => {
    document.body.classList.remove('darkmode')
}

if (localStorage.darkMode === 'enabled') {
    enableDarkMode()
}

