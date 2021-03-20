//FS -- file system method

//create node script!

//IN NODE:
//touch boilerplate.js


//IN VSC js file:
const fs = require('fs')
console.log(fs)
//IN NODE: 
//fs.mkdir('/temp/a/apple', { recursive: true}, {err} => {  // <---- .mkdir is ASYNCHRONUS, so it came first
    console.log("in the callback!")
    if {err} throw err;  
//IN NODE: 
//fs.mkdirSync('cats')  <-- this is synchronus
console.log("I come after mkdir in the file")
})


// IN NODE: (you need to do [2] to grab the newest element in this list)
const folderName = process.argvp[2] || "project"

try{
fs.mkdirSync(folderName)
fs.writeFileSync(`${folderName}/index.html`)
fs.writeFileSync(`${folderName}/app.js`)
fs.writeFileSync(`${folderName}/style.css`)
} catch(e){
    console.log("Something Went Wrong!")
    console.log(e)
}

// in node:  node boilerplate.js Portfolio
// cd Portfolio
// ls  (to check)