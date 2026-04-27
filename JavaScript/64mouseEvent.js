//Click event 
const button = document.getElementById("btn");
button.addEventListener("click", (e) => {
    alert("Button Clicked ")
});


//mousedown AND mouseup
const box = document.querySelector(".box");

// // Add event listener for mouse down (when button is pressed)
// box.addEventListener("mousedown", (e) => {
//     console.log(e); // Log the event details
//     box.style.background = "yellow"; // Change background to yellow
// });

// // Add event listener for mouse up (when button is released)
// box.addEventListener("mouseup", (e) => {
//     console.log(e);
//     box.style.background = "lightgreen"; // Change background to light green
// });

// // Add event listener for mouse leaving the element
// box.addEventListener("mouseout", (e) => {
//     console.log(e);
//     box.style.background = "blue"; // Change background to blue
// });

// // Add event listener when mouse enters the element area (without child elements)
// box.addEventListener("mouseenter", (e) => {
//     console.log(e);
//     box.style.background = "red"; // Change background to red
// });

// // Add event listener when mouse moves over the element or its children
// box.addEventListener("mouseover", (e) => {
//     console.log(e);
//     box.style.background = "hotpink"; // Change background to hot pink
// });

// // Add event listener for mouse movement inside the element
// box.addEventListener("mousemove", (e) => {
//     console.log(e);
//     box.style.background = "hotpink"; // Change background continuously on move
// });

// // Add event listener for mouse wheel scroll on the element
// box.addEventListener("mousewheel", (e) => {
//     console.log(e);
//     box.style.background = "black"; // Change background on scroll
// });


// // Add event listener for touch start (when finger first touches the screen) (Mobile devices)
// box.addEventListener("touchstart", (e) => {
//     console.log(e); // Log touch event details
//     box.style.background = "brown"; // Change background to brown on touch


// // Add event listener for touch end (when finger is lifted from the screen)
// box.addEventListener("touchend", (e) => {
//     console.log(e); // Log touch event details
//     box.style.background = "pink"; // Change background to pink when touch ends
// });


// Add event listener for touch move (when finger moves on the screen)
box.addEventListener("touchmove", (e) => {
    console.log(e); // Log touch event details
    box.style.background = "aqua"; // Change background to pink while finger moves
});

