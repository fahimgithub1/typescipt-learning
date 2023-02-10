console.log("hello")

const x = "BDcomputer Love every one"

console.log(x)

// *** variable decler ****
// 1111
let playername = "fahim" // "playername will decler as string"
console.log(playername);
// playername = 32; error

// 22222
let playername1; // "playername will not decler any type in this case we can assined ay value string. int"
playername1 = "fahim";
console.log(playername1)

playername1 = 34;
console.log(playername1)

// *** function ***
function multipal(a : number, b:number){
    return a * b;
}

// console.log(multipal("fahim",4)); //error
console.log(multipal(2,4));


// *** array ***
let fruits = ['appe', "banana", 'orange'];

// fruits.push(34) // error it undestend this is srtng array

let fruits1 = ['appe', "banana", 'orange', 10];

fruits1.push(34) //  


// *** objects ***
let persin = {
    name: "fahim",
    age: 23,
    job: "UI/UX designe"
}

// persin.name = 32 // arror it is string 
persin.name = "patowary"