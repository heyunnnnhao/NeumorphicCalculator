window.onload = function () {
  var name = document.getElementById('myname');
  var info = document.getElementById('info');

  name.onmouseenter = function () {
    info.classList.remove('info');
  };

  name.onmouseleave = function () {
    info.classList.add('info');
  };
};
