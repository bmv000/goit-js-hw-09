const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.body;

let colorChange = null;


btnStop.disabled = true;

btnStart.addEventListener('click', () => {
  colorChange = setInterval(getRandomColor, 1000);
  btnStart.disabled = true;
  btnStop.disabled = false;
});

btnStop.addEventListener('click', () => {
  clearInterval(colorChange);
  btnStart.disabled = false;
  btnStop.disabled = true;
});

function getRandomColor() {
  body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}