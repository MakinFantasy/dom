export default class Playground {

    randomAppear () {
        const goblin = document.createElement('img');
        goblin.classList.add("playground__img");
        goblin.src = 'https://raw.githubusercontent.com/netology-code/ahj-homeworks/video/dom/pic/goblin.png';

        const playingItemsCollection = document.querySelectorAll('.playground__item');

        for (const playingItem of playingItemsCollection) {
            if (playingItem.firstElementChild) {
                playingItem.firstElementChild.remove();
            }
        }
        const randomPlayingItem = Math.floor(Math.random() * playingItemsCollection.length);

        playingItemsCollection[randomPlayingItem].append(goblin);
    }
} 