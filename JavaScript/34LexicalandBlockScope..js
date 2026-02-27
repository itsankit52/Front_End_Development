// debugger
function substract() {
    const x = 40;
    const y = 20;

    console.log(x - y); // 20

    function child() {
        const childName = "Ganpat";
        console.log(childName); // Ganpat


        function lexicalScope() {
            const childName2 = "Moli";
            console.log(childName2); // Moli
        }

        lexicalScope(); //call lexicalScope
    }

    child(); //call child 

    // Block scope 
    {
        let a = 10;
        console.log(a); // 10
    }
}

substract();
