//Event Target :- Entity where event recive It means"jis element par user ne action kiya (like.  click, scroll, hover, input Etc....)"

//Event listeners :- "Kisi element par event hone par koi function chalna or Respond karna. (like. click, keypress, mouseover, scroll Etc....)"

// 




function change() {
    let paragraph = document.getElementById("para");
    paragraph.textContent = "Hello I'm Piyush";
}

let paragraph = document.getElementById("para");
paragraph.addEventListener('click', change)