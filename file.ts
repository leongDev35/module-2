const fs = require('fs');
let obj = {
    name: 'foo',
    age: 3600
}
let obj1 = {
    name: 'foo',
    age: 3600
}
let chuoi = JSON.stringify(obj)
let buoi = JSON.stringify(obj1)

fs.readFile('./test.txt', function (err:string, data: string) {
    if (err) throw err;
    console.log(data.toString());
});
fs.writeFile('file.txt','${chuoi}' ,  function(err:string) {
    if (err) {
        return console.error(err);
    }
    console.log("File created!");
});

fs.appendFile('./test.txt', `${buoi}`,  function (err:string, data:string) {
    if (err) throw err;
    console.log('write file successfully');
});
console.log(1);
