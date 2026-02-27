const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')
const input = document.querySelector('input')
const form = document.querySelector('form')

let count = 1;

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++

    // newCard.addEventListener('click', () => {
    //     newCard.remove(); // Remove new card...
    // })
    container.append(newCard)
})


container.addEventListener("click", (e) => {
    e.target.remove();
})