document.getElementById('button').addEventListener('click',
function() {
    document.querySelector('#post-options').style.display = 'block'
})

document.querySelector('#close-sign').addEventListener('click',
function() {
    document.querySelector('#post-options').style.display = 'none'
})