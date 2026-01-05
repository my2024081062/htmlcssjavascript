class ArrayTest{
  #users = [
    { id: 1, name: "김철수", age: 28, active: true,  scores: [90, 85, 88], role: "admin" },
    { id: 2, name: "이영희", age: 17, active: false, scores: [70, 75, 95], role: "user" },
    { id: 3, name: "박민수", age: 34, active: true,  scores: [88, 92, 78], role: "user" },
    { id: 4, name: "최지연", age: 22, active: true,  scores: [95, 88, 91], role: "moderator" },
    { id: 5, name: "정우성", age: 45, active: false, scores: [60, 65, 70], role: "user" }
  ];
  constructor(){}
  testFilter(){
    //filter()는 boolean을 리턴하는 함수를 인자로 받아서 배열을 리턴하는 함수. boolean을 리턴하는 함수의 t/f 여부에 따라 추가하거나 추가하지않음.
    let arr2 = this.#users.filter(function(){
        return true;
    }); 
    console.log(arr2);
      
    // 활성화된 사용자만
    let arr3 = this.#users.filter((u) => u.active); 
    console.log(arr3);

    // 30살 이상인 사람
    let arr4 = this.#users.filter((u) => u.age >= 30);
    console.log(arr4);

    // 관리자 또는 모더레이터
    let arr5 = this.#users.filter((u) => ['admin', 'moderator'].includes(u.role));
    console.log(arr5);
  }
  testFilter1(){
    console.log("문제 1");
    let filter1 = this.#users.filter((filtered) => {
        return filtered.active&&filtered.age>=25;
    });
    console.log(filter1);
  }
  testFilter2(){
    let filter2 = this.#users.filter((filtered)=>{
      let sum = 0;
      for(let score of filtered.scores){
        sum+=score;
      }
      return sum>=90*filtered.scores.length;
    });
    console.log(filter2);
  }
  testReduce(){
    //reduce(func(더해질 값,더할 배열의 각 인자, 인덱스){return 더해질 값},초기값);
    let avg1 = this.#users.reduce((total, u) => {
      const avg = u.scores.reduce((a,b) => a+b) / u.scores.length;
      return total + avg;
    }, 0) / this.#users.length; // → 약 82
    console.log(avg1);

    // role별로 그룹화 (실무에서 최고로 많이 씀!!)
    let roleGroup = this.#users.reduce(function(users, u){
      (users[u.role] = users[u.role] || []).push(u);
      return users;
    }, {});
    console.log(roleGroup);
    // → {
    //   admin: [ {김철수} ],
    //   user: [ {이영희}, {박민수}, {정우성} ],
    //   moderator: [ {최지연} ]
    // }

    // 이름 목록 문자열로 만듬.    더해질 값,인자,인덱스 / 인덱스가 0이상일때 앞에 ;', '붙임 / 초기값
    let names = this.#users.reduce((str, u, i) => str + (i > 0 ? ', ' : '') + u.name, '');
    // → "김철수, 이영희, 박민수, 최지연, 정우성"
    console.log(names);

    const numbers = [1, 2, 3, 4, 5];

    // 합계 계산                    
    const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
    console.log(sum); // 15

    // 곱셈
    const product = numbers.reduce((acc, curr) => acc * curr, 1);
    console.log(product); // 120

    // 최댓값 찾기
    const max = numbers.reduce((max, current) => 
      current > max ? current : max
    , numbers[0]);
    console.log(max); // 5

    // 객체로 변환
    const fruits = ['사과', '바나나', '사과', '오렌지', '바나나', '사과'];
    const fruitCount = fruits.reduce((acc, fruit) => {
      acc[fruit] = (acc[fruit] || 0) + 1;
      return acc;
    }, {});
    console.log(fruitCount); // { 사과: 3, 바나나: 2, 오렌지: 1 }

    // 배열을 객체로 변환
    const users2 = [
      { id: 1, name: '김철수' },
      { id: 2, name: '이영희' }
    ];
    const userMap = users2.reduce((acc, user) => {
      acc[user.id] = user;
      return acc;
    }, {});
    console.log(userMap); // { 1: { id: 1, name: '김철수' }, 2: { id: 2, name: '이영희' } }
  }
  groupBy(property) {
    return this.#users.reduce(function (users2, user) {
      let key = user[property];
      if (!users2[key]) {
        users2[key] = [];
      }
      users2[key].push(user);
      return users2;
    }, {});
  }
}
let at = new ArrayTest();

at.testFilter();
// 문제1 : this.#users 배열의 원소들 중에서 active 가 true 이고 나이가 25살 이상인 객체를 새로운 배열에 추출해서 출력.
at.testFilter1();
// 문제2 : this.#users 배열의 원소들 중에서 scores 점수 평균이 90점 이상인 객체를 새로운 배열에 추출해서 출력
at.testFilter2();
console.log(`reduce`);
at.testReduce();

console.log(at.groupBy("age"));