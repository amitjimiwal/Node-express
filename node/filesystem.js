// read write append delete files

// importing the sum moduel
const { error } = require('console');
const sum=require('./sum')
const fs=require('fs'); //file module imported 
// readFile asynchronously file read  while readFileSync reads file synchronously.
fs.readFile('./readfile.txt',(error,data)=>{
   if(error) console.log(error);
   else console.log(data.toString()); 
   console.log('read done');
})
console.log('Read')
let content="Changed the content";
// writeFile asynchronously write  while writeFileSync write file synchronously. deleting previous content if exist
fs.writeFile('newfile.txt',content,(error)=>{
    if(error) console.log(error);
    else console.log('file created');
})

//append file adds content to the file after the end of previous content in a async manner
// appendFile asynchronously file append  while appendFileSync appends file synchronously.
fs.appendFile('./newfile.txt'," appended some content after it",(err)=>{
      if(err) console.log(err)
      else console.log("Append success");
})


// 
console.log('terminated');
console.log(sum(5,10))