// Generics is reuseable block of code 

const addId = <T>(obj: T) => {
    let id = Math.floor(Math.random() * 100)
    return{...obj, id}
}

/// 11111
let addId = addId({
    name: "fahim",
    age: 40
})

/// 22222
let addId = addId({
    name: "fahim",
    age: 40,
    country : "bangladesh"
})
