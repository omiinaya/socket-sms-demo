//necessary io dependency
const socket = io();

//function that receives and writes data to the parent div.
const writeEvent = (text) => {
    //finding parent div so we can append to it.
    const parent = document.querySelector('#events');
    //creating element to append to it.
    const element = document.createElement('li');
    //adding parameter data to the created element.
    element.innerHTML = text;
    //appending new element to parent div.
    parent.appendChild(element);
}

//triggering a welcome message on start up.
writeEvent('Welcome to the chat!')