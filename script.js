console.log('Javascript works!');

const messageElem = document.querySelector('.message');
const btn = document.querySelector('.btn');

messageElem.innerText = 'THIS IS A NEW TEXT!';
// messageElem.innerHTML = 'THIS IS A NEW TEXT!';
// messageElem.textContent = 'Abbas123';
console.log(messageElem);

// Buttton
btn.addEventListener('click', () => {
  // console.log('hallo');
  messageElem.innerText = 'You clicked the button now!';
});
