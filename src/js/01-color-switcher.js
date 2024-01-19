function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function bindEvents() {
  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');

  if (!startButton || !stopButton) {
    return;
  }

  let switcherId = null;

  stopButton.disabled = true;

  startButton.addEventListener('click', () => {
    switchColor();
    switcherId = startSwitcher();
    startButton.disabled = true;
    stopButton.disabled = false;
  });

  stopButton.addEventListener('click', () => {
    stopSwitcher(switcherId);
    startButton.disabled = false;
    stopButton.disabled = true;
  });
}

function startSwitcher() {
  return setInterval(switchColor, 1000);
}

function switchColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function stopSwitcher(intervalId) {
  clearInterval(intervalId);
}

bindEvents();
