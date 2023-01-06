/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
---------------------------- Data Types ---------------------------->
*/ /////////////////////////////////////////////////////////////////
    
/* 
    DataType -> container for values,
    Two Types -> (1) Primitive datatype  (2) Non-Primitive
    Primitive data type are built-in datatype.
    Non-Primitive data type are derived datatype.
*/

////////////////////////////////////////////
/////////(1) Primitive Datatype :: /////////
////////////////////////////////////////////

// a) Number datatype
let nInteger = 5;
let nFloat = 0.9;
console.log(`Integer :: ${nInteger}, Float :: ${nFloat}`);
console.log(`Type of nInteger :: '${typeof(nInteger)}', Type of nFloat :: '${typeof(nFloat)}'`);

// b) String datatype
let nStr = 'Check';
console.log(`String :: ${nStr}`);
console.log(`Type of nStr :: '${typeof(nStr)}'`);

// c) Undefined datatype
let nDef;
console.log(`Undefined :: ${nDef}`);
console.log(`Type of nDef :: ${typeof(nDef)}`);

// d) Boolean datatype
let nBool = true;
console.log(`Boolean :: ${nBool}`);
console.log(`Type of nBool :: ${typeof(nBool)}`);

// e) Null datatype
let nNull = null;
console.log(`Null :: ${nNull}`);
console.log(`Type of nNull :: ${nNull}`);


/////////////////////////////////////////////
////////(2) Non-Primitive Datatype ::////////
/////////////////////////////////////////////

// Object datatype
const nobj = {
    1: 'First',
    2: 'Second'
}
console.log(`Object :: ${nobj}`);
console.log(`Type of obj :: ${typeof(nobj)}`);

// Array datatype
let nArr = [1,2,3];
console.log(`Array :: ${nArr}`);
console.log(`Type of nArr :: ${typeof(nArr)}`);
