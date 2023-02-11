import {isPlayers} from "../Interface/isPlayer.js"

class PayerInterfac3 implements isPlayers {

    constructor(){
        public name: string,
        public age: number,
        readonly country: string
    }
    
    player(){
        console.log(`${this.name} from ${this.country}, this age is ${this.age}`)
    }
}

// const musfik22 = new PayerInterface("Musfik", 40, "banglesesh");
let sakib22 : isPlayers

sakib22 = new PayerInterface3("Sakib", 40, "banglesesh");
// sakib.player();
