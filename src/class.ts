class Payer {
    name: string;
    age: number;
    country: string;

    constructor(n: string, a: number, c: string){
        this.name = n;
        this.age = a;
        this.country = c;
    }
    
    play(){
        console.log(`${this.name} from ${this.country}, this age is ${this.age}`)
    }
}

const musfik = new Payer("Musfik", 40, "banglesesh");
const sakib = new Payer("Sakib", 40, "banglesesh");
sakib.play();

// const players: string[] =[];
const players: Payer[] =[]; 
players.push(sakib);
players.push(musfik);

console.log(players)
