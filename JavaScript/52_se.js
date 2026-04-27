document.getElementById("actionBtn").addEventListener("click", function () {

    // getElementById
    let title = document.getElementById("title");
    title.innerText = "Selected by ID!";
    title.style.color = "black";

    // getElementsByClassName
    let paragraphs = document.getElementsByClassName("text");

    // Change text of the first paragraph
    paragraphs[0].innerText = "Changed by ClassName";

    // Change colors of both paragraphs
    paragraphs[0].style.color = "orange";
    paragraphs[1].style.color = "teal";


    // getElementsByTagName
    let divs = document.getElementsByTagName("div");
    divs[0].style.background = "lightblue";
    divs[1].style.background = "lightgreen";

    // querySelector
    let firstBox = document.querySelector(".box");
    firstBox.style.backgroundColor = "lightgreen";
    firstBox.innerText = "First Box Changed";

    // querySelectorAll
    let items = document.querySelectorAll(".item");
    items.forEach((li, index) => {
        li.style.color = "red";
        li.innerText = `Fruit ${index + 1}`;
    });
});