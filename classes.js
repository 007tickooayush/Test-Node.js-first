class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

var square = new Rectangle(5,5);
console.log(square);

var rectangle = new Rectangle(4,5);
console.log(rectangle);

//definition with names expression
var square = class Rectangle{
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
}   

const sq = new square(5, 5);
const poster = new square(2, 3); 

console.log(sq.height);

var Square = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
  }
};

const sqr = new Square(5, 5);
const poster_sq = new Square(2, 3); 

console.log(sqr.height);