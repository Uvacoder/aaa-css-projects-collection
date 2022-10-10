const btn_container = document.querySelector('.btn');
const btn = document.querySelector('.submit-button');
const bubble = document.querySelector('.submitted');

/* hover*/
btn.onmouseover = () => {
    btn_container.classList.add('btn-container');
}
btn.onmouseout = () => {
    btn_container.classList.remove('btn-container');
}

btn.onclick = () => {
    bubble.classList.remove('visibility');
    window.setTimeout(function(){
        bubble.classList.add('visibility');
    }, 5000);
          
}