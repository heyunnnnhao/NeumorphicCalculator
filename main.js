var myName = document.getElementById('myname');
var myInfo = document.getElementById('info');
myName.onclick = function () { return myInfo.classList.remove('info'); };
myName.onmouseleave = function () { return setTimeout(function () { return myInfo.classList.add('info'); }, 3000); };
