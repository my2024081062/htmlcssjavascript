class DOMControlTest {
  #users = [
    {
      id: 1,
      name: "김철수",
      kor: 90,
      eng: 85,
      mat: 88,
      clss: "3-1",
    },
    {
      id: 2,
      name: "이영희",
      kor: 78,
      eng: 69,
      mat: 91,
      clss: "3-3",
    },
    {
      id: 3,
      name: "박민수",
      kor: 75,
      eng: 69,
      mat: 82,
      clss: "3-2",
    },
  ];



  printHtml() {
    $("#ulList").empty(); //기존에 모두 다 지우고
    this.#users.sort((a, b) => a.id - b.id); //아이디로 정렬후
    this.#users.forEach((student) => {
      $("#ulList").append(this.getOneHtmlStudent(student));
    }); //getOneHtmlStudent함수로 객체값을 화면에 추가함

  }

  checkValidInput(checkFor) {
    if (checkFor === `forAdd` && ($("#id").val() === '' || this.#users.some((item) => {
      return item.id * 1 === $("#id").val() * 1
    }))) {
      alert(`번호가 중복되거나 비어있습니다.`);
      $("#id").focus();
      return true;
    }
    if ($("#name").val().length < 2 || $("#name").val().length > 10) {
      alert(`이름은 2글자 이상 10글자 이하로 입력하세요`);
      $("#name").focus();
      return true;
    }
    if ($("#kor").val() === '' || ($("#kor").val() * 1) < 0 || ($("#kor").val() * 1) > 100) {
      alert(`국어 점수를 제대로 입력하세요`);
      $("#kor").focus();
      return true;
    }
    if ($("#eng").val() === '' || ($("#eng").val() * 1) < 0 || ($("#eng").val() * 1) > 100) {
      alert(`영어 점수를 제대로 입력하세요`);
      $("#eng").focus();
      return true;
    }
    if ($("#mat").val() === '' || ($("#mat").val() * 1) < 0 || ($("#mat").val() * 1) > 100) {
      alert(`수학 점수를 제대로 입력하세요`);
      $("#mat").focus();
      return true;
    }
    if ($("#clss").val() === '') {
      alert(`반 번호를 제대로 입력하세요`);
      $("#clss").focus();
      return true;
    }
    return false;
  }

  clearInput() {
    $("#id").val('');
    $("#name").val('');
    $("#kor").val('');
    $("#eng").val('');
    $("#mat").val('');
    $("#clss").val('');
  }

  setInputData(item) {
    $("#id").val(`${item.id}`);
    $("#name").val(`${item.name}`);
    $("#kor").val(`${item.kor}`);
    $("#eng").val(`${item.eng}`);
    $("#mat").val(`${item.mat}`);
    $("#clss").val(`${item.clss}`);
  }

  getOneHtmlStudent(student) {
    let oneHtml = `
<li class="dataLi">
  <div>
    <div>${student.id}</div>
  </div>
  <div>
    <div>${student.name}</div>
  </div>
  <div>
    <div>${student.kor}</div>
  </div>
  <div>
    <div>${student.eng}</div>
  </div>
  <div>
    <div>${student.mat}</div>
  </div>
  <div>
    <div>${student.clss}</div>
  </div>
</li>`;
    return oneHtml;
  }

  inputStudentData() {
    return {
      id: $("#id").val(),
      name: $("#name").val(),
      kor: $("#kor").val(),
      eng: $("#eng").val(),
      mat: $("#mat").val(),
      clss: $("#clss").val(),
    }
  }

  addStudent() {
    /*
    1번.
    <input type="number" id="id" />
    <input type="text" id="name" />
    ....
    <input type="text" id="clss" /> 입력박스들
    의 value 값을 가져와서 아래의 형태로 javascript 객체로 만들어야 한다.
    {
      id: 3,
      name: "박민수",
      kor: 75,
      eng: 69,
      mat: 82,
      clss: "3-2",
    }
    */
    //1.5번 입력값이 잘못되면 아무것도 안하고 돌아가기
    if (this.checkValidInput(`forAdd`))
      return;

    let newStudent = this.inputStudentData();
    /*
    2번
    1번에서 만든 객체를 this.#users 배열 뒤의 요소에 추가해야 한다.
    */
    this.#users.push(newStudent);
  }
  // 업데이트
  updateStudent() {
    if (this.checkValidInput(`forUpdate`))
      return;

    let modifyStudent = this.inputStudentData();
    let findIndex = this.#users.findIndex((item) => {
      return item.id * 1 === modifyStudent.id * 1;
    })
    if (findIndex === -1)
      return;
    else
      this.#users = this.#users.with(findIndex, modifyStudent);
  }

  deleteStudent() {
    let deleteStudent = this.inputStudentData();
    let findIndex = this.#users.findIndex((item) => {
      return item.id * 1 === deleteStudent.id * 1;
    })
    if (findIndex === -1)
      return;
    else
      this.#users.splice(findIndex, 1);
  }

  printItem(id) {
    let findItem = this.#users.find((item) => item.id * 1 === id * 1);
    if (findItem === undefined)
      return;
    else
      this.setInputData(findItem);
  }
}

$(function () {
  let domCtrl = new DOMControlTest();
  domCtrl.printHtml();

  $("#btnAddStudent").click(function (e) {
    e.preventDefault();
    domCtrl.addStudent()
    domCtrl.printHtml();
    domCtrl.clearInput();
  });

  $("#btnUpdateStudent").click(function (e) {
    e.preventDefault();
    domCtrl.updateStudent();
    domCtrl.printHtml();
    domCtrl.clearInput();
  });

  $("#btnDeleteStudent").click(function (e) {
    e.preventDefault();
    domCtrl.deleteStudent();
    domCtrl.printHtml();
    domCtrl.clearInput();
  });

  $("#btnClearStudent").click(function (e) {
    e.preventDefault();
    domCtrl.clearInput();
  });
  //동적 DOM에 이벤트 추가
  $(document).on(`click`, ".dataLi", function (e) {
    domCtrl.printItem($(e.currentTarget).children().first().text());
  });
});

