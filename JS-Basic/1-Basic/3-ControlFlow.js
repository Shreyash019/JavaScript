/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
------------------------- Control Statement ------------------------->
*/ //////////////////////////////////////////////////////////////////


// /* <<<<<<<<<<<<<<< if >>>>>>>>>>>>>>> */
// let ifBolA = false;
// if(!ifBolA){
//     console.log('Yes')
// }
// if(ifBolA){
//     console.log('Yes')
// }
// console.log('No'); // Whatever will be condition this will always execute.


// /* <<<<<<<<<<<<<<< if ... else >>>>>>>>>>>>>>> */
// //let ifBolB = true;
// let ifBolB = false;
// if(ifBolB){
//     console.log('Yes');
// } else {
//     console.log('No');
// }


// /* <<<<<<<<<<<<<<< if ... else if ... else >>>>>>>>>>>>>>> */
// let ifBolC = 49;
// if(ifBolC%2==0){
//     console.log(`${ifBolC} is divisble by 2`);
// } 
// else if(ifBolC%5==0){
//     console.log(`${ifBolC} is divisble by 5.`);
// }
// else if(ifBolC%7==0){ // This statement will be executed as condition is met.
//     console.log(`${ifBolC} is divisble by 7.`);
// } else {
//     console.log(`${ifBolC} is not Divisible.`);
// }



//////////////////////////////////////////////////////////
///////////////// Loops & it's types /////////////////////
//////////////////////////////////////////////////////////


// /* <<<<<<<<<<<<<<< for loop >>>>>>>>>>>>>>> */
// // for(InitialExpression; Condition; UpdateExpression(Increment/Decrement)){
// //  ...body
// //}
// let xfl = 10;
// for(let i=0; i<xfl; i++){
//     console.log(`Running 'FOR' loop for ${i+1} times.`);
// }


// /* <<<<<<<<<<<<<<< while loop >>>>>>>>>>>>>>> */
// // initialExpression;
// // while(Condtion){
// //  ...body
// //  UpdateExpression(Increment/Decrement)
// //}
// let xwl = 0;
// while(xwl< 5){
//     console.log(`Running 'WHILE' loop for ${xwl+1} times.`);
//     xwl++;
// }


// /* <<<<<<<<<<<<<<< while loop >>>>>>>>>>>>>>> */
// // switch(variable/expression){
// //  case 1:
// //      ...body
// //  case 2:
// //      ...body
// //  .....
// //  case n:
// //      ...body
// //  default:
// //      ...body of default
// //}
// let xSC = 'THT';
// switch(xSC){
//     case 'FHT':
//         console.log(`Case 1 condition met for ${xSC}.`);
//         break;
//     case 'THT':
//         console.log(`Case 2 condition met for ${xSC}.`);
//         //break;
//     default:
//         // This will run if satisfying Cases will not fulfill the conditions.
//         // And also it will run if satisfying condtion don't have break statement.
//         console.log(`No Case condition met for ${xSC}.`); 
// }



///////////////////////////////<<<<<*>>>>>///////////////////////////////
////////////////////<<<<<<<<<<<<<< END >>>>>>>>>>>>>>>///////////////////
///////////////////////////////<<<<<*>>>>>///////////////////////////////