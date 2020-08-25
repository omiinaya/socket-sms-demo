const socket = io();

const writeEvent = (text) => {

    const parent = document.querySelector('#events');

    const element = document.createElement('li');
    element.innerHTML = text;

    parent.appendChild(element);
}

writeEvent('Welcome to the chat!')