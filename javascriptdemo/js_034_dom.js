//js_034_dom.js

let hNode = document.getElementById('selector');
console.log(hNode);
console.log(hNode, typeof hNode);
// document.write(hNode + ' ' + typeof hNode);

let hId = document.querySelector('#selector');
console.log(hId, typeof hId);

let hClass = document.querySelector('.choice');

console.log(hClass, typeof hClass);

let pNode = document.getElementsByTagName('p');
console.log(typeof pNode);
console.log(pNode.length);
console.log(pNode[0]);
console.log(pNode.item(0));
console.log(pNode[0].innerText);
pNode[0].style.color = 'red';
pNode[0].style.backgroundColor = 'blue';

function process() {
  alert('test');
  let fname = document.forms.fname;
  console.log('fname:', fname);
  console.log(fname.value);
  console.log(fname.defaultvalue);

  return false;
}
