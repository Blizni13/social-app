// UPLOADING PHOTO/VIDEO

let uploadButton = document.getElementById('upload')
let uploadWindow = document.getElementById('upload-files')

uploadButton.onclick = function() {
    uploadWindow.style.display = 'block'
}

let uploadWindowElements = [
    uploadButton,
    uploadWindow,
    document.getElementsByTagName('textarea')[0],
    document.getElementsByTagName('form')[0] ,
    document.getElementsByTagName('input')[1],
    document.getElementsByTagName('label')[1],
    document.getElementById('post-image-preview'),
    document.getElementById('post-image-preview-photo')
]

window.onclick = function(event) {
    if (uploadWindowElements.every(el => el !== event.target)) {
        uploadWindow.style.display = 'none'
    }
    document.getElementById('post-image-preview-photo').style.backgroundImage = 'none'
}

// change content of caption

let captionText = document.getElementById('post-image-preview-caption-text')

function changeCaption(textarea) {
    if (document.getElementById('add-post-caption').value === '') {
        document.getElementById('post-image-preview-caption').style.display = 'none'
        document.getElementById('post-image-preview').style.marginBottom = '0'
    } else {
        document.getElementById('post-image-preview-caption').style.display = 'block'
        document.getElementById('post-image-preview').style.marginBottom = '20px'
    }
    captionText.innerText = textarea.value
}

// show prev of image 

let placeForImage = document.getElementById('post-image-preview-photo')

function prevImage(input) {
    if(input.files.length) {
    placeForImage.style.backgroundImage = `url(${URL.createObjectURL(input.files[0])})`
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
const confirmFriend = document.getElementsByClassName('confirm')
const removeFriend = document.getElementsByClassName('remove')
const acceptGroup = document.getElementsByClassName('accept')
const declineGroup = document.getElementsByClassName('decline')

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

// prevent refreshing page by forms in notifications 

for (let i = 0; i < document.getElementsByClassName('user-request').length; i++) {
    document.getElementsByClassName('user-request')[i].addEventListener('submit', (event) => {
        event.preventDefault()
    })}

// confirm - remove friend invitation

for (let i = 0; i < confirmFriend.length; i++) {
    confirmFriend[i].addEventListener('click', () => {
        document.getElementsByClassName('after-confirm')[i].style.display = 'block'
        confirmFriend[i].style.opacity = '0'
        confirmFriend[i].style.pointerEvents = 'none'
        removeFriend[i].style.opacity = '0'
        removeFriend[i].style.pointerEvents = 'none'
    })
}

for (let i = 0; i < removeFriend.length; i++) {
    removeFriend[i].addEventListener('click', () => {
        document.getElementsByClassName('after-remove')[i].style.display = 'block'
        confirmFriend[i].style.opacity = '0'
        confirmFriend[i].style.pointerEvents = 'none'
        removeFriend[i].style.opacity = '0'
        removeFriend[i].style.pointerEvents = 'none'
    })
}

// accept - decline group invitation

for (let i = 0; i < acceptGroup.length; i++) {
    acceptGroup[i].addEventListener('click', () => {
        document.getElementsByClassName('after-accept')[i].style.display = 'block'
        acceptGroup[i].style.opacity = '0'
        acceptGroup[i].style.pointerEvents = 'none'
        declineGroup[i].style.opacity = '0'
        declineGroup[i].style.pointerEvents = 'none'
    })
}

for (let i = 0; i < declineGroup.length; i++) {
    declineGroup[i].addEventListener('click', () => {
        document.getElementsByClassName('after-decline')[i].style.display = 'block'
        acceptGroup[i].style.opacity = '0'
        acceptGroup[i].style.pointerEvents = 'none'
        declineGroup[i].style.opacity = '0'
        declineGroup[i].style.pointerEvents = 'none'
    })
}

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
