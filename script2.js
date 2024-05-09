//OOP

//Factory function

function createRect(height, width) {
  return {
    height: height,
    width: width,
    calcArea: function () {
      return this.height * this.width;
    },
  };
}

const rect1 = createRect(2, 3);
const rect2 = createRect(5, 3);
const rect3 = createRect(6, 3);
