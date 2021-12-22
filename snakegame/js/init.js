const APPLICATION_KEY = "178b30ec65cffa1cbc3e29c8ae236b88b63032d9fd8aa6705891b9730fc79b72";
const CLIENT_KEY = "8397eeeb9c7b5bc64bafad5ff41fb5895ec92c64d9b4547884603b56969616ed";

document.addEventListener('keydown', keyPush);

const canv = document.getElementById("canvas");
const ctx = canv.getContext("2d");
const SIZE = 20;
let x = 10;
const MIN = 5;

function hard(){
  alert("HARD MODE");
  x = 15;
}

function easy(){
  alert("EASY MODE");
  x = 5;
}
let FPS = x;

let px = py = SIZE/2;
let xd = yd = 0;
let snake = [];
let tail = MIN;
let appleX = appleY = 15;
let pappleX = pappleY = 17;
let score ;
