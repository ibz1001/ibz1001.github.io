let scl = 5;

let sigma = 10;
let rho = 28;
let beta = 8.0 / 3.0;

let dt = 0.01;

let x = [];
let y = [];
let z = [];

let px = [];
let py = [];
let pz = [];

let amount = 100;
let desired = 100;


function setup() {
  createCanvas(500, 500);
  background(0);
  

  
  
  for (let i = 0; i < amount + 1; i++){
    x.push(random(-0.01,0.01));
    y.push(random(-0.01,0.01));
    z.push(random(-0.01,0.01));
    
    px.push(x[x.length - 1]);
    py.push(y[y.length - 1]);
    pz.push(z[z.length - 1]);
  }
  
  

  
}

function draw() {


  
  background(0,20)
  stroke(255, 0, 0, 100)
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
    
    translate(width / 4, height / 4)
    line(px[i] * scl, py[i] * scl, x[i] * scl, y[i] * scl)
    translate(width / 2,-height / 4)
    line(py[i] * scl, pz[i] * scl, y[i] * scl, z[i] * scl)
    translate(-(width / 4) * 3,(height / 4) * 3)
    line(pz[i] * scl, px[i] * scl, z[i] * scl, x[i] * scl)
    translate(-0, -((height / 4) * 3))
    
  }



  
  if (amount < desired){
    x.push(random(-0.01,0.01));
    y.push(random(-0.01,0.01));
    z.push(random(-0.01,0.01));
    
    px.push(x[x.length - 1]);
    py.push(y[y.length - 1]);
    pz.push(z[z.length - 1]);
    amount++;
  }
  
  
  
}

