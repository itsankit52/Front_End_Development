const nametag = document.querySelector('.name-tag');
const inputField = document.querySelector('.input-field');

/*Method 1:
nametag.innerHTML = localStorage.MyName;

inputField.addEventListener('input', (e) => {
    localStorage.MyName = e.target.value;
    nametag.innerHTML=localStorage.MyName;
})
    */


/*Method 3: */
nametag.innerHTML = localStorage.getItem("MyName");

inputField.addEventListener('input', (e) => {
    localStorage.setItem("MyName", e.target.value);
    nametag.innerHTML=localStorage.getItem("MyName");
})


// ************************** PENDING ****************************