var ctx;
var mainForm;
var mazeHeight;
var mazeWidth;

function onLoad() {

  mazeHeight = 500;
  mazeWidth = 500;

  mainForm = document.getElementById("mainForm");
  mainForm.height = mazeHeight;
  mainForm.width = mazeWidth;
  mainForm.style.height = mazeHeight;
  mainForm.style.width = mazeWidth;

  ctx = mainForm.getContext("2d");
  ctx.strokeStyle = 'black';
  ctx.strokeRect(0, 0, mazeHeight, mazeWidth);
}

class mazeCell {

  var col;
  var eastWall;
  var northWall;
  var row;
  var southWall;
  var visited;
  var westWall;

  constructor(col, row) {
    this.col = col;
    this.row = row;

    this.eastWall = true;
    this.northWall = true;
    this.southWall = true;
    this.westWall = true;

    this.visited = true;
  }

}

class maze {
  
}
