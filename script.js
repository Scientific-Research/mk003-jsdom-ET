console.log('Javascript works!');

const messageElem = document.querySelector('.message');
const btnElem = document.querySelector('.btn');
const textElem = document.querySelector('.text');
let clicked = false;

messageElem.innerText = 'Initial Text';
// textElem.innerText = 'Initial Text';
// messageElem.innerHTML = 'THIS IS A NEW TEXT!';
// messageElem.textContent = 'Abbas123';
console.log(messageElem);

// Buttton
btnElem.addEventListener('click', () => {
  // console.log('hallo');

  if (!clicked) {
    messageElem.innerHTML = 'You clicked the <strong>button</strong> now!';
    btnElem.textContent = 'Clicked!';
    clicked = true;
    console.log(clicked);
  } else {
    messageElem.innerText = '<b>Initial</b> Text!';
    btnElem.textContent = 'UnClicked!';
    clicked = false;
    console.log(clicked);
  }
});
