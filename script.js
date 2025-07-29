console.log('Javascript works!');

const messageElem = document.querySelector('.message');
const btn = document.querySelector('.btn');
let clicked = false;

messageElem.innerText = 'THIS IS A NEW TEXT!';
// messageElem.innerHTML = 'THIS IS A NEW TEXT!';
// messageElem.textContent = 'Abbas123';
console.log(messageElem);

// Buttton
btn.addEventListener('click', () => {
  // console.log('hallo');

  if (!clicked) {
    messageElem.innerText = 'You clicked the button now!';
    btn.textContent = 'Clicked!';
    clicked = true;
    console.log(clicked);
  } else {
    messageElem.innerText = 'THIS IS A NEW TEXT!';
    btn.textContent = 'UnClicked!';
    clicked = false;
    console.log(clicked);
  }
});
