
let ul = document.getElementById('ul');
let home = document.getElementById('home');
let project = document.getElementById('project');
let contact = document.getElementById('contact');
let check = document.getElementById('check')

function myHome() {
   check.checked = false;
}
home.addEventListener('click', myHome)
project.addEventListener('click', myHome)
contact.addEventListener('click', myHome)

function activeHome() {
   home.style.backgroundColor = 'goldenrod';
   home.style.transition = '0.2s';
   project.style.backgroundColor = 'none';
   contact.style.backgroundColor = 'none'

}

window.onload = activeHome()
function activeProject() {
   project.style.backgroundColor = 'goldenrod'
   project.style.transition = '0.2s';
   home.style.backgroundColor = 'transparent';
   contact.style.backgroundColor = 'transparent'

}

project.addEventListener('click', activeProject)

function activeContact() {
   contact.style.backgroundColor = 'goldenrod'
   contact.style.transition = '0.2s';
   home.style.backgroundColor = 'transparent';
   project.style.backgroundColor = 'transparent'

}

contact.addEventListener('click', activeContact)
