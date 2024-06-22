
let ul = document.getElementById('ul');
let home = document.getElementById('home');
let project = document.getElementById('project');
let contact = document.getElementById('contact');
let check = document.getElementById('check')

function myHome(){
   check.checked = false;
}
home.addEventListener('click',myHome)
project.addEventListener('click',myHome)
contact.addEventListener('click',myHome)
