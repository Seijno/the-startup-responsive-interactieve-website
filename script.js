var htmlButton = document.getElementById('htmlBtn');
var htmlBar = document.querySelector('.htmlbar');

var cssButton = document.getElementById('cssBtn');
var cssBar = document.querySelector('.cssbar');

var jsButton = document.getElementById('jsBtn');
var jsBar = document.querySelector('.jsbar');

htmlButton.addEventListener('click', changehtml );
cssButton.addEventListener('click', changecss );
jsButton.addEventListener('click', changejs );

function changehtml(){
  htmlBar.classList.toggle('htmlToggle');
  htmlButton.classList.toggle('htmlButton')
}
function changecss(){
    cssBar.classList.toggle('cssToggle');
    cssButton.classList.toggle('cssButton')
  }
  function changejs(){
    jsBar.classList.toggle('jsToggle');
    jsButton.classList.toggle('jsButton')
  }