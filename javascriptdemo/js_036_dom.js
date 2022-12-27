//js_036_dom.js

let pNode = document.getElementById('wrap');
//1  P null
console.log(`${pNode.nodeType}  ${pNode.nodeName} ${pNode.nodeValue}`);

//속성
let pAttr = pNode.attributes;
//NamedNodeMap {0: id, 1: class, id: id, class: class, length: 2}
console.log(pAttr);
console.log(pAttr[0]); //id
console.log(pAttr['id']);
console.log(pAttr.id); //id="wrap"
console.log(pAttr['length']);
console.log(pAttr.length); //2
console.log(pAttr[0]);
console.log(pAttr['class']);
console.log(pAttr.class); //class="chk"

console.log(pNode.getAttribute('class'));
console.log(pNode.class);
console.log(pNode.getAttribute('id'));
console.log(pNode.id);

//2 id wrap
console.log(`${pAttr[0].nodeType} ${pAttr[0].nodeName} ${pAttr[0].nodeValue}`);

let textNode = pNode.firstChild;

console.log(textNode);

//3 #text content
console.log(`${textNode.nodeType} ${textNode.nodeName} ${textNode.nodeValue}`);

/////////////////////////////////////////////////////////
//innerText, innerHTML : 요소의 컨텐츠
let bodyNode = document.getElementsByTagName('body')[0];

//content
console.log(bodyNode.innerText);
console.log(bodyNode.innerHTML);

// bodyNode.innerHTML = '<p>append</p>';
//    bodyNode.innerText ='<p>append</p>';

///////////////////////////////////////////////////////////////
//value

let finame = document.querySelector('#fname');
console.log(finame.value); //홍길동

finame.value = '고수';
