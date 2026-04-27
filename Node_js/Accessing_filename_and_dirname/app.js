// import.meta.name ="Ankit Thakur" // We can do this 

const { filename, dirname } = import.meta

// console.log(filename, dirname);

console.log(process.cwd()); // it return the directory from where run the Node command eg.. node Accessing_filename_and_dirname/app.js
// Not the file location. It is the execution location 
