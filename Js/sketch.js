// var poly;
var polys = [];
var angle = 75;
var delta = 10;

var deltaSlider;
var angleSlider;

function setup() {
  // put setup code here
  createCanvas(400, 400);
  // angleMode(DEGREES);
  background(51);
  deltaSlider = createSlider(0, 25, 10);
  angleSlider = createSlider(0, 90, 75);

  var inc = 100;
  for (var x = 0; x < width; x += inc) {
    for (var y = 0; y < height; y += inc) {
      poly = new Poligono();
      poly.addVertex(x, y);
      poly.addVertex(x + inc, y);
      poly.addVertex(x + inc, y + inc);
      poly.addVertex(x, y + inc);
      poly.close();
      polys.push(poly);
  }
 }
}
function draw() {
  // put drawing code here
  background(51);
  angle = angleSlider.value();
  delta = deltaSlider.value();
  for (var i = 0; i < polys.length; i++) {
    polys[i].hankin();
    polys[i].show();
  }
}
