// 11111
const myfun = () => {
    console.log("myfun");
}

// 222222
let myfun1: Function;
myfun1 = () => {
    console.log("myfun1");
}

// 222222
// let myfun2: Function;
const myfun2 = (a: string, b: number, c?:string) => { // "c?:string" this means it is optonal 
     console.log(`Name: ${a}, Age: ${b} c: ${c}`);
    //  return void // void means there have nothing
    // return undefine // undefine means thare have value that is undefine
}

myfun2('fahim', 23)

//333333
const myfun3 = (a: number, b: number, c?:string) : number => { // we can fixed the return type, what is the functin is return
    return a * b;
}

myfun3(3,4)