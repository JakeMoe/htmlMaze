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
