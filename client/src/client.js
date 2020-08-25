const e = require("express");

const sock = io();

const writeEvent = (event) => {

    const parent = document.querySelector('#events');

    const element = document.createElement('li');
    element.innerHTML = text;

    parent.appendChild(element);
}