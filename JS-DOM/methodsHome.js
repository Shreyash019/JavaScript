const body = document.getElementById('body');

// Creating element
const div1 = document.createElement('div');
var p1 = document.createElement("p");
p1.id = 'para1';
var p2 = document.createElement("p");
p2.id = 'para2';
var text1 = document.createTextNode("Demo paragraph.");
var text2 = document.createTextNode("Child Demo paragraph.");
div1.id = 'parent-div';


// Adding element
// Using appnedChild(node) method.
body.appendChild(div1);
p1.appendChild(text1);
p2.appendChild(text2)
div1.appendChild(p1);
div1.appendChild(p2)
console.log(p1.innerHTML);

// // Using append() method.
// const ah51 = document.createElement('h5');
// const ah52 = document.createElement('h5');
// const ah5txt1 = document.createTextNode('(a) append()');
// const ah5txt2 = document.createTextNode('(b) append()');
// ah51.append(ah5txt1);
// ah52.append(ah5txt2);
// div1.append(ah51, ah52);


// Using prepend() mehtod.
const ph51 = document.createElement('h5');
const ph52 = document.createElement('h5');
const ph5txt1 = document.createTextNode('(a) prepend()');
const ph5txt2 = document.createTextNode('(b) prepend()');
ph51.prepend(ph5txt1);
ph52.prepend(ph5txt2);
div1.prepend(ph51, ph52);

// Using after() method.
const arh51 = document.createElement('h5');
const arh52 = document.createElement('h5');
const arh5txt1 = document.createTextNode('(a) after()');
const arh5txt2 = document.createTextNode('(b) after()');
arh51.append(arh5txt1);
arh52.append(arh5txt2);

p1.after(arh51, arh52);


// Using insertBefore() method.
const ibp = document.createElement('h5');
const ibptxt = document.createTextNode('(a) insertBefore()');
ibp.append(ibptxt);
div1.insertBefore(ibp, p2)


// Using insertAfter() method.
const iap = document.createElement('h5');
const iaptxt = document.createTextNode('(a) insertAfter()');
iap.append(iaptxt);
// .insertAfter() method not supported by JS DOM so we use function to do this
// function insertAfter(newNode, existingNode){
//     existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
// } insertAfter(new, existing)
function insertAfter(nn, exn){
    div1.insertBefore(nn, exn);
} insertAfter(iap, p2.lastElementChild)


// // Using insertAdjacentHTML() method.
// const iah = document.getElementById('para2');
// const iahEL = document.createElement('h4');
// const iahtxt = document.createTextNode('insertAdjacentElement()');
// iahEL.append(iahtxt)
// iah.insertAdjacentHTML('afterBegin', '<h4>afterBegin</h3>');
// iah.insertAdjacentHTML('beforeBegin', '<h4>beforeBegin</h3>');
// iah.insertAdjacentHTML('afterEnd', '<h4>afterEnd</h3>');
// iah.insertAdjacentHTML('beforeEnd', '<h4>beforeEnd</h3>');
// iah.insertAdjacentElement('afterBegin', iahEL);
// // iah.insertAdjacentElement('beforeBegin', iahEL);
// // iah.insertAdjacentElement('afterEnd', iahEL);
// // iah.insertAdjacentElement('beforeEnd', iahEL);



// Element creation for cloneNode(), removeChild(), and replaceChild()
let crr = document.createElement('div');
let crrh5 = document.createElement('h5');
let crrp = document.createElement('p');
let crrh5txt = document.createTextNode('(Heading Element) This is CRR methods Element.');
let crrptxt = document.createTextNode('(Paragraph Element) This is CRR methods Element.');
crr.appendChild(crrh5, crrp);
crrh5.append(crrh5txt);
crrp.append(crrptxt);
crr.append(crrh5, crrp);
div1.after(crr);


// Cloning element using cloneNode() method.
let cloneH5 = crrh5.cloneNode(true);
console.log(cloneH5.textContent);


// Replacing element using replaceCHild() method.
let crp = document.createElement('h6');
const crptxt = document.createTextNode('(Heading Element) This is heading to replace paragraph');
crp.append(crptxt);
crr.replaceChild(crptxt, crrp)

// Removing element using removeChild() method.
let rp = document.createElement('h6');
const rptxt = document.createTextNode('(a) removeChild');
rp.append(rptxt);
crr.appendChild(rp);
console.log(rp.textContent);
let rmNode = crr.removeChild(rp);
console.log('AFter remove method:: ' + rmNode.textContent);


/* Taversing of Elements */





