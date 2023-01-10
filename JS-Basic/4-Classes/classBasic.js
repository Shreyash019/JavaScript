class Demo1{
    name = 'Class';
    printf(){
        console.log(`Hello from ${this.name}`)
    }
    
}
Demo1.printf()
var obj1 = Demo1;
obj1.printf();


// class Demo2{
//     constructor(name){
//         this.name = name
//     }
//     printf(){
//         console.log(`Hello from ${this.name}`)
//     }
    
// }

// var obj2 = new Demo2('Demo 2');
// obj2.printf();

// function Pen(name, color, price) {
//     this.name = name;
//     this.color = color;
//     this.price = price;
//    }
//    const pen1 = new Pen("Marker", "Blue", "$3");
//    Pen.prototype.showPrice = function(){
//     console.log(`Price of ${this.name} is ${this.price}`);
//    }
//    pen1.showPrice()