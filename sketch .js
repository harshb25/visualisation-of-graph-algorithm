
let graphCalculator;
let drawingMachine;

function setup() {
  createCanvas(windowWidth, windowHeight).parent('p5');
  drawingMachine = new DrawingMachine();


  document.querySelector('#calculate').addEventListener('click', () => {

    let startPoint = document.querySelector('#from').value;
    let endPoint = document.querySelector('#to').value;
    drawingMachine.calculateRoute(startPoint, endPoint);

  });

  document.querySelector('#generate').addEventListener('click', () => {

    drawingMachine.openGraphToCopy();

  });
}

function draw() {
  background(255);

  drawingMachine.drawGraph();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function mouseClicked() {
  if(mouseX > 0) {
    let clickCoords = [mouseX, mouseY]
    drawingMachine.addPoint(clickCoords);
    drawingMachine.addLine(clickCoords);
  }
}

function keyPressed() {
  if(keyCode === 13) {
    drawingMachine.generateGraphArray();
  }
  if(keyCode === 27) {
    drawingMachine.breakLine();
  }
}
