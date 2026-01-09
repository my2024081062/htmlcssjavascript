class NintendoGame {
  #gameList = [
    {
      id: 1,
      title: "마리오 카트",
      genre: "레이싱",
      grade: "7세",
      price: 20000,
      src: "https://blog.kakaocdn.net/dna/bg2n4x/btrgczTySc9/AAAAAAAAAAAAAAAAAAAAAN_UZo9a8Ygcw4FW-Xm2r9KjDXpmYS3B5QbTdDkpOXRW/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1769871599&allow_ip=&allow_referer=&signature=Gi1U6iLzWbio8RMER5kYTb7O82A%3D"
    }
  ];

  printList() { //게임 리스트를 배열에서 가져와 화면에 출력
    $("#gameList").empty();
    $("#gameList").append(`
      <div class="order">
        <div class="genre gameItem">
          <div>장르</div>
        </div>
        <div class="title gameItem">
          <div>제목</div>
        </div>
        <div class="grade gameItem">
          <div>등급</div>
        </div>
      </div>
      `);
    this.#gameList.sort((a, b) => a.id - b.id);
    for (let game of this.#gameList) {
      $("#gameList").append(this.printRow(game));
    }
  }

  printRow(game) { //화면에 출력될 배열요소를 html째로 가져옴
    let html = `
      <div class="game">
        <div class="genre gameItem">
          <div>${game.genre}</div>
        </div>
        <div class="title gameItem">
          <div>${game.title}</div>
        </div>
        <div class="grade gameItem">
          <div>${game.grade}</div>
        </div>
      </div>
    `;
    return html;
  }

  gameData() { //입력창에 입력된 데이터 가져오기
    return {
      id: $("#id").val(),
      title: $("#title").val(),
      genre: $("#genre").val(),
      grade: $("#grade").val(),
      price: $("#price").val(),
      src: $("#src").val()
    };
  }

  addGame() { //추가
    let newGame = this.gameData();
    $("#img").attr(`src`, `${newGame.src}`);
    
    this.#gameList.push(newGame);
  }

  updateGame() { //수정
    let updateGame = this.gameData();
    let findIndex = this.#gameList.findIndex((item) => {
      return item.id * 1 === updateGame.id * 1;
    })
    if (findIndex === -1)
      return;
    else
      this.#gameList = this.#gameList.with(findIndex, updateGame);
  }

  deleteStudent() { //삭제
    let deleteGame = this.gameData();
    let findIndex = this.#gameList.findIndex((item) => {
      return item.id * 1 === deleteGame.id * 1;
    })
    if (findIndex === -1)
      return;
    else
      this.#gameList.splice(findIndex, 1);
  }

  clearInput() { //완료후 입력창 클리어
    $("#title").val('');
    $("#genre").val('');
    $("#grade").val('');
    $("#price").val('');
    $("#src").val('');
  }

  setInputData(item) { //클릭된 상품으로 입력창 초기화
    $("#title").val(`${item.title}`);
    $("#genre").val(`${item.genre}`);
    $("#grade").val(`${item.grade}`);
    $("#price").val(`${item.price}`);
    $("#src").val(`${item.src}`);
    $("#img").attr(`src`, `${item.src}`);
    
  }

  printItem(title) { //클릭된 상품을 배열에서 찾기
    let findItem = this.#gameList.find((item) => item.title * 1 === title * 1);
    if (findItem === undefined)
      return;
    else
      this.setInputData(findItem);
  }
}

$(() => {
  let nint = new NintendoGame();
  nint.printList();
  $("#btnAdd").click(function (e) {
    e.preventDefault();
    nint.addGame();
    nint.printList();
    nint.clearInput();
  });

  $("#btnUpdate").click(function (e) {
    e.preventDefault();
    nint.updateGame();
    nint.printList();
    nint.clearInput();
  });

  $("#btnDelete").click(function (e) {
    e.preventDefault();
    nint.deleteGame();
    nint.printList();
    nint.clearInput();
  });

  $(document).on(`click`, ".game", function (e) {
    nint.printItem($(e.currentTarget).children().first().text());
  });
})


