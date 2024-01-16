let htmlButton = document.getElementById('htmlBtn');
let htmlBar = document.getElementById('html');

htmlButton.addEventListener('click', changehtml );

function changehtml(){
  htmlBar.classList.toggle('htmlToggle');
}