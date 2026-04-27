/*
1. appendChild() 
        parentNode.appendChild(childNode) 
    
    .Only accept in single Node (eg... an element created with document.createElement())
    .Returns the appended Node 
    .Moves the node if it already exists in the DOM (does not duplicate).
    .Older method (part of DOM Level 1).

2.append()
        parentNode.append(...nodesOrStrings)

    .Accepts multiple arguments (nodes or strings).
    .Strings are inserted as text nodes.
    .Does NOT return the appended nodes.
    .Modern method (introduced in DOM4, widely supported now).
    .More flexible and concise.


     DIFFERENCE

    मुख्य अंतर:

    appendChild(): यह पुराना मेथड है (DOM Level 1 से), जो केवल एक DOM नोड (जैसे Element या Text Node) को पैरेंट एलिमेंट के अंतिम बच्चे के रूप में जोड़ता है। अगर इसे कई नोड्स पास करने की कोशिश करेंगे, तो एरर आएगा।

    append(): यह नया मेथड है (ES6+ या DOM Level 4 से), जो एक से अधिक नोड्स या स्ट्रिंग्स (जो टेक्स्ट नोड बन जाते हैं) को जोड़ सकता है। यह ज्यादा फ्लेक्सिबल है।


    WHEN TO USE

    appendChild(): अगर पुराने ब्राउज़र्स का सपोर्ट चाहिए या केवल एक नोड जोड़ना है, और रिटर्न वैल्यू की जरूरत हो (जैसे चेनिंग के लिए)।

    append(): आधुनिक कोडिंग के लिए बेहतर, क्योंकि यह सरल और मल्टीपल आइटम्स को हैंडल करता है।
 */

/********************************************************/
const h2 = document.querySelector('h2')

const container = document.querySelector(".container");
const card = document.querySelector(".card");


for (let i = 2; i <= 10; i++) {
    const newCard = card.cloneNode(true);
    newCard.innerText = i;
    container.appendChild(newCard);
}
