// Settings posts wrapper to appropriate height

let additionalHeight = document.getElementById('posts-container').offsetHeight + document.getElementById('add-post').offsetHeight  + 35
document.getElementById('additional-info-posts-section').style.height = `${additionalHeight}px`

// REPORT WINDOW

const reportButton = document.getElementsByClassName('fa-ellipsis')
const postOptions = document.getElementsByClassName('post-options') 
const closeSign = document.getElementsByClassName('close-sign')
const reportText = document.getElementsByClassName('report')

for (let z = 0; z < reportButton.length; z++) {
    reportButton[z].addEventListener('click', () => postOptions[z].style.display ='block')
    closeSign[z].addEventListener('click', () => postOptions[z].style.display = 'none')
    reportText[z].addEventListener('click', () => {
    document.querySelector('#report-background').style.display = 'flex'
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
    document.getElementsByTagName('body')[0].style.paddingRight = '17px'
})
}

document.querySelector('#report-background').addEventListener('click',
function() {
    document.querySelector('#report-background').style.display = 'none'
    document.getElementsByTagName('body')[0].style.overflowY = 'scroll'
    document.getElementsByTagName('body')[0].style.paddingRight = '0'
})

// LIKE ANIMATION

const likesList = document.getElementsByClassName('fa-thumbs-up')

for (let i = 0; i < likesList.length; i++) {
    likesList[i].addEventListener('click', () => likesList[i].classList.toggle('animation-like'))
}

// SECTIONS SELECT ANIMATIONS

let posts = document.getElementById("posts")
let photos = document.getElementById("photos")
let about = document.getElementById("about")
let underlines = document.getElementsByClassName('underline')
let postsSection = document.getElementById('container-posts-section')
let aboutSection = document.getElementById('about-section')
let photosSection = document.getElementById('photos-section')

posts.style.color = 'blue'
underlines[0].style.display = 'block'
aboutSection.style.display = 'none'
photosSection.style.display = 'none'

posts.addEventListener('click', () => {
    underlines[0].style.display = 'block';
    underlines[1].style.display = 'none';
    underlines[2].style.display = 'none'
    posts.style.color = 'hsl(220, 60%, 35%)';
    about.style.color = 'black'
    photos.style.color = 'black'
    postsSection.style.display = 'block'
    document.getElementById('posts-container').style.display = 'block' 
    document.getElementById('about-section').style.display = 'none'
    photosSection.style.display = 'none'
})

photos.addEventListener('click', () => {
    underlines[0].style.display = 'none';
    underlines[1].style.display = 'block';
    underlines[2].style.display = 'none';
    photos.style.color = 'hsl(220, 60%, 35%)'
    posts.style.color = 'black'
    about.style.color = 'black'
    postsSection.style.display = 'none'
    document.getElementById('posts-container').style.display = 'none'
    aboutSection.style.display = 'none'
    photosSection.style.display = 'block'
})

about.addEventListener('click', () => {
    underlines[0].style.display = 'none';
    underlines[1].style.display = 'none'
    underlines[2].style.display = 'block';
    about.style.color = 'hsl(220, 60%, 35%)'
    posts.style.color = 'black'
    photos.style.color = 'black'
    postsSection.style.display = 'none'
    document.getElementById('posts-container').style.display = 'none'
    document.getElementById('about-section').style.display = 'block'
    photosSection.style.display = 'none'
})

// input in about section

let saveButton = document.getElementsByClassName('save')
let closeButton = document.getElementsByClassName('close')
let changeDiv = document.getElementsByClassName('change-value')
let currValue = document.getElementsByClassName('current-value')
let newChanges = document.getElementsByClassName('new-changes')
let openWindow = document.getElementsByClassName('open-window')
let leftIcons = document.getElementsByClassName('left')
let personalInfo = document.getElementsByClassName('personal-info')

for (let i = 0; i < newChanges.length; i++) {
    newChanges[i].value = currValue[i].innerText
    openWindow[i].addEventListener('click', () => {
        changeDiv[i].style.display = 'block'
        leftIcons[i].style.display = 'none'
        personalInfo[i].style.display = 'none'
    })
}

for (let i = 0; i < saveButton.length; i++) {
    saveButton[i].addEventListener('click', () => {
        currValue[i].innerText = newChanges[i].value;
        changeDiv[i].style.display = 'none';
        leftIcons[i].style.display = 'inline-block';
        personalInfo[i].style.display = 'block'
    })
    closeButton[i].addEventListener('click', () => {
        changeDiv[i].style.display = 'none';
        leftIcons[i].style.display = 'inline-block';
        personalInfo[i].style.display = 'block'
    })
    if (i === 0) {
        saveButton[i].addEventListener('click', () => document.getElementById('live-place').innerText = newChanges[i].value)
    }
    if (i === 1) {
        saveButton[i].addEventListener('click', () => document.getElementById('from-place').innerText = newChanges[i].value)
    }

    if (i === 3) {
        saveButton[i].addEventListener('click', () => document.getElementById('hobby').innerText = newChanges[i].value)
    }
    if (i === 5) {
        saveButton[i].addEventListener('click', () => currValue[i].innerText = document.getElementsByTagName('select')[0].value != 'Select your option' ? document.getElementsByTagName('select')[0].value : '')
    }
}