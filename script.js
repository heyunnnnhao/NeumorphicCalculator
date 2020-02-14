var notice = document.querySelector('#notice');
notice.style.display = 'none';


var coming = document.querySelector('#but');
coming.onclick = function(){
    document.querySelector('#coming').remove();
    document.querySelector('#but').remove();
};