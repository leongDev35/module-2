var fs = require('fs');
var data = {
    name: "cliff",
    age: "34",
   
  }
  var data1 = {
    name: "e",
    age: "34",
   
  }

var jsonData = JSON.stringify(data);
var jsonData1 = JSON.stringify(data1);
//! lưu vào và thay đổi hết nội dung file
// fs.writeFile("test.txt", jsonData1, function(err:any) {
//     if (err) {
//         console.log(err);
//     }
// });
fs.appendFile('./test.txt',jsonData1 ,  function (err:string, data:string) {
    if (err) throw err;
    console.log('write file successfully');
});

fs.readFile('./test.txt', function (err:string, data: string) {
    if (err) throw err;
    return data.toString();
});