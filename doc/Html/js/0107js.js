

let obj = document.querySelector("#list > li:nth-child(2)");

console.log(obj);

// CDN
// 3.x 스니펫:
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
// 2.x 스니펫:
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
// 1.x 스니펫:
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

//이 파일보다 위에 jquery파일이 있어야함
$(document).ready(function(){
  // jQuery methods go here...
  console.log(`준비완료`);
  let list = document.getElementById("list");
  let jqList = $("#list");
  console.log(list);
  console.log(jqList);

});