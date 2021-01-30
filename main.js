const myName = document.getElementById('myname');
const myInfo = document.getElementById('contact');

myName.onclick = () => myInfo.classList.toggle('contact');

document.querySelectorAll('.collapsible').forEach((item) => {
  item.addEventListener('click', () => {
    let content = document.getElementById('content');
    let style = content.style.display;
    content.style.display = style === 'block' ? 'none' : 'block';
  });
});
