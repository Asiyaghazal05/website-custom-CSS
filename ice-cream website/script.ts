

// Button aur paragraph element ko select karte hain
const button = document.querySelector('button');
const paragraph = document.querySelector('p');

// Agar button aur paragraph dono exist karte hain
if (button && paragraph) {
    button.addEventListener('click', () => {
        paragraph.textContent = 'Here is your ice cream!';
    });
}