let basicInfo = document.getElementById('basic-info')
let places = document.getElementById('live-places')
let hobbyEducation = document.getElementById('hobby-education')
let contact = document.getElementById('contact')
let closePeople = document.getElementById('close-people')
let forms = document.getElementsByClassName('forms')
let activateForm = document.getElementsByClassName('activate-form')

basicInfo.style.display = 'block'
places.style.display = 'none'
hobbyEducation.style.display = 'none'
contact.style.display = 'none'
closePeople.style.display = 'none'

for (let i = 0 ; i < forms.length; i++) {
    activateForm[i].addEventListener('click', () => {
        for (let j = 0; j < forms.length; j++) {
            forms[j].style.display = 'none'
        }
        forms[i].style.display = 'block'
    })
}