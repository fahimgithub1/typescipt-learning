"use strict";
// Generics is reuseable block of code 
// const addId = <T>(obj: T) => {
//     let id = Math.floor(Math.random() * 100)
//     return{...obj, id}
// }
// const addId = <T extends object>(obj: T) => { // this teld that paramiter must be objects
//     let id = Math.floor(Math.random() * 100)
//     return{...obj, id}
// }
const addId = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
/// 11111
let addId1 = addId({
    name: "fahim",
    age: 40
});
/// 22222
let addId12 = addId({
    name: "fahim",
    age: 40,
    country: "bangladesh"
});
const response1 = {
    status: 200,
    type: "gpppd",
    data: {
        name: 'test',
        something: 500
    }
};
