// REPORT WINDOW

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

posts.addEventListener('click', () => {
    document.getElementById("posts-underline").style.display = 'block';
    underlines[1].style.display = 'none';
    underlines[2].style.display = 'none'
    document.getElementById('container-posts-section').style.display = 'block'
    document.getElementById('posts-container').style.display = 'block' 
})

photos.addEventListener('click', () => {
    document.getElementById("photos-underline").style.display = 'block';
    underlines[0].style.display = 'none';
    underlines[2].style.display = 'none';
    document.getElementById('container-posts-section').style.display = 'none'
    document.getElementById('posts-container').style.display = 'none'
})

about.addEventListener('click', () => {
    document.getElementById('about-underline').style.display = 'block';
    underlines[0].style.display = 'none';
    underlines[1].style.display = 'none'
    document.getElementById('container-posts-section').style.display = 'none'
    document.getElementById('posts-container').style.display = 'none'
})