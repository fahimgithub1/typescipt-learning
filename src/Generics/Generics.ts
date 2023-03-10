// Generics is reuseable block of code 

// const addId = <T>(obj: T) => {
//     let id = Math.floor(Math.random() * 100)
//     return{...obj, id}
// }

// const addId = <T extends object>(obj: T) => { // this teld that paramiter must be objects
//     let id = Math.floor(Math.random() * 100)
//     return{...obj, id}
// }

const addId = <T extends {name: string, age: number}>(obj: T) => { // this spacify the objects type
    let id = Math.floor(Math.random() * 100)
    return{...obj, id}
}

/// 11111
let addId1 = addId({
    name: "fahim",
    age: 40
})

/// 22222
let addId12 = addId({
    name: "fahim",
    age: 40,
    country : "bangladesh"
})


// real exampla
interface APIResponse<T> {
    status: number;
    type: string;
    data: T
}

const response1: APIResponse<object> ={
    status: 200,
    type: "gpppd",
    data: {
        name: 'test',
        something: 500
    }
}
