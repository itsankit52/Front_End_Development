// const image1 = document.querySelector(".img");
// const container = document.querySelector(".container");


// // // for(let i=2;i< 10;i++){
// // //     // const newimg = image1.cloneNode();
// // //     // container.append(image1);
// // // }

// // const paragraph= document.createElement("p"); 

// // container.append(paragraph);


// // // Step 1. Make a new paragraph element
// // const para = document.createElement("p");

// // // Step 2. Add some text 
// // para.textContent = "This is a new paragraph.";

// // //Step 3. Add this "para" in body
// // document.body.appendChild(para);


// for (let i = 1; i <= 10; i++) {
//     const imageNew = document.createElement('img');

//     imageNew.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`;

//     container.append(imageNew);


// }




const image1 = document.querySelector(".img");
const container = document.querySelector(".container");

for (let i = 1; i <= 100; i++) {
    const imageNew = document.createElement('img');
    imageNew.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    container.append(imageNew);
}
