const fs = require("fs");
const readline = require("readline");
const excludeWords=fs.readFileSync('./exclude-words.txt',(err,data)=>{
      if(err) console.log(err)
      else{
            return data.toString().split('\n')
      }
})
const str = '';

const replacedStr = str.replace(/[/,\.\:-\\()]/
, "");

console.log(replacedStr); // "amit"
const index = {};

const readFile = (filename,page) => {
  const reader = readline.createInterface({
    input: fs.createReadStream(filename),
  });
  reader.on("line", (line) => {
      const words = line.split(" ");
      words.forEach((word) => {
        const w=word.toLowerCase().replace(/[/,\.\:-\\()]/
        , "");
        if(w.includes('(') || Number.isInteger(parseInt(w))){
            // do nothing
        }
        else{
            if (!excludeWords.includes(w)) {
                  if (!index[w]){
                    index[w] = [page];
                  }
                  else{
                     !index[w].includes(page) && index[w].push(page)
                  }
                }
              }});
        }
     
 );

reader.on("close", () => {
      // Sort the words alphabetically.
      const sortedWords = Object.keys(index).sort();
      // Write the index to a file.
      fs.writeFile("index.txt", sortedWords.map((word) => {
        const pages = index[word].join(",");
        return `${word}:${pages}`;
      }).join("\n"), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
};
readFile("Page3.txt",3);
readFile("Page1.txt",1);
readFile("Page2.txt",2);


