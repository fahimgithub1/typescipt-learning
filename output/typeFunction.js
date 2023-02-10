"use strict";
// 11111
const myfun = () => {
    console.log("myfun");
};
// 222222
let myfun1;
myfun1 = () => {
    console.log("myfun1");
};
// 222222
// let myfun2: Function;
const myfun2 = (a, b, c) => {
    console.log(`Name: ${a}, Age: ${b} c: ${c}`);
    //  return void // void means there have nothing
    // return undefine // undefine means thare have value that is undefine
};
myfun2('fahim', 23);
//333333
const myfun3 = (a, b, c) => {
    return a * b;
};
myfun3(3, 4);
