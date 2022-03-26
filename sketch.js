let scl = 200

//constants for the formulae
const a = 0.95;
const b = 0.7;
const c = 0.65;
const d = 3.5;
const e = 0.25;
const f = 0.1;



//time variable
const dt = 0.05;

let x = [];
let y = [];
let z = [];
//position on the last frame
let px = [];
let py = [];
let pz = [];

let amount = 1000
let desired = 1000

let canvas;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0)
  canvas.style("z-index","-1")
  
  for (let i  = 0; i < amount; i++){
    x.push(random(-0.01,0.01))
    y.push(random(-0.01,0.01))
    z.push(random(-0.01,0.01))
    
    px.push(x[x.length - 1]);
    py.push(y[y.length - 1]);
    pz.push(z[z.length - 1]);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  
  clear()
  translate(width / 2, height/2)
  
  for (let i = 0; i < amount; i++){
    //calculate
    var dx = dt * ((z[i] - b) * x[i] - d*y[i]);
    var dy = dt * (d*x[i]+(z[i]-b)*y[i]);
    var dz = dt * (c + a*z[i] - (z[i]**3)/3 - (x[i]**2 + y[i]**2)*(1+e*z[i]) + f * z[i] * x[i]**3);
    //add to current pos
    px[i] = x[i];
    py[i] = y[i];
    pz[i] = z[i];
    
    x[i] += dx;
    y[i] += dy;
    z[i] += dz;
    
    let variableAmount = map(y[i],-1.76,1.76,30,255)
    stroke(variableAmount, 0, 0,100)
    line(px[i] * scl,pz[i] * scl,x[i] * scl,z[i] * scl)
      
  }
  if (amount < desired){
    x.push(random(-0.01,0.01))
    y.push(random(-0.01,0.01))
    z.push(random(-0.01,0.01))
    
    px.push(x[x.length - 1]);
    py.push(y[y.length - 1]);
    pz.push(z[z.length - 1]);
    amount++
  } 
}