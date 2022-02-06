//Simple function of multiplication

function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
}

// Donkey kong goes: "Banana";

document.querySelector('h1').addEventListener('click', function() {
    alert('Banana!');
});

//Change picture onclick 

let myImg = document.querySelector('img');
myImg.onclick = function() {
    let mySrc = myImg.getAttribute('src');
    if (mySrc === 'images/donkey-kong.jpg') {
        myImg.setAttribute('src', 'images/donkey-kong-2.jpg');
    } else {
        myImg.setAttribute('src', 'images/donkey-kong.jpg');
    }
}

//

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Donkey Kong rocks, ' + myName;
      }
}
  

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Sheeesh is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
  
  