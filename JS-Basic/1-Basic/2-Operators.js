/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
-----------------------Operators in JavaScript----------------------->
*/ //////////////////////////////////////////////////////////////////

/*
    Operators are used to perform operation on operands.
*/


// // (1+2, a*b...) :: Symbols like '+', '*' are Operators and 1, 2, a, b -> Operands.


////////////////////////////////<<<<<**>>>>>////////////////////////////////
//////////////<<<<<<<<<<<<<< Types of Operator >>>>>>>>>>>>>>>//////////////
////////////////////////////////<<<<<**>>>>>////////////////////////////////


/////////////////////////////////////////////////////////////////////////
//////////////////////////Arithmatic Operators///////////////////////////
/////////////////////////////////////////////////////////////////////////

// let nARa = 400;
// let nARb = 230;
// console.log(`Addition :: ${nARa+nARb}`);
// console.log(`Subtraction :: ${nARa-nARb}`);
// console.log(`Multiplication :: ${nARa*nARb}`);
// console.log(`Devision :: ${nARa/nARb}`);
// console.log(`Modulus :: ${nARa%nARb}`);
// console.log(`Increment :: Pre-> ${++nARa}, ${--nARb},  Decrement :: Post-> ${nARa++}, ${nARb--}`)
// console.log(`To check finARal value after increment and decrement:: ${nARa}, ${nARb}`);




/////////////////////////////////////////////////////////////////////////
//////////////////////////Assignmnet Operators///////////////////////////
/////////////////////////////////////////////////////////////////////////

// let nASa = 200;
// let nASb = 100;
// console.log(`Assignment (nASc) :: ${nASc = nASa+nASb}`);
// console.log(`Add and Assign(nASa) :: ${nASa += nASb}`);
// console.log(`Subrtact and Assign (nASa) :: ${nASa -= nASb}`);
// console.log(`Multiply and Assign(nASa) :: ${nASa *= nASb}`);
// console.log(`Divide and Assin (nASa) :: ${nASa /= nASb}`);
// console.log(`Modulus and Assign(nASa) :: ${nASa %= nASb}`);




/////////////////////////////////////////////////////////////////////////
/////////////////////////Comparision Operators///////////////////////////
/////////////////////////////////////////////////////////////////////////

// let nCa = 200;
// let nCb = 100;
// console.log(`Is Equal to :: ${nCa==nCb}`);
// console.log(`Identical :: ${nCa === nCb}`);
// console.log(`Not Equal to :: ${nCa != nCb}`);
// console.log(`Not Identical :: ${nCa !== nCb}`);
// console.log(`Greater than :: ${nCa > nCb}`);
// console.log(`Greater than equal to :: ${nCa >= nCb}`);
// console.log(`Less than :: ${nCa < nCb}`);
// console.log(`Less than equal to than :: ${nCa <= nCb}`);




/////////////////////////////////////////////////////////////////////////
////////////////////////////Bitwise Operators////////////////////////////
/////////////////////////////////////////////////////////////////////////

// let nBa = 8;
// let nBb = 9;
// console.log(`Bitwise AND :: ${nBa & nBb}`);
// console.log(`Bitwise OR :: ${nBa|nBb}`);
// console.log(`Bitwise XOR :: ${nBa ^ nBb}`);
// console.log(`Bitwise NOT :: ${-nBa, ~nBb}`);

// // Left Shift :: (14<<0)-> 1110=(14), (14<<1)->11100=(28), (14<<2)->111000=56
// console.log(`Bitwise Left Shift :: ${nBa<<2}`);

// // Right Shift :: (14>0)-> 1110=(14), (14>>1)->0111=(7), (14>>2)->0011=3
// console.log(`Bitwise Right Shift :: ${nBb>>2}`);
// console.log(`Bitwise Right Shift with Zero :: ${6>>>2}`)
// console.log('1R :: ',14>>1)
// console.log('2R :: ',14>>2)
// console.log('3R :: ',14>>3)
// //  No use of Right Shift with Zero, It gives same result as Right Shift.
// console.log('1RO :: ',14>>>1) 
// console.log('2RO :: ',14>>>2)
// console.log('3RO :: ',14>>>3)
// console.log('1L :: ',14<<1)
// console.log('1L :: ',14<<2)
// console.log('1L :: ',14<<3)
// console.log('1LO :: ',14<<1)
// console.log('1LO :: ',14<<2)
// console.log('1LO :: ',14<<3)




/////////////////////////////////////////////////////////////////////////
////////////////////////////Logical Operator/////////////////////////////
/////////////////////////////////////////////////////////////////////////

// let nLa = 10;
// let nLb = 11;
// // If comparision values pair not then value will be printed.
// console.log(`Logical AND :: ${nLa && nLb}`);
// /*
//  | Value 1 | value 2 = Result |
//   ---------------------------
//  | True    | True    = True 
//  | False   | True    = False
//  | True    | False   = False
//  | False   | False   = False
//  */ 
// // If comparision values then value will be printed.
// console.log(`Logical AND :: ${(nLa==10) && (nLb==11)}`);

// // If comparision values pair not then value will be printed.
// console.log(`Logical OR :: ${nLa || nLb}`);
// /*
//  | Value 1 | value 2 = Result |
//   ---------------------------
//  | True    | True    = True 
//  | False   | True    = True
//  | True    | False   = True
//  | False   | False   = False
//  */
// // If comparision values then value will be printed.
// console.log(`Logical OR :: ${(nLa==10) || (nLb==11)}`);
// // Logical NOT Operator
// console.log(`Logical NOT ${!(nLb==nLb)}`)




/////////////////////////////////////////////////////////////////////////
////////////////////////////Special Operators////////////////////////////
/////////////////////////////////////////////////////////////////////////

// // Conditional Operator
// // (...condition... ? result True : result False)
// (100===1000? console.log('True') : console.log('False'));

// // Comma operator
// // val = (expression 1 , expression 2 , ..... , expression N)
// x = (console.log('1'), console.log('2'), console.log('3'));
// y = ((1+2), (3+4), (5+5));
// console.log(y)

// // Delete Operator

// xA = [1, 2, 3, 4, 5]
// console.log(delete(xA[2]));
// console.log(xA)
// console.log(xA[2])
// xA[2]='A';

// // IN operator 
// xB = [1, 2, 5, 'A']
// console.log(xB)
// console.log(3 in xB)

// // Instanceof operator
// let obj = {
//     1:'First'
// }
// let xI = obj
// console.log(xI instanceof Object)

// // void operator
// function checkVoid(){
//     return 1;
// }
// let xCVR = checkVoid();
// let xCV = void checkVoid();
// console.log(`Without VOID operator:: ${xCVR}`);
// console.log(`With VOID operaotr :: ${xCV}`);

// // new Operator
// function obj1() {
//     let qwe = 3;
// }
// let xNO1 = new obj1; // New operator makes OBJ1 to work as constructor.
// let xNO2 = obj1();
// console.log(xNO1, typeof(xNO1)); // -> obj1 {}, object
// console.log(xNO2, typeof(xNO2)); // -> undefined, undefined



///////////////////////////////<<<<<*>>>>>///////////////////////////////
////////////////////<<<<<<<<<<<<<< END >>>>>>>>>>>>>>>///////////////////
///////////////////////////////<<<<<*>>>>>///////////////////////////////