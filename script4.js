//Class

class Rect {
  constructor(height, width) {
    console.log("here");
    //fetch data

    this.height = height; //fetchedHeight
    this.width = width; //fetchedWidth
    this.color = "red";
  }

  calcArea() {
    return this.height * this.width;
  }

  static info() {
    return "A rectangle is a type of quadrilateral, whose opposite sides are equal and parallel.";
  }

  renderOnScreen() {}
}

const fetchData = [
  { data: { point: { values: { a: 2, b: 3 } } } },
  { data: { point: { values: { a: 2, b: 3 } } } },
];
const fetchDataWithArr = [
  {
    data: [
      { a: 2, b: 3 },
      { a: 3, b: 4 },
    ],
  },
];
const listOfRect = [];

fetchData.forEach((item) => {
  const rect = new Rect(item.data.point.values.a, item.data.point.values.b);
  listOfRect.push(rect);
});

const rect1 = new Rect(2, 3);

console.log(Rect.info());

class Operations {
  static sumOfTwoNumbers(a, b) {
    return a + b;
  }
}

const sumOfNumbers = Operations.sumOfTwoNumbers(2, 2);
