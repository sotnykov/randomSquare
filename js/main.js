function changeColor() {
  var block = document.querySelector('.block');
  var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Генерация случайного цвета

  block.style.background = randomColor;
}

function moveSquare() {
  var block = document.querySelector('.block');
  var bodyWidth = document.body.clientWidth - block.clientWidth;
  var bodyHeight = document.body.clientHeight - block.clientHeight;

  var randomLeft = Math.floor(Math.random() * bodyWidth);
  var randomTop = Math.floor(Math.random() * bodyHeight);

  block.style.left = randomLeft + 'px';
  block.style.top = randomTop + 'px';
}

setInterval(changeColor, 500);
setInterval(moveSquare, 1000);