const htmlButton = document.getElementById('htmlBtn');
const htmlBar = document.querySelector('.htmlbar');

const cssButton = document.getElementById('cssBtn');
const cssBar = document.querySelector('.cssbar');

const jsButton = document.getElementById('jsBtn');
const jsBar = document.querySelector('.jsbar');

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