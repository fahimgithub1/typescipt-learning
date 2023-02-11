import {Payer2Class} from "./classes/playsasClass.js"

const musfik = new Payer2Class("Musfik", 40, "banglesesh");
const sakib = new Payer2Class("Sakib", 40, "banglesesh");
sakib.play();

// const players: string[] =[];
const players: Payer2Class[] =[]; 
players.push(sakib);
players.push(musfik);

console.log(players)