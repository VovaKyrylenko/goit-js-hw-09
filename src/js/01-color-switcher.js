const startButtonRef = document.querySelector('[data-start]');
const stopButtonRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');
stopButtonRef.disabled = true;

let timerId = null;
let color = '';

startButtonRef.addEventListener('click', evt => {
  timerId = setInterval(() => {
    color = getRandomHexColor();
    bodyRef.style = `background-color: ${color}`;
  }, 1000);
  startButtonRef.disabled = true;
  stopButtonRef.disabled = false;
});

stopButtonRef.addEventListener('click', evt => {
  clearInterval(timerId);
  startButtonRef.disabled = false;
  stopButtonRef.disabled = true;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
