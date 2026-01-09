class NintendoGame {
  static #uniqueId = 3;
  #gameList = [
    { id: 1, name: "마리오 골프", genre: "S", grade: "ALL", price: 20000, imgUrl: "https://pimg.mk.co.kr/news/cms/202504/06/news-p.v1.20250404.ad221f845db2489a86c2ff50f32c53fa_P1.png" },
    { id: 2, name: "젤다의전설", genre: "R", grade: "ALL", price: 20000, imgUrl: "https://store.nintendo.co.kr/media/catalog/product/cache/3be328691086628caca32d01ffcc430a/_/-/_-_-_-_-_-_-nintendo-switch-2-editiond.jpg" },
  ];

  printList() {
    $("#listDataBlock").empty();
    $("#listDataBlock").append(`
      <div class="listDataRow">
        <div class="listItem">
          <div class="itemData text-wrapper onlyForSaveId">0</div>
        </div>
        <div class="listItem">
          <div class="itemData text-wrapper">장르</div>
        </div>
        <div class="listItem">
          <div class="itemData text-wrapper">등급</div>
        </div>
        <div class="listItem">
          <div class="itemData text-wrapper">제목</div>
        </div>
      </div>
    `)
    this.#gameList.forEach((item) => {
      // 배열을 순환하면서 item 을 class="frame-2" 태그 안의 자식 태그로 추가한다.
      $("#listDataBlock").append(this.printRow(item));
    });
  }

  printGenre(genre) {
    switch (genre) {
      case "A":
        return "액션";
      case "S":
        return "스포츠";
      case "R":
        return "RPG";
    }
    return "-";
  }

  printGrade(grade) {
    switch (grade) {
      case "ALL":
        return "전체이용";
      case "18":
        return "18세이상";
      case "13":
        return "13세이상";
    }
    return "-";
  }

  printRow(item) {
    let html = `
<div class="listDataRow">
  <div class="listItem">
    <div class="itemData text-wrapper onlyForSaveId">${item.id}</div>
  </div>
  <div class="listItem">
    <div class="itemData text-wrapper">${this.printGenre(item.genre)}</div>
  </div>
  <div class="listItem">
    <div class="itemData text-wrapper">${this.printGrade(item.grade)}</div>
  </div>
  <div class="listItem">
    <div class="itemData text-wrapper">${item.name}</div>
  </div>
</div>`;
    return html;
  }

  checkInputDataIsError() {
    // 사용자 입력데이터 검증한다.
    // 입력데이터가 올바르면 true 리턴
    // 아니면 false 리턴
    if ($("#name").val()==='') {
      alert(`게임이름을 입력하세요`);
      $("#name").focus();
      return true;
    }
    if ($("#price").val() < 0) {
      alert(`가격이 0이하 입니다.`);
      $("#clss").focus();
      return true;
    }
    if ($("#imgUrl").val().length < 10) {
      alert(`주소를 제대로`);
      $("#name").focus();
      return true;
    }
    return false;
  }

  createGameData(forAdd) {
    return forAdd == "forAdd" ? { id: NintendoGame.#uniqueId++, name: $("#name").val(), genre: $("#genre").val(), grade: $("#grade").val(), price: $("#price").val(), imgUrl: $("#imgUrl").val() }
      : { id: $("#id").val(), name: $("#name").val(), genre: $("#genre").val(), grade: $("#grade").val(), price: $("#price").val(), imgUrl: $("#imgUrl").val() };
  }
  
  addGame() {
    // 사용자 입력 데이터가 유효한지 검증해야 한다. 유효하지 않으면 경고창 띄우고 리턴;
    if(this.checkInputDataIsError())
      return;
    // 입력데이터는 JS 객체로 만든다. let JS객체 = {id:고유번호, name:$("#name").val(), genre:"S", grade:"ALL", price:금액, imgUrl:"http://..."};
    let newGame = this.createGameData("forAdd");
    // gameList 배열에 JS객체 를 추가한다. this.#gameList.push(JS객체);
    this.#gameList.push(newGame);
    // gameList 배열정보를 게임목록 화면에 출력한다. this.printList();
    this.printList();
    this.clearInputBox();
  }

  updateGame() {
    // 사용자 입력 데이터가 유효한지 검증해야 한다. 유효하지 않으면 경고창 띄우고 리턴;
    if(this.checkInputDataIsError())
      return;
    // 입력데이터는 JS 객체로 만든다. let JS객체 = {id:고유번호, name:$("#name").val(), genre:"S", grade:"ALL", price:금액, imgUrl:"http://..."};
    let modifyGame = this.createGameData("");
    // gameList 배열에서 JS객체.id 번호랑 같은 원소를 찾는다. let 찾는객체 = this.#gameList.find(() => {});
    // JS객체를 찾는객체로 바꿔치기 한다.
    let findIndex = this.#gameList.findIndex((item) => {
      return item.id * 1 === modifyGame.id * 1; //여기서 input id="id"가 일치하는지 찾기 때문에 0이 있어도 이상한 값 추가 안되고 리턴
    })
    if (findIndex === -1)
      return;
    else
      this.#gameList = this.#gameList.with(findIndex, modifyGame);
    // gameList 배열정보를 게임목록 화면에 출력한다. this.printList();
    $("#showImage").attr("src", modifyGame.imgUrl);
    this.printList();
    this.clearInputBox();
  }

  deleteGame() {
    // 사용자 입력 데이터가 유효한지 검증해야 한다. 유효하지 않으면 경고창 띄우고 리턴;
    if(this.checkInputDataIsError())
      return;
    // gameList 배열에서 기존의 id 번호랑 같은 원소를 찾는다.
    let findIndex = this.#gameList.findIndex((item) => {
      return item.id * 1 === $("#id").val() * 1; //여기서 input id="id"가 일치하는지 찾기 때문에 0이 있어도 이상한 값 추가 안되고 리턴
    })
    if (findIndex === -1)
      return;
    else
      // 찾는객체를 gameList 배열에서 삭제한다.
      this.#gameList.splice(findIndex, 1);
    // gameList 배열정보를 게임목록 화면에 출력한다. this.printList();
    $("#showImage").attr("src", "../bin.png");
    this.printList();
    this.clearInputBox();
  }
  
  clearInputBox() {
    $("#id").val(0);
    $("#name").val("");
    $("#genre").prop("selectedIndex", 0);
    $("#grade").prop("selectedIndex", 0);
    $("#price").val("");
    $("#imgUrl").val("");
  }

  setData2InputBox(game) {
    $("#id").val(game.id);
    $("#name").val(game.name);
    $("#genre").val(game.genre);
    $("#grade").val(game.grade);
    $("#price").val(game.price);
    $("#imgUrl").val(game.imgUrl);
    $("#showImage").attr("src", game.imgUrl);
  }

  printOneGame(id) {
    // 화면의 id 값으로 gameList배열에서 찾는다. let id값 = $("#id").val();, let 찾은원소 = this.#gameList.find(() => {});
    let findGame = this.#gameList.find((game) => {
      return game.id * 1 === id * 1;
    });
    if (findGame === undefined)
      return;
    else
      this.setData2InputBox(findGame);
  }
}

$(() => {
  // jquery 실행
  let nint = new NintendoGame();
  nint.printList();

  $("#btnAdd").click((e) => {
    nint.addGame();
  });

  $(document).on("click", "#btnUpt", (e) => {
    nint.updateGame();
  });

  $(document).on("click", "#btnDel", (e) => {
    nint.deleteGame();
  });

  $(document).on(`click`, ".listDataRow", function (e) {
    nint.printOneGame(
      $(e.currentTarget)
        .children()
        .first()
        .text()
    );
  });
});