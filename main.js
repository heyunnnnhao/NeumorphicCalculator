const myName = document.getElementById('myname');
const myInfo = document.getElementById('contact');

myName.onclick = () => myInfo.classList.toggle('contact');

const coll = document.getElementsByClassName('collapsible');

document.querySelectorAll('.collapsible').forEach((item) => {
  item.addEventListener('click', (e) => {
    var content = document.getElementById('content');
    var style = content.style.display;
    if (style === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});
