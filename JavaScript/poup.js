const button = document.querySelector(".btn");
const popup = document.querySelector(".popup");
const close = document.querySelector(".close");


button.addEventListener('click', () => {

    popup.classList.add('open');
})

close.addEventListener('click', () => {

    popup.classList.remove('open');
})