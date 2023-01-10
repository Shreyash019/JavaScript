// // Fetching Element by it's ID.
// const p1p = document.getElementById('p1p');
// console.log(p1p.innerText);
// p1p.textContent = 'Paragraph';
// console.log(p1p.textContent);
// p1p.innerText = 'Paragraph I';
// console.log(p1p.innerText);
// p1p.innerHTML = 'Paragraph ID';
// console.log(p1p.innerHTML);



// // Fetching Elements by their class name.
// // getElementByClassName() fetch the all elements with defined class name.
// // We need loop to traverse all selected elements.
// // We need index to fetch particular element.
// const p2p = document.getElementsByClassName("p2p");
// console.log(p2p[0].innerText);
// console.log(p2p[2].innerText);
// console.log(p2p[4].innerText);
// for(let i=0; i<p2p.length; i++){
//     console.log(p2p[i].innerText)
// }
// p2p[0].textContent = 'Class edit using textContent.';
// console.log(p2p[0].textContent);
// p2p[1].innerText = 'Class edit using innerText.';
// console.log(p2p[1].innerText);
// p2p[2].innerHTML = 'Class edit using innerHTML.';
// console.log(p2p[2].innerHTML);



// // Fetching Element by Tag Name.
// // getElementByTagName() selects the elements by thier tag name.
// // Same as getByClassName() we need loop for all.
// // For fetching single element we need index.
// const h4 = document.getElementsByTagName("h4");
// for(let i=0; i<h4.length; i++){
//     console.log(h4[i].innerText)
// }
// h4.textContent = 'Tag edit using textContent';
// console.log(h4.textContent);
// h4.innerText = 'Tag edit using innerText';
// console.log(h4.innerText);
// h4.innerHTML = 'Tag edit using innerHTML';
// console.log(h4.innerHTML);



// // // Fetching Element by Query Selector.
// // // querySelector('#id/.class/tag') returns first element matches the css selector.
// const qs1 = document.querySelector('#p1p');
// const qs2 = document.querySelector('.p2p');
// const qs3 = document.querySelector('h4');
// console.log(qs1.innerText);
// console.log(qs2.innerText);
// console.log(qs3.innerText);
// qs1.textContent = 'Query Selector edit ID.';
// console.log(qs1.textContent);
// qs2.innerText = 'Query Selector edit className.';
// console.log(qs2.innerText);
// qs3.innerHTML = 'Query Selector edit TagName.';
// console.log(qs3.innerHTML);



// // Fetching Element by Query Selector All.
// // querySelectorAll('#id/.class/tag') return elements matches the css selector.
// // Same as getByClassName() we need loop for all.
// // For fetching single element we need index.
// const qsa1 = document.querySelectorAll('#p1p');
// const qsa2 = document.querySelectorAll('.p2p');
// const qsa3 = document.querySelectorAll('h4');
// console.log(qsa1[0].innerText);
// console.log(qsa2[0].innerText);
// console.log(qsa3[0].innerText);
// for(let i=0; i<qsa3.length; i++){
//     console.log(qsa3[i].innerText)
// }
// // QuerySelectorAll is read only so we will not be able to set content.
// qsa1.textContent = 'Query Selector edit ID.';
// console.log(qsa1[0].textContent);
// qsa2.innerText = 'Query Selector edit className.';
// console.log(qsa2[0].innerText);
// qsa3.innerHTML = 'Query Selector edit TagName.';
// console.log(qsa3[0].innerHTML);



// // .textContent, .innerText, .innerHTML
// // .textContent -> It give us plane text, also line break or blank line will be shown if there is line break inbetween tags.
// // .innerText -> It also gives us plan text with one fix line break, whatever line break inbetween tags doesn't considered.
// // .innerHTML -> It give whole content inside the slected elements.
// const tii = document.getElementById('div-level-1');
// console.log(tii.textContent);
// console.log(tii.innerText);
// console.log(tii.innerHTML);



// // Fetching elements with id and class and tagname combinations.
// const divex = document.getElementById('div-level-1');
// console.log(divex.innerHTML)
// const divin = document.getElementsByClassName('div-level-2');
// console.log(divin)
// const divp = document.getElementById('div-level-1').getElementsByClassName('low-para2');
// console.log(divp)

function test(){
    return this;
    }
    console.log(test()==window);
