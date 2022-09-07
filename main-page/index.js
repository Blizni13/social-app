// UPLOADING PHOTO/VIDEO

let uploadButton = document.getElementById('upload')
let uploadWindow = document.getElementById('upload-files')

uploadButton.onclick = function() {
    uploadWindow.style.display = 'block'
}

window.onclick = function(event) {
    if (event.target !== uploadButton && 
        event.target !== document.getElementsByTagName('textarea')[0] &&
        event.target !== document.getElementsByTagName('form')[0] &&
        event.target !== document.getElementsByTagName('input')[1] &&
        event.target !== document.getElementsByTagName('label')[1] &&
        event.target !== uploadWindow) {
        uploadWindow.style.display = 'none'
    }
}

// ALL ICONS WITH NUMBERS (TO DISPLAY AMOUNT OF MESSAGES / NOTIFICATIONS)

const displayNumberIcons = document.getElementsByClassName('notification-icon')

// COUNT NUMBER OF NOTIFICATIONS

let numOfNotifications = 0
let notificationNumber = document.getElementsByClassName('info-content')

for (let i = 0; i < notificationNumber.length; i++) {
    notificationNumber[i].style.fontWeight = 'bold'
}

for(let i = 0; i < notificationNumber.length; i++) {
    if (notificationNumber[i].style.fontWeight === 'bold') numOfNotifications += 1
}

displayNumberIcons[0].innerText = numOfNotifications

// COUNT NUMBER OF MESSAGES

let numOfMessages = 0
let allMessages = document.getElementsByClassName('message')

for (let i = 0; i < allMessages.length; i++) {
    allMessages[i].style.fontWeight = 'bold'
}

for (let i = 0; i < allMessages.length; i++) {
    if (allMessages[i].style.fontWeight === 'bold') numOfMessages += 1
}

displayNumberIcons[1].innerText = numOfMessages

// NOTIFICATIONS WINDOW AT INDEX.HTML

const notificationSign = document.getElementById('notification-open') 
const infoWindow = document.getElementById('info')
const infoTexts = document.getElementsByClassName('info-text')
const infoContent = document.getElementsByClassName('info-content')
const circlesNotification = document.getElementsByClassName('circle-notification')

// open window

notificationSign.addEventListener('click', () => {
    infoWindow.style.display = 'block'
    displayNumberIcons[0].style.display = 'none'
    document.getElementById('messages').style.display = 'none'
    document.getElementById('other-pages').style.display ='none'
    notificationSign.style.color = 'gray'
    if (document.getElementById('message-open').style.color !== 'black') {
    document.getElementById('message-open').style.color = 'black'
    }
})

// close window

document.getElementById('close-notifications').addEventListener('click', () => {
    infoWindow.style.display = 'none'
    notificationSign.style.color = "black"
})

for (let i = 0; i < infoTexts.length; i++) {
    infoTexts[i].addEventListener('click', () => {
        infoContent[i].style.fontWeight = 'normal'
        circlesNotification[i].style.display = 'none'
        if (numOfNotifications > 0) {
        numOfNotifications -= 1
        }
    })
}

// MESSAGE WINDOW

const messageSign = document.getElementById('message-open')
const messageWindow = document.getElementById('messages')
const messagesContent = document.getElementsByClassName('message-content')
const circlesMessage = document.getElementsByClassName('circle-message')

// open window

messageSign.addEventListener('click',
function() {
    messageWindow.style.display = 'block'
    displayNumberIcons[1].style.display = 'none'
    document.getElementById('info').style.display = 'none'
    document.getElementById('other-pages').style.display = 'none'
    messageSign.style.color = 'gray'
    if (document.getElementById('notification-open').style.color !== 'black') {
    document.getElementById('notification-open').style.color = 'black'
    }
})

// close window

document.querySelector('#close-messages').addEventListener('click',
function() {
    messageWindow.style.display = 'none'
    messageSign.style.color = "black"
})

// read message

for (let i = 0; i < allMessages.length; i++) {
    allMessages[i].addEventListener('click', () => {
        allMessages[i].style.fontWeight = 'normal'
        circlesMessage[i].style.display = 'none'
        messagesContent[i].style.color = 'black'
        if (numOfMessages > 0) {
        numOfMessages -= 1
        }
    })
}

// OTHER PAGES WINDOW

let otherPagesWindow = document.getElementById('other-pages')
let openPagesWindow = document.getElementById('other-pages-open')

openPagesWindow.onclick = function() {
    document.getElementById('info').style.display = 'none'
    document.getElementById('messages').style.display = 'none'
    document.getElementById('message-open').style.color = 'black'
    document.getElementById('notification-open').style.color = 'black'
    otherPagesWindow.style.display = 'block'
}

window.addEventListener('click', (event) => {
    if (event.target !== openPagesWindow) {
        otherPagesWindow.style.display = 'none'
    }
})

// REPORT WINDOW

const reportButton = document.getElementsByClassName('post-options-button')
const postOptions = document.getElementsByClassName('post-options')
const reportText = document.getElementsByClassName('report')

for (let z = 0; z < reportButton.length; z++) {
    reportButton[z].onclick = () => {
        postOptions[z].style.display = 'flex'
    }
    reportText[z].addEventListener('click', () => {document.querySelector('#report-background').style.display = 'flex'; document.getElementsByTagName('body')[0].style.overflowY = 'hidden'})
}

window.addEventListener('click', (event) => {
    if ([...postOptions].every(el => el !== event.target) && [...reportButton].every(el => el !== event.target)) {
        for (let i = 0; i < postOptions.length; i++) {
            postOptions[i].style.display = 'none'
        }
    }
})

document.querySelector('#report-background').addEventListener('click',
function() {
    document.querySelector('#report-background').style.display = 'none'
    document.getElementsByTagName('body')[0].style.overflowY = 'auto'
})

// LIKE ANIMATION

const likesList = document.getElementsByClassName('fa-thumbs-up')

for (let i = 0; i < likesList.length; i++) {
    likesList[i].addEventListener('click', () => likesList[i].classList.toggle('animation-like'))
}
