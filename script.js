/*
const rect = {
  height: 5,
  width: 3,
  calcArea: function (height, width) {
    return height * width;
  },
};

const rect1Area = rect.calcArea(4, 3);
const rect2Area = rect.calcArea(14, 3);
const rect3Area = rect.calcArea(54, 3);

console.log(rectArea);
*/

//Functional Programming

function createRect(height, width, color) {
  return {
    height: height,
    width: width,
    color: color,
  };
}

const arrayRect = [
  createRect(2, 3, "red"),
  createRect(12, 3, "blue"),
  createRect(7, 3, "green"),
];

function calcArea(rect) {
  return rect.width * rect.height;
}

// const rect1Area = calcArea(rect1);

function rectOddAreaArray() {
  return arrayRect.filter((rect) => calcArea(rect) % 2 !== 0);
}

console.log(rectOddAreaArray());
