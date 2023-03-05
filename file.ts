const fs = require('fs');

fs.readFile('./test.txt', function (err:string, data: string) {
    if (err) throw err;
    console.log(data.toString());
});
fs.writeFile('file.txt', 'I am cool!',  function(err:string) {
    if (err) {
        return console.error(err);
    }
    console.log("File created!");
});

fs.appendFile('./test.txt', '\n Viblo top 1',  function (err:string, data:string) {
    if (err) throw err;
    console.log('write file successfully');
});
console.log(1);