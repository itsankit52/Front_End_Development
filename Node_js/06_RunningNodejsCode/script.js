const fs = require('fs');

// Read file from current directory
const val = fs.readFileSync('./text.txt');

// Write file to desktop
fs.writeFileSync("C:\\Users\\ankit\\OneDrive\\Desktop\\value.txt", "Update using Node.js");

// Read the written file
const value = fs.readFileSync("C:\\Users\\ankit\\OneDrive\\Desktop\\value.txt", 'utf-8');

// Rename File Name (value to NewName)
fs.renameSync("C:\\Users\\ankit\\OneDrive\\Desktop\\value.txt","C:\\Users\\ankit\\OneDrive\\Desktop\\NewName.txt") 

// Delete File 
fs.unlinkSync("C:\\Users\\ankit\\OneDrive\\Desktop\\NewName.txt")

// Print output
// console.log(val.toString());
// console.log(value);
// console.log("File Renamed Successfully");
// console.log("End of code...");

// This will open Google chrome  
const { exec } = require('child_process');

exec('"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" https://www.google.com');

