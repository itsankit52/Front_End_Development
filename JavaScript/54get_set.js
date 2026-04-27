// Get attributes

let img = document.getElementById("car1");
let srcValue = img.getAttribute("src");
let altValue = img.getAttribute("alt");

console.log(srcValue);
console.log(altValue);

// set attrubutes 
let img1= document.getElementById("car2");

img.setAttribute("src", "download (3).jpg");   // Changes image
img.setAttribute("alt", "Super car");      // Updates alt text
img.setAttribute("title", "Hover text !");  // Adds a new attribute


