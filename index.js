// console.log("welcome");
// console.log("welcome to my first node js program");
// console.log("hello");
// console.log("hi");
// console.log("welcome spark");
// console.log("madhuri");
// const module1=require('./circle.js');
// console.log(module1(2));
// const module2=require('./circle.js');
// console.log(module1(2));
// const circle=require('./circle.js');
// console.log(`the area of a circle of radius 4 is ${circle.area(4)}`);
// console.log(`the  circumference of a circle of radius 4 is ${circle.circumference(4)}`);
// const s=require('./squre.js');
// const myclass=new s(3);

// console.log(`Area:-${myclass.area()}`);
// import {addtwo} from './add.mjs';
// const os=require('os');

// console.log(os.homedir());
// console.log(os.freemem().toString());
// console.log(os.platform());
// console.log(os.hostname());
// console.log(os.release());
// console.log(os.vesion());
// console.log(addtwo(2,3));
const p=require('path');
console.log(p.basename('c:\\temp\\myfile.html'));
const a2=p.dirname('c:\\temp\\myfile.html');
console.log(a2);
const a3=p.extname(__filename);
const a4=p.extname('c:\\temp\\myfile.html');
console.log(a3);
console.log(a4);
console.log(__dirname);


