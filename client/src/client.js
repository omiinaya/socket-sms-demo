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

//necessary socket dependency.
const socket = io();

//pass message to write event when socket receives one.
socket.on('message', writeEvent);

const onMessageSent = () => {
    //grabs input box from the DOM
    const input = document.querySelector('#chat');
    //grabs text from input box
    const text = input.value
    //passes current text to writeEvent
    socket.emit('message', text);
    //clears the input box
    input.value = '';

}

//triggering a welcome message on start up.
writeEvent('Welcome to the chat!')

document
.getElementById('submit')
.addEventListener('click', function(e) {
    e.preventDefault;
    onMessageSent();
});