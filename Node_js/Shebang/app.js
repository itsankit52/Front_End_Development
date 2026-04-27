#!C:\Users\ankit\OneDrive\Desktop\node.exe


console.log("This file contains information about shebang or hashbang");

let n = 0;
setInterval(() => {
    console.log(++n);
}, 1000);


/*
    #!/usr/bin/env node 

    . A shebang in Node.js allows JavaScript file to behave like an executable script, so don’t need to manually type node every time.
    . Tell the OS -> use Node.js to run this file.

    BENEFITS 
        . Makes script behave like a real command
        . Cleaner CLI usage
        . Required for npm global packages


        Shebang is heavily used in CLI tools 
        eg... 
            npm, npx, create-react-app, vite 
        These tools are actually Node.js scripts with shebang
*/