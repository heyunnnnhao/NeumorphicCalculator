window.onload = function () {
  var name = document.getElementById('myname');
  var info = document.getElementById('info');

  name.onclick = function () {
    info.classList.remove('info');
  };

  name.onmouseleave = function () {
    setTimeout(function () {
      info.classList.add('info');
    }, 3000);
  };
};