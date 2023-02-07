// TODO: write code here

// comment this to pass build
import Playground from './playground/Playground';

document.addEventListener('DOMContentLoaded', () => {
  const playingArea = new Playground(document.querySelector('.playground'));

  setInterval(playingArea.randomAppear, 1000);
})
