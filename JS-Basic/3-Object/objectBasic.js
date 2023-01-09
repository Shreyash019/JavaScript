////////// Ways of Creating objects in JS //////////

// Using Curly Braces --------------------
const creObj1 = {}
//console.log(creObj1);

// Using New Keyword ---------------------
const creObj2 = new Object();
creObj2[1] = 'Msg'
//console.log(creObj2, typeof(creObj2));

// Using Constructor ---------------------
function Obj3(p1,p2){
    this.name = p1;
    this.sign = p2;
}
const creObj3 = new Obj3('A', 1231);
// console.log(creObj3, typeof(creObj3));
// for confusion
// console.log(Obj3, typeof(creObj3));

////////////////////////////////////////////////////////////////////////////////////////


// Asseccing values without defining

const assObj = {
    name: 'Asscess Object',
    age: 23,
}

// // Accessing before assignment
// console.log('Access Using .key ', assObj.val) // assObj.val will return undefined
// console.log('Accessing using subscript', assObj["val"])  // assObj[val] will also return undefined   
// console.log(`Accesing using subscript without('' , "") ::`, assObj[age]) // This will give an error as object values are not accessible without wrapping keys in quotes 


// // Object Hoisting
// console.log(hosObj);
// const hosObj = {
//     type: 'Hoisting'
// }
// // Object hoisting is not possible


// // Object equlaity if they have same properties
// const equObj1 = {
//     n: 'n'
// }
// const equObj2 = {
//     n: 'n'
// }
// const equObj3 = equObj2
// console.log(equObj1 === equObj2); // False
// console.log(equObj1 == equObj2); // False
// console.log(equObj2 == equObj3); // True
// console.log(equObj2 === equObj3); // True
// // 1,2 will give false and 3,4 will give true because equObj1 and equObj2 have different reference to their values despite having same properties
// // but equObj2 and equObj3 have same refernce because equObj3 assigned to a equObj2 reference
// // Any changes made with equObj3 will reflect in action property
// console.log(equObj2);
// equObj3.n = 'Changes value'
// console.log(equObj2);

// // Puzzle Question
// function change1(obj) {
//     console.log(obj)
//     obj.name = "ninjas"
//     console.log(obj)
//   }
//   function change2(obj) {
//     console.log(obj) // Global context object
//     obj = {name: "changed"}
//     console.log(obj) // Local contect object as new object is defined in previous step
//   }
  
//   var obj = {name:"coding"}
  
//   change1(obj);
//   change2(obj);
//   console.log(obj.name);



// const itObj = {
//     type: 'Iteration',
//     method1: 'Object.entries(object)',
//     method2: 'Object.keys(object)',
//     method3: 'Object.values(object)',
//     method4: 'For loop',
//     method5: 'forEach()',
//     method6: 'map()',
// }

// console.log(Object.keys(itObj));
// console.log(Object.values(itObj))

// for(i in itObj){
//     console.log(itObj[i])
// }
// // Using forEach function
// Object.entries(itObj).forEach(([i, value]) => {
//     console.log(value)
// });
// Object.keys(itObj).forEach((i) => {
//     console.log(itObj[i])
// });
// Object.values(itObj).forEach((value) => {
//     console.log(value)
// });
// // Using map function
// Object.entries(itObj).map(([i, value]) => {
//     console.log(value)
// });
// Object.keys(itObj).map((i) => {
//     console.log(itObj[i])
// });
// Object.values(itObj).map((value) => {
//     console.log(value)
// });