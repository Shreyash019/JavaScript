/*---------------------------------------------------------------------------------------------*/
/*--------------------------------------Regular Function---------------------------------------*/
/*---------------------------------------------------------------------------------------------*/


// // Regular function without paramenter and argument
// function regular1(){ 
//     console.log(`(Regular function) Welcome to regular function.`);
// }        
// regular1();  


// // Regular function with paramenter and argument
// function regular2(name){
//     console.log(`(Regular function) Welcome '${name}', to regular function learning.`)
// }
// regular2('Shreyash');


// // Function with default parameter value
// function regular3(para1='John', para2='Gaur'){
//     console.log(`(Regular function) Welcome ${para1} ${para2}, to regular function learning.`)
// }
// regular3('Shreyash');
// console.log();


// // (Implicit Return value) Function without return value, Function returns undefined if return value not define
// function regular4a(a,b){
//     adds = a+b;
//     console.log('Implicit Return value.');
//     return;      //here return statement will return undefined
// }
// const r4a = regular4a(100,200);
// console.log('(Regular Function) Without Return value:: '+r4a);


// // (Explicit Return value) Function return value
// function regular4b(a,b){
//     console.log('Explicit Return value.');
//     return a+b;
// }
// const r4b = regular4b(100,200);
// console.log('(Regular Function) With Return value:: '+r4b);
// console.log();


// // Functions with same name, when we call these functions only last define function will execute.
// function regular5(name){
//     console.log(`(Regular function) First function:: ${name}`);
// }
// function regular5(name){
//     console.log(`(Regular function) Second function:: ${name}`);
// }
// regular5('Regular');
// console.log();


// // Anonymous function -> Without function name
// const regular6 = function (){
//     console.log('Anonymous function');
// }
// regular6();


/*---------------------------------------------------------------------------------------------*/
/*---------------------------------------Arrow Function----------------------------------------*/
/*---------------------------------------------------------------------------------------------*/


// // Arrow function syntax
// let arrow1 = () =>{
//     console.log(`(Arrow function) Welcome to Arrow function.`);
// }
// arrow1();


// // Arrow function with parameter
// let arrow2 = (name) =>{
//     console.log(`(Arrow function) welcome '${name}' to Arrow function.`)
// }
// arrow2('Shreyash');


// // Arrow function with default parameter
// let arrow3 = (an3, an31='Kumar')=>{
//     console.log(`(Arrow function) ${an3} ${an31}`);
// }
// arrow3('John');
// console.log();


// // (Implicit Return value) Function without return value, Function returns undefined if return value not define
// let arrow4a = (a,b)=>{
//     sumq = a+b;
//     console.log('Implicit Return value.');
//     return;
// }
// let a4a = arrow4a(100,200);
// console.log('(Arrow Function) Without Return value:: '+a4a);


// // (Explicit Return value) Function return value
// let arrow4b = (a,b)=>{
//     console.log('Explicit Return value.');
//     return a+b;
// }
// let a4b = arrow4b(100,200);
// console.log('(Arrow Function) Without Return value:: '+a4b);
// console.log();



/*---------------------------------------------------------------------------------------------*/
/*--------------------------------------Function Methods---------------------------------------*/
/*---------------------------------------------------------------------------------------------*/



// // (Regular function and Arrow function) Function assignment to variable 
// function fnms1r(no){
//     console.log(`(Regular function) Function assignment to variable:: ${no}`);
// }
// const r1 = fnms1r;     // Function assignment to variable
// fnms1r('Regular function 1.');            // First way of calling functiom
// r1('Regular function 1.');                 // Second way of calling functiom


// let fnms1a = (no)=>{
//     console.log(`(Arrow function) Function assignment to variable:: ${no}`)
// }
// const a1 = fnms1a;
// fnms1a('Arrow function 1.')
// a1('Arrow function 1.'); 
// console.log();



// // Function expression (It can be created using regular function, Anonymous function and arrow function)
// const fnms2r = function regularcheck(rn8){
//     console.log(`This is from function expression created using "${rn8}"`);
// }

// const fnms2e = function(rn8){
//     console.log(`This is from function expression created using "${rn8}"`);
// }

// const fnms2a = (rn8)=>{
//     console.log(`This is from function expression created using "${rn8}"`);
// }

// fnms2a('Regular function');
// fnms2e('Anonymous function');
// fnms2a('Arrow function');


// // function Hoisting of Regular function and Arrow function.

// fnms3r();
// function fnms3r(){
//     console.log(`This is regular function hoisting.`)
// }


// // Hoisting for arrow function is not possible, it gives error when we do it.
// // Because before calling arrow function we need to initialize it first.
// /*fnms3a();
// let fnms3a = ()=>{
//     console.log(`This is arrow function hoisting.`)
// }*/


/* Self Invoking function */ 
// (function rselfInvok(){
//     console.log(100+500);
// }())
// // Note - We can't use Arrow function as self invoking function.


// /* FUnction as argument to another function */
// function rchild(val){
//     console.log(`This is ${val}`)
// }
// function rparent(show,callfn){
//     val = 'child regular function';
//     console.log(`${show} Regular class`);
//     callfn(val);
// }
// rparent('Parent', rchild);



// /* Returning function from another function */
// function preturn(a,b){
//     console.log('Super:: ',a+b);
//     return function(a,b){
//         psum = a+b;
//         console.log('Sub:: ',psum)
//     }
// }
// preturn(10,20);
// preturn(10,20)(100,200);
// let preturn1 = preturn(20,20);
// preturn1(300,400);