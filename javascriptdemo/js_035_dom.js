//js_035_dom.js

let myNode = document.getElementById('p2');
console.log(myNode); //<p id="p2">content2</p>
console.log(`myNode: ${myNode}`); //myNode: [object HTMLParagraphElement]
myNode.style.color = 'blue';

//myNode 부모 (p2의 부모 노드)=====================================================================
let ptNode = myNode.parentNode;
console.log(ptNode); //div#wrap  //<div id="wrap">...</div>
console.log(`ptNode: ${ptNode}`); //ptNode: [object HTMLDivElement]

ptNode.style.color = 'blue';

//myNode 앞 이웃 (p2의 앞 노드)=====================================================================
//previousSibling : Element는 물론 #text와 주석까지 node로 검색한다.
let prevNode = myNode.previousSibling;
console.log(`${prevNode}`); //[object Text] 는 줄바꿈이 text노드로 인식된것이다.

prevNode = prevNode.previousSibling;
console.log(prevNode); //p#p1  //<p id="p1">content1</p>
console.log(`prevNode: ${prevNode}`); //prevNode: [object HTMLParagraphElement]

//------------------------------------------------------
//previousElementSibling : element node만 검색한다.
let prevElementNode = myNode.previousElementSibling;
console.log(prevElementNode); //<p id="p1">content1</p>
console.log(`prevElementNode: ${prevElementNode}`); //prevElementNode: [object HTMLParagraphElement]

//myNode 뒤 이웃 (p2의 뒤 노드)======================================================================
//nextSibling
let nextNode = myNode.nextSibling;
console.log(`${nextNode}`); //[object Text]

nextNode = nextNode.nextSibling;
console.log(nextNode); //<p id="p3">content3</p>
console.log(`nextNode: ${nextNode}`); //nextNode: [object HTMLParagraphElement]

//------------------------------------------------------
//nextElementSibling
let nextElementSibling = myNode.nextElementSibling;
console.log(`nextNdoe: ${nextElementSibling}`); //nextNdoe: [object HTMLParagraphElement]

//=================================================================================================
//childNodes
let divNode = document.getElementById('wrap');
console.log(`${divNode}`); //[object HTMLDivElement]

let divChilesNode = divNode.childNodes;
console.log(`${divChilesNode}`); //[object NodeList]
console.log(divChilesNode); //NodeList(9) [text, p#p1, text, p#p2, text, p#p3, text, p#p4, text]

//------------------------------------------------------
//children
let divChildren = divNode.children;
console.log(`${divChildren}`); //[object HTMLCollection]
console.log(divChildren); //HTMLCollection(4) [p#p1, p#p2, p#p3, p#p4, p1: p#p1, p2: p#p2, p3: p#p3, p4: p#p4]

let p4Node = document.querySelector('#p4');
console.log(p4Node); //<p id="p4">...</p>
console.log(`${p4Node}`); //[object HTMLParagraphElement]

let aNode = p4Node.firstElementChild;
console.log(aNode); //<img src="images/gosu.jpg" alt="영화배우" />
console.log(`${aNode}`); //[object HTMLImageElement]

//=================================================================================================
// 객체.getAttribute('속성명'), 객체.setAttribute('속성명', '값')
// 객체.속성명,                 객체.속성명 = '값'

let aAttrNode = aNode.getAttribute('src');
console.log(aAttrNode); //images/gosu.jpg

aAttrNode = aNode.src;
console.log(aAttrNode); //http://127.0.0.1:5500/javascriptdemo/images/gosu.jpg

console.log(aNode.getAttribute('class'));
console.log(aNode.class);

// aNode.setAttribute('title', '스타배우');
// console.log(aNode.getAttribute('title'));
// console.log(aNode.title);
// aNode.id = 'imGosu';
// console.log(aNode.id);
// console.log(aNode.getAttribute('id'));

console.log(aNode.getAttribute('title'));
console.log(aNode.title);
console.log(aNode.getAttribute('id'));
console.log(aNode.id);

aNode.id = 'imgGosu';

let aAttrList = aNode.getAttributeNode;
console.log(aAttrList.length); //1
console.log(aAttrList); //ƒ getAttributeNode() { [native code] }
