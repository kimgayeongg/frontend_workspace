//js_040_select.js

document.forms.ousubmit = () => {
  let optFruit;
  fruit = document.querySelector('#sel');
  console.log(optFruit);

  let optSelect = optFruit.selectedIndex + '' + optFruit.value;
  console.log(optSelect);

  return false;
};
