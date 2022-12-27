//js_041_checkbox.js

//약간 동의
document.forms.onsubmit = () => {
  let admin = document.forms.admin;
  if (!admin.checked) {
    alert('약관에 동의해야 합니다.');
    return false;
  }
};

//전체선택
document.frm.allcheck.onclick = function () {
  //    console.log(this);
  //    document.forms.subject1.checked = this.checked;
  //    document.forms.subject2.checked = this.checked;
  //    document.forms.subject3.checked = this.checked;

  let checkgroup = document.querySelectorAll('.checkgroup');
  console.log(checkgroup.length);

  //   for (let element of checkgroup) {
  //     element = this.checked;
  //   }

  //ES6 Spread operator : NodeList을 Array로 변경
  let myThis = this;
  let iArray = [...checkgroup];
  iArray.map(function (element) {
    // alert{this}; 여기에서 this는 window
    element.checked = myThis.checked;
  });
};
