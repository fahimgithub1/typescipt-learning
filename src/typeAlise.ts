// type allises make commone type on one variable 

type stringOrNumber = string | number;

type userDetails = {
    name: string,
    age: stringOrNumber
}

const sayHellow = (user: stringOrNumber)=>{
    return user;
}