// REFRESHING WINDOW PAGE POSITION SET TO TOP

window.onbeforeunload = () => window.scrollTo(0, 0)

// CALCULATE HEIGHT FOR CONTAINER POSTS SECTION 

window.onload = () => {
    document.getElementById('container-posts-section').style.height = document.getElementById('posts-container').offsetHeight + document.getElementById('add-post').offsetHeight + 55 + 'px'
}

// REPORT AND DELETE OPTION

const reportButton = document.getElementsByClassName('post-options-button')
const postOptions = document.getElementsByClassName('post-options')
const reportText = document.getElementsByClassName('report')
const deleteText = document.getElementsByClassName('delete')
const allPosts = document.getElementsByClassName('post')

for (let z = 0; z < reportButton.length; z++) {
    reportButton[z].onclick = () => postOptions[z].style.display ='flex';
    reportText[z].addEventListener('click', () => {
    document.querySelector('#report-background').style.display = 'flex'
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
    document.getElementsByTagName('body')[0].style.paddingRight = '17px'
    })
    deleteText[z].addEventListener('click', () => {
        document.getElementById('container-posts-section').style.height = document.getElementById('container-posts-section').style.height.split('').slice(0, -2).join('') - allPosts[z].offsetHeight + 'px'
        allPosts[z].style.display = 'none'
    })
}

document.querySelector('#report-background').addEventListener('click',
function() {
    document.querySelector('#report-background').style.display = 'none'
    document.getElementsByTagName('body')[0].style.overflowY = 'scroll'
    document.getElementsByTagName('body')[0].style.paddingRight = '0'
})

window.addEventListener('click', (event) => {
    if ([...reportButton].every(el => el !== event.target) && [...postOptions].every(el => el !== event.target)) {
        for (let i = 0; i < postOptions.length; i++) {
            postOptions[i].style.display = 'none'
        }
    }
})

// LIKE ANIMATION

const likesList = document.getElementsByClassName('fa-thumbs-up')

for (let i = 0; i < likesList.length; i++) {
    likesList[i].addEventListener('click', () => likesList[i].classList.toggle('animation-like'))
}

// SELECT SECTION IN POSTS SECTION

let posts = document.getElementById("posts")
let photos = document.getElementById("photos")
let about = document.getElementById("about")
let friends = document.getElementById('friends')
let underlines = document.getElementsByClassName('underline')
let postsSection = document.getElementById('container-posts-section')
let photosSection = document.getElementById('photos-section')
let aboutSection = document.getElementById('about-section')
let friendsSection = document.getElementById('friends-section')
let allFriends = document.getElementsByClassName('all')

posts.style.color = 'blue'
underlines[0].style.display = 'block'
aboutSection.style.display = 'none'
photosSection.style.display = 'none'
friendsSection.style.display = 'none'

posts.addEventListener('click', () => {
    underlines[0].style.display = 'block'
    underlines[1].style.display = 'none'
    underlines[2].style.display = 'none'
    underlines[3].style.display = 'none'
    posts.style.color = 'hsl(220, 60%, 35%)'
    photos.style.color = 'black'
    about.style.color = 'black'
    friends.style.color = 'black'
    postsSection.style.display = 'block'
    document.getElementById('posts-container').style.display = 'block' 
    photosSection.style.display = 'none'
    aboutSection.style.display = 'none'
    friendsSection.style.display = 'none'
    for (let i = 0; i < document.getElementsByClassName('friend').length; i++) {
        document.getElementsByClassName('friend')[i].style.display = 'block'
    }
})

photos.addEventListener('click', () => {
    underlines[0].style.display = 'none';
    underlines[1].style.display = 'block';
    underlines[2].style.display = 'none';
    underlines[3].style.display = 'none';
    posts.style.color = 'black'
    photos.style.color = 'hsl(220, 60%, 35%)'
    about.style.color = 'black'
    friends.style.color = 'black'
    postsSection.style.display = 'none'
    document.getElementById('posts-container').style.display = 'none'
    photosSection.style.display = 'block'
    aboutSection.style.display = 'none'
    friendsSection.style.display = 'none'
    for (let i = 0; i < document.getElementsByClassName('friend').length; i++) {
        document.getElementsByClassName('friend')[i].style.display = 'block'
    }
})

about.addEventListener('click', () => {
    underlines[0].style.display = 'none';
    underlines[1].style.display = 'none'
    underlines[2].style.display = 'block';
    underlines[3].style.display = 'none';
    posts.style.color = 'black'
    photos.style.color = 'black'
    about.style.color = 'hsl(220, 60%, 35%)'
    friends.style.color = 'black'
    postsSection.style.display = 'none'
    document.getElementById('posts-container').style.display = 'none'
    photosSection.style.display = 'none'
    aboutSection.style.display = 'block'
    friendsSection.style.display = 'none'
    for (let i = 0; i < document.getElementsByClassName('friend').length; i++) {
        document.getElementsByClassName('friend')[i].style.display = 'block'
    }
})

let friendsDirection = [friends, allFriends[0], allFriends[1]]

for (let i = 0; i < friendsDirection.length; i++) {
    friendsDirection[i].addEventListener('click', () => {
            underlines[0].style.display = 'none'
            underlines[1].style.display = 'none'
            underlines[2].style.display = 'none'
            underlines[3].style.display = 'block'
            posts.style.color = 'black'
            photos.style.color = 'black'
            about.style.color = 'black'
            friends.style.color = 'hsl(220, 60%, 35%)'
            postsSection.style.display = 'none'
            document.getElementById('posts-container').style.display = 'none'
            photosSection.style.display = 'none'
            aboutSection.style.display = 'none'
            friendsSection.style.display = 'block'
            document.documentElement.scrollTop = 0
    })
}

// SELECT SECTION IN FRIENDS SECTION

// all type of friends

let sameCityFriends = document.getElementsByClassName('same-city')
let familyFriends = document.getElementsByClassName('family')
let allFriendsInFriendsSection = document.getElementsByClassName('friend')

// underlines and border style

let allFriendsSectionUnderline = document.getElementById('all-friends-section-underline') // in friends section
let familyMembersSectionUnderline = document.getElementById('family-members-section-underline') 
let sameCitySectionUnderline = document.getElementById('same-city-section-underline')
let borderBottomOn = '3px solid rgb(36, 71, 143)'
let borderBottomOff = 'none'

allFriendsSectionUnderline.style.borderBottom = borderBottomOn

allFriendsSectionUnderline.addEventListener('click', () => {
    allFriendsSectionUnderline.style.borderBottom = borderBottomOn
    familyMembersSectionUnderline.style.borderBottom = borderBottomOff
    sameCitySectionUnderline.style.borderBottom = borderBottomOff
    for (let i = 0; i < allFriendsInFriendsSection.length; i++) {
        allFriendsInFriendsSection[i].style.display = 'block'
    }
})

familyMembersSectionUnderline.addEventListener('click', () => {
    allFriendsSectionUnderline.style.borderBottom = borderBottomOff
    familyMembersSectionUnderline.style.borderBottom = borderBottomOn
    sameCitySectionUnderline.style.borderBottom = borderBottomOff
    for (let i = 0; i < allFriendsInFriendsSection.length; i++) {
        allFriendsInFriendsSection[i].style.display = 'none'
    }
    for (let i = 0; i < familyFriends.length; i++) {
        familyFriends[i].style.display = 'block'
    }
})

sameCitySectionUnderline.addEventListener('click', () => {
    allFriendsSectionUnderline.style.borderBottom = borderBottomOff
    familyMembersSectionUnderline.style.borderBottom = borderBottomOff
    sameCitySectionUnderline.style.borderBottom = borderBottomOn
    for (let i = 0; i < allFriendsInFriendsSection.length; i++) {
        allFriendsInFriendsSection[i].style.display = 'none'
    }

    for (let i = 0; i < sameCityFriends.length; i++) {
        sameCityFriends[i].style.display = 'block'
    }
})

// ADD BIO POSTS SECTION

let addBioButton = document.getElementById('add-bio-submit')
let bioText = document.getElementById('user-input-text')
let bioForm = document.getElementById('bio-form')
let addBioText = document.getElementById('add-bio-text')
let saveBioTextButton = document.getElementById('bio-save')
let cancelBioTextButton = document.getElementById('bio-cancel')

if (bioText.innerText === '') {
    addBioButton.style.display = 'block'
    document.getElementById('user-input-info').style.borderBottom = 'none'
}

addBioButton.addEventListener('click', () => {
    bioForm.style.display = 'block'
    addBioButton.style.display = 'none'
})

saveBioTextButton.addEventListener('click', () => {
    bioForm.style.display = 'none'
    if (addBioText.value !== '') {
        bioText.innerText = addBioText.value
        bioText.style.display = 'block'
        document.getElementById('user-input-info').style.borderBottom = '2px solid hsl(0, 0%, 86%)'
        if (addBioText.value.length > 40) {
            document.getElementById('additional-info-posts-section').style.top = '1rem' 
        } else {
            document.getElementById('additional-info-posts-section').style.top = '2rem'
        }
    } else {
        addBioButton.style.display = 'block'
    }
})

cancelBioTextButton.addEventListener('click', () => {
    bioForm.style.display = 'none'
    if (bioText.innerText === '') {
        addBioButton.style.display = 'block'
    } else {
        bioText.style.display = 'block'
        document.getElementById('user-input-info').style.borderBottom = '2px solid hsl(0, 0%, 86%)'
    }
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
let postsSectionUserInfo = [document.getElementById('live-place'), document.getElementById('from-place'), document.getElementById('hobby')]

for (let i = 0; i < newChanges.length; i++) {
    openWindow[i].addEventListener('click', () => {
        changeDiv[i].style.display = 'block'
        leftIcons[i].style.display = 'none';
        personalInfo[i].style.opacity = '0'
        openWindow[i].style.display ='none'
        for (let j = 0; j < openWindow.length; j++) {
            if (j !== i) {
                openWindow[j].style.pointerEvents = 'none'
            }
        }
    })
}

for (let i = 0; i < saveButton.length; i++) {
    saveButton[i].addEventListener('click', () => {
        currValue[i].innerText = newChanges[i].value;
        changeDiv[i].style.display = 'none';
        leftIcons[i].style.display = 'inline-block'
        personalInfo[i].style.opacity = '1'
        openWindow[i].style.display = 'inline-block'
        for (let j = 0; j < openWindow.length; j++) {
            if (j !== i) {
                openWindow[j].style.pointerEvents = 'auto'
            }
        }
        if (i === 0 || i === 1) {
            postsSectionUserInfo[i].innerText = newChanges[i].value
        } else if (i === 3) {
            postsSectionUserInfo[2].innerText = newChanges[i].value
        }
    })
    
    closeButton[i].addEventListener('click', () => {
        changeDiv[i].style.display = 'none';
        leftIcons[i].style.display = 'inline-block'
        personalInfo[i].style.opacity = '1'
        openWindow[i].style.display = 'inline-block'
        for (let j = 0; j < openWindow.length; j++) {
            if (j !== i) {
                openWindow[j].style.pointerEvents = 'auto'
            }
        }
    })
    
    if (i === 6) {
        saveButton[i].addEventListener('click', () => currValue[i].innerText = document.getElementsByTagName('select')[0].value !== 'Select your option' ? document.getElementsByTagName('select')[0].value : '')
    }
}

// FRIENDS ABOUT SECTION - FRIENDS LIST OPTIONS

let friendOptionsButton = [...document.getElementsByClassName('friend-options-on')]
let friendOptionsWindow = [...document.getElementsByClassName('friend-options-window')]
let favouriteOption = document.getElementsByClassName('favourite')
let followOption = document.getElementsByClassName('follow-option')
let followText = document.getElementsByClassName('follow-text')
let unfriendOption = document.getElementsByClassName('unfriend')
let favouriteHearts = document.getElementsByClassName('fas fa-heart')
let addFriendButton = document.getElementsByClassName('add-friend')

for (let i = 0; i < friendOptionsButton.length; i++) {
    friendOptionsButton[i].onclick = function() {
        friendOptionsWindow[i].style.display = 'flex'
    }
    window.onclick = function(event) {
        if (friendOptionsButton.every(el => el !== event.target) && friendOptionsWindow.every(el => el !== event.target)) {
            for (let i = 0; i < friendOptionsWindow.length; i++) {
                friendOptionsWindow[i].style.display = 'none'
            }
        }
    }
    favouriteOption[i].addEventListener('click', () => favouriteHearts[i].style.color === 'red' ? favouriteHearts[i].style.color = 'black' : favouriteHearts[i].style.color = 'red')
    followOption[i].addEventListener('click', () => followText[i].innerText === 'Unfollow' ? followText[i].innerText = 'Follow' : followText[i].innerText = 'Unfollow')
    unfriendOption[i].addEventListener('click', () => {addFriendButton[i].style.display = 'block'; friendOptionsButton[i].style.opacity = 0})
    addFriendButton[i].addEventListener('click', () => addFriendButton[i].innerText === 'Cancel Request' ? addFriendButton[i].innerText = 'Add Friend' : addFriendButton[i].innerText = 'Cancel Request')
}