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

document.getElementById('message').addEventListener('click',
function() {
    document.querySelector('#notification').style.display = 'none'
    document.querySelector('#messages').style.display = 'block'
})

document.querySelector('#close-messages').addEventListener('click',
function() {
    document.querySelector('#messages').style.display = 'none'
})

document.querySelector('#message').addEventListener('click',
function() {
    document.querySelector('#message-content').style.fontWeight = 400
})

// like animation

const likesList = document.getElementsByClassName('fa-thumbs-up')

for (let i = 0; i < likesList.length; i++) {
    likesList[i].addEventListener('click', () => likesList[i].classList.toggle('animation-like'))
}
