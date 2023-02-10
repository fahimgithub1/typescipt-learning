"use strict";
class Payer2 {
    // private name: string;
    // public age: number;
    // readonly country: string;
    // constructor(n: string, a: number, c: string){
    //     this.name = n;
    //     this.age = a;
    //     this.country = c;
    // }
    // *** shortcut for this type
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
        //function body
    }
    play() {
        console.log(`${this.name} from ${this.country}, this age is ${this.age}`);
    }
}
const musfik2 = new Payer2("Musfik", 40, "banglesesh");
const sakib2 = new Payer2("Sakib", 40, "banglesesh");
sakib.play();
// **** try to change ****
// sakib2.name = "fahim"; this is private variable con't reade or change out of class 
sakib2.age = 21;
// sakib2.country = "dfs" this is redonly con't change out of class only can show
console.log(sakib2.country);
