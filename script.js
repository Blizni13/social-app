document.getElementById('button').addEventListener('click',
function() {
    document.querySelector('#post-options').style.display = 'block'
})

document.querySelector('#close-sign').addEventListener('click',
function() {
    document.querySelector('#post-options').style.display = 'none'
})

document.querySelector('#report').addEventListener('click',
function() {
    document.querySelector('#report-background').style.display = 'flex'
}) 

document.querySelector('#report-background').addEventListener('click',
function() {
    document.querySelector('#report-background').style.display = 'none'
})