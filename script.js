var myName = document.getElementById('myname');
var info = document.getElementById('info');

myName.onclick = () => info.classList.remove('info');
myName.onmouseleave = () => setTimeout(() => info.classList.add('info'), 3000);
