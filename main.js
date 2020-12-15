"use strict";
const myName = document.getElementById('myname');
const myInfo = document.getElementById('info');
myName.onclick = () => myInfo.classList.remove('info');
myName.onmouseleave = () => setTimeout(() => myInfo.classList.add('info'), 3000);
