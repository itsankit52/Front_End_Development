//1. Agar kisi element ka parent dhundna ho to -> element.parentElement

//2. Agar kisi parent element ke andar ke sare child element(tags) dhundna ho to 

//  element.children -> Gives all child element

//  element.firstElementChild  -> first child deta hai 

//  element.lastElementChild   -> last child deta hai 

//3. Sibling element ko access karna 
// element.nextElementSibling  -> gives next sibling
// element.previousElementSibling -> gives previous siblings  


// ACCESSING 

const middle = document.getElementById("middle");

console.log(middle.previousElementSibling.textContent);
console.log(middle.nextElementSibling.textContent);

const child = document.getElementById("child");

console.log(child.parentElement);

