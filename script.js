// report window posts-container

const reportButton = document.getElementsByClassName('fa-ellipsis')
const postOptions = document.getElementsByClassName('post-options') 
const closeSign = document.getElementsByClassName('close-sign')
const reportText = document.getElementsByClassName('report')

for (let z = 0; z < reportButton.length; z++) {
    reportButton[z].addEventListener('click', () => postOptions[z].style.display ='block')
    closeSign[z].addEventListener('click', () => postOptions[z].style.display = 'none')
    reportText[z].addEventListener('click', () => document.querySelector('#report-background').style.display = 'flex')
}

document.querySelector('#report-background').addEventListener('click',
function() {
    document.querySelector('#report-background').style.display = 'none'
})

// messages window at index.html

const message = document.getElementsByClassName('message')
const circlesMessage = document.getElementsByClassName('circle-message')

document.getElementById('message-icon').addEventListener('click',
function() {
    document.querySelector('#notification').style.display = 'none'
    document.querySelector('#messages').style.display = 'block'
    document.querySelector('#message-icon').style.color = 'gray'
})

document.querySelector('#close-messages').addEventListener('click',
function() {
    document.querySelector('#messages').style.display = 'none'
    document.querySelector('#message-icon').style.color = "black"
})

for (let n = 0; n < message.length; n++) {
    message[n].addEventListener('click', () => {
        document.querySelector('.message-content').style.fontWeight = 'normal'
        document.querySelector('.message-content').style.color = 'black'
        circlesMessage[n].style.display = 'none'
    })
}

// NOTIFICATIONS WINDOW AT INDEX.HTML

const notificationSign = document.getElementById('notification-open') 
const infoTexts = document.getElementsByClassName('info-text')
const infoContent = document.getElementsByClassName('info-content')
const circlesNotification = document.getElementsByClassName('circle-notification')

// displaying window

notificationSign.addEventListener('click', () => {
    document.getElementById('info').style.display = 'block'
    document.getElementById('notification-icon').style.display = 'none'
    notificationSign.style.color = 'gray'
})

// closing window

document.getElementById('close-notifications').addEventListener('click', () => {
    document.querySelector('#info').style.display = 'none'
    notificationSign.style.color = "black"
})

for (let i = 0; i < infoTexts.length; i++) {
    infoTexts[i].addEventListener('click', () => {
        circlesNotification[i].style.display = 'none'
        infoContent[i].style.fontWeight = 'normal'
    })
}

// like animation

const likesList = document.getElementsByClassName('fa-thumbs-up')

for (let i = 0; i < likesList.length; i++) {
    likesList[i].addEventListener('click', () => likesList[i].classList.toggle('animation-like'))
}