// it is not support in every browser. it only support in modern brer
export class Payer2Class {
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
;
