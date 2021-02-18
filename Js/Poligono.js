function Poligono() {
  this.vertices = [];
  this.esquinas = [];

  this.addVertex = function(x, y) {
    var a = createVector(x, y);
    var total = this.vertices.length;
    if (total > 0) {
      var prev = this.vertices[total - 1];
      var esquina = new Esquina(prev, a);
      this.esquinas.push(esquina);
    }
    this.vertices.push(a);
  }

  this.close = function() {
    var total = this.vertices.length;
    var last = this.vertices[total - 1];
    var first = this.vertices[0];
    var esquina = new Esquina(last, first);
    this.esquinas.push(esquina);
  }

  this.hankin = function() {
    for (var i = 0; i < this.esquinas.length; i++) {
      this.esquinas[i].hankin();
    }

    for (var i = 0; i < this.esquinas.length; i++) {
      for (var j = 0; j < this.esquinas.length; j++) {
        if (i !== j) {
          this.esquinas[i].findEnds(this.esquinas[j]);
        }
      }
    }
  }

  this.show = function() {
    for (var i = 0; i < this.esquinas.length; i++) {
      this.esquinas[i].show();
    }
  }
}
