let scl = 11;

let sigma = 10;
let rho = 28;
let beta = 8.0 / 3.0;

let dt = 0.005;

let x = [];
let y = [];
let z = [];

let px = [];
let py = [];
let pz = [];

let amount = 500;

let canvas
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0)
  canvas.style("z-index","-1")
  
  for (let i = 0; i < amount + 1; i++){
    x.push(random(-0.01,0.01));
    y.push(random(-0.01,0.01));
    z.push(random(-0.01,0.01));
    
    px.push(x[x.length - 1]);
    py.push(y[y.length - 1]);
    pz.push(z[z.length - 1]);
  }
  stroke(255, 100)
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {

  clear()
  translate(width / 2, height / 2)
  
  for (let i = 0; i < amount;i++){
    var dx = (sigma * (y[i] - x[i])) * dt;
    var dy = (x[i] * (rho - z[i]) - y[i]) * dt;
    var dz = (x[i] * y[i] - beta * z[i]) * dt; 
    
    px[i] = x[i];
    py[i] = y[i];
    pz[i] = z[i];
    
    x[i] += dx;
    y[i] += dy;
    z[i] += dz;
    
    line(px[i] * scl, py[i] * scl, x[i] * scl, y[i] * scl)
    
  }
}