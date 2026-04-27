const user = document.querySelector("#userName");
const para = document.querySelector("p");
const Form = document.querySelector("form");


//click event
// user.addEventListener('click', ()=> {
//     console.log("Clicked");
// })


//double click event
// user.addEventListener('dblclick', ()=> {
//     console.log("double Clicked");
// })


//Input event : Fires on form elements whenever the value changes (real-time); Any input (typing, pasting, etc.).
// user.addEventListener('input', (e)=> {
//     console.log(e);
//     console.log("Input fired");
//     para.innerText = e.target.value;
// });


//Change event : Fires on form elements when their value changes and the element loses focus; Value updated and focus lost.
// user.addEventListener('change', (e)=> {
//     console.log(e);
//     console.log("Input fired");
//     para.innerText = e.target.value;
// });


//focus event : Fires when an element gains focus; Element is selected (e.g., clicked or tabbed to).
// user.addEventListener('focus', (e)=> {
//     console.log(e);
//     console.log("Focue Event");
//     para.innerText = e.target.value;
// });


//Blur event : Fires when an element loses focus; Element is deselected.
// user.addEventListener('change', (e)=> {
//     console.log(e);
//     console.log("Blur Event");
//     para.innerText = e.target.value;
// });



//Sumbit Event : Fires on the <form> when submitted (e.g., via Enter key or submit button); Form is submitted.

Form.addEventListener('sumbit', (e) => {
    e.preventDefault();
    console.log(e);
    console.log("Sumbitted");
} )
