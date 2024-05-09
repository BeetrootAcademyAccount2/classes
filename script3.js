function Rect(selectedHeight, selectedWidth) {
  this.height = selectedHeight;
  this.width = selectedWidth;
  this.calcArea = function (height, width) {
    return height * width;
  };
}

const rect1 = new Rect(2, 3);
const rect2 = new Rect(12, 3);
const rect3 = new Rect(42, 3);

console.log(rect1.calcArea(5, 5));
