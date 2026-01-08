class NintendoGame {
  #gameList = [
    {
      id: 1,
      title: "마리오 카트",
      genre: "레이싱",
      grade: "7세",
      price: 20000,
      src: ""
    }
  ];

  printList() {
    $("#gameList").empty();
    $("#gameList").append(`
      <div class="game">
        <div class="genreItem">
          <div>장르</div>
        </div>
        <div class="titleItem">
          <div>제목</div>
        </div>
        <div class="gradeItem">
          <div>등급</div>
        </div>
      </div>
      `);
    this.#gameList.sort((a, b) => a.id - b.id);
    for (let game of this.#gameList) {
      $("#gameList").append(this.printRow(game));
    }
  }

  printRow(game) {
    let html = `
      <div class="game">
        <div class="genreItem">
          <div>${game.genre}</div>
        </div>
        <div class="titleItem">
          <div>${game.title}</div>
        </div>
        <div class="gradeItem">
          <div>${game.grade}</div>
        </div>
      </div>
    `;
    return html;
  }

  gameData(){
    return {
      id: $("#id").val(),
      title: $("#title").val(),
      genre: $("#genre").val(),
      grade: $("#grade").val(),
      price: $("#price").val(),
      src: $("#img").val()
    };
  }

  addGame() {
    let newGame = gameData();
    this.#gameList.push(newGame);
  }

  updateGame() {
    let updateGame = gameData();
    let findIndex = this.#gameList.findIndex((item) => {
      return item.id * 1 === updateGame.id * 1;
    })
    if(findIndex === -1) 
      return;
    else 
      this.#gameList = this.#gameList.with(findIndex, updateGame);
  }

  deleteStudent() {
    let deleteGame = this.gameData();
    let findIndex = this.#gameList.findIndex((item) => {
      return item.id * 1 === deleteGame.id * 1;
    })
    if(findIndex === -1)
      return;
    else
      this.#gameList.splice(findIndex, 1);
  }

  clearInput(){
    $("#id").val('');
    $("#title").val('');
    $("#genre").val('');
    $("#grade").val('');
    $("#price").val('');
    $("#img").val('');
  }

  setInputData(item){
    $("#title").val(`${item.title}`);
    $("#genre").val(`${item.genre}`);
    $("#grade").val(`${item.grade}`);
    $("#price").val(`${item.price}`);
    $("#img").val(`${item.src}`);
  }
  
  printItem(id) {
    let findItem = this.#gameList.find((item) => item.id * 1 === id * 1);
    if (findItem === undefined)
      return;
    else
      this.setInputData(findItem);
  }
}

$(() => {
  let nint = new NintendoGame();

  $("#btnAdd").click(function (e) {
    e.preventDefault();
    nint.addGame();
    nint.printList();
  });

  $("#btnUpdate").click(function (e) {
    e.preventDefault();
    nint.updateGame();
    nint.printList();
  });

  $("#btnDelete").click(function (e) {
    e.preventDefault();
    nint.deleteGame();
    nint.printList();
  });

  $(document).on(`click`, "#gameList", function (e) {
    nint.printItem($(e.currentTarget).children().first().text());
  });
})