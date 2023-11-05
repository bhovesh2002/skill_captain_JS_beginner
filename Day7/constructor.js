function Rectangle(width, height){
    this.width = width;
    this.height = height;

    this.area = function(){
        return this.width*this.height;
    }
}

let rect1 = new Rectangle(4,5);
let area = rect1.area();

console.log("Area of the rectangle: " + area);
