// 11111
let add: (x: number, y: number) => number;

add = (a: number, b:number)=>{
    return a+b;
}

console.log(add(30,21));

// 22222
let calculatin: (x: number, y: number, act: string) => number;

calculatin = (x: number, y: number, act: string) =>{
    if(act === 'add'){
        return x + b
    }else{
        return 0
    }
}

console.log(calculatin(45, 32, 'add'));
console.log(calculatin(45, 32, 'ee'));