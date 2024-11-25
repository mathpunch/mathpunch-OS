const startMenu = document.getElementById('startMenu');
const windowElement = document.getElementById('window');
const closeWindow = document.getElementById('closeWindow');

startMenu.addEventListener('click', () => {
  windowElement.classList.toggle('hidden');
});

closeWindow.addEventListener('click', () => {
  windowElement.classList.add('hidden');
});
