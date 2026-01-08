class NintendoGame {
  // #gameList = [{id : 0, name: "", genre: "", grade:"", price:""}];

  printList(){
    $("#gameList").append(this.printRow());
  }

  printRow() {
    let html = `
      <div class="group-6">
        <div class="group-wrapper">
          <div class="group-7">
            <div class="text-wrapper-6">캐주얼</div>
          </div>
        </div>
        <div class="group-3">
          <div class="group-12">
            <div class="text-wrapper-9">마리오 파티</div>
          </div>
        </div>
        <div class="group-5">
          <div class="group-9">
            <div class="text-wrapper-8">7세</div>
          </div>
        </div>
      </div>
    `;
    return html;
  }
}

$(()=> {
  let nint = new NintendoGame();
  nint.printList();
})