const fs = require('fs');

// const book = {
//     title: 'C++',
//     author: 'Balguruswamy'
// }

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json',bookJSON);

// const bD = fs.readFileSync('1-json.json');
// const buffer = bD.toString();
// const data = JSON.parse(buffer);

// console.log(data.author);

const data = fs.readFileSync('1-json.json');

const data1 = data.toString();

const data2 = JSON.parse(data1);

data2.name = 'YOgita';

data2.age = '21';

const finalData = JSON.stringify(data2);
console.log(finalData);

fs.writeFileSync('1-json.json', finalData);