// /* CallBack function */
// function callbackSubchild(){
//     console.log('Sub child function.')
// }
// function callbackChild(callback){
//     console.log('Before child function call to sub child.');
//     callback(); // callback() -> callbackSubchild();
//     console.log('After child function call to sub child.');
// }
// function parent(){
//     console.log('(Before) Parent function call to child.');
//     callbackChild(callbackSubchild);
//     console.log('(After) Parent function call to child.')
// }
// parent(); // parent() -> callBackChild() -> callBackSubCHild()



// /* Callback and setTimeout() Asynchronous execution */
// function sayname1(name){
//     console.log(`Hello ${name}`);       // Call sequence 2nd execute 1st
// }
// function greet1(){
//     console.log('Hello world! from setTimeout call.');        // Call sequence 1st execute 2nd
// }
// setTimeout(greet1,4000);
// sayname1('Shreyash');



// /* callback and setTimeout() Synchronous execution */
// function sayname2(name){
//     console.log(`Hello ${name}`);       // Call sequence 2nd execute 2nd
// }
// function greet2(myfun, name){
//     console.log('Hello world!');        // Call sequence 1st execute 1st
//     myfun(name);
// }
// setTimeout(greet2,2000, sayname2, 'Shreyash',);



// /* Callback with settimeout() (Asynchronous execution) */
// function setTimeoutCallFun(){
//     console.log('setTimeoutCallFun() :: This is callback function of setTimeout()');
// }
// function subSubChildFun(){
//     console.log('subSubChildFun() :: Childchild Function.')
// }
// function subChildFun(callback){
//     console.log('subChildFun() :: Before');
//     callback();
//     console.log('subChildFun() :: After');
// }
// function parentFun(){
//     console.log('parentFun() :: (Before) Parent function call to child.');
//     subChildFun(subSubChildFun);
//     console.log('parentFun() :: (After) Parent function call to child.');
//     setTimeout(setTimeoutCallFun,3000)
// }
// parentFun();




// /* Callback with settimeout() (Synchronous execution) */
// function settimeoutFunc(){
//     console.log('settimeoutFunc() :: This is callback function of setTimeout()');
// }
// function subSubChildFunc(callback){
//     console.log('subSubChildFunc() :: Before Childchild Function.');
//     setTimeout(callback,1000);
//     console.log('subSubChildFunc() :: After Childchild Function.');
    
// }
// function subChildFunc(callback){
//     console.log('subChildFunc() :: Before');
//     setTimeout(callback, 1000, settimeoutFunc)
//     console.log('subChildFunc() :: After');
// }
// function parentFunc(callback){
//     console.log('parentFunc() :: (Before) Parent function call to child.');
//     setTimeout(callback, 2000, subSubChildFunc)
//     console.log('parentFunc() :: (After) Parent function call to child.')
// }
// setTimeout(parentFunc, 4000, subChildFunc);


// const level3Fun = () =>{
//     console.log(`level3Fun() :: Called`);
// }
// const level2Fun = (callback2) =>{
//     callback2()
//     console.log(`level2Fun() :: called`);
// }
// const level1Fun = (callback1, callback2) =>{
//     callback1(callback2)
//     console.log(`level1Fun() :: called`);
// }
// setTimeout(level1Fun, 3000, level2Fun, level3Fun);