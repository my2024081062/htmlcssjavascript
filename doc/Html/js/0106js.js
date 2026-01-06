// 배열 stream함수
// 배열.메소드(); (정적 메소드)
// let 변수 = [속성1,속성2...];
// 변수.메소드();

class testArray{
  array01 = [5, 2, 3, 8, 2, 1, 8, 9, 11, 17, 20, 552, 281, 3, 91];

  outputBasu(input,basu){
    input % basu==0 ? console.log(input) : [] ;
    // function inputIsBasu(input) {
    //   console.log(input)        
    // }
    // function inputIsNotBasu(input) {
    // }
    // let out = input%basu==0 ? inputIsBasu : inputIsNotBasu ;
    // out(input);
  }

  test01_02(basu){
    console.log(`${basu}의 배수 for`);
    for(let i=0;i<this.array01.length;i++){
      this.outputBasu(this.array01[i],basu);
    }
    console.log(`${basu}의 배수 for of`);
    for(let item of this.array01){
      this.outputBasu(item,basu);
    }
    console.log(`${basu}의 배수 forEach`);
    this.array01.forEach((item) =>{
      this.outputBasu(item,basu);
    });
  }

  test03(){
    console.log(this.array01.map((item)=> `${item}`));
  }

  test04(){
    console.log(this.array01.map((item, index)=> { 
      return {value: item, index: index};
    }));
  }

  test05(){
    let array02 = this.array01.map((item, index) => { 
      return {value: item, index: index};
    }).map((obj) => {
      return {value: obj[`value`], index: obj[`index`], vip: `${obj[`value`]}${obj[`index`]}`};
    });
    console.log(array02);
  }

  test06(){
    let array03 = this.array01
      .map((item, index) => { 
      return {value: item, index: index};
    }).map((obj) => {
      return {value: obj.value, index: obj.index, vip: `${obj.value}${obj.index}`};
    }).map((obj) => {
      return obj.vip;
    }).sort();
    console.log(array03);
  }

  test07(){
    console.log(this.array01.filter((item) => `${item}`.length >= 3));
  }

  test08(){
    console.log(this.array01.filter((item) => `${item}`.length === 1));
  }

  test09(){
    console.log(this.array01.map((item, index) => { 
      return {value: item, index: index};
    }).filter((obj)=> obj.value - obj.index <= 30));
  }

  test10(){
    console.log(`짝수의 합 : ${this.array01.reduce((result, item) => item%2==0 ? result+=item : result, 0)}`);
  }

  test11(){
    console.log(`평균 = ${this.array01.reduce((result, item) => result += item, 0)/this.array01.length}`);
  }

  test12(){
    let localArray = ["I", "am", "a", "Teacher", ",", "hello", "world", "!"];
    let newWord = localArray.reduce((result, item, index) => {
      return /^[^a-zA-Z0-9ㄱ-힣\s]+$/.test(item) 
      ? `${result}${item}` 
      : index==0 
        ? `${result}${item}` : `${result} ${item}`;
    }, "");
    console.log(`새 문장 = ${newWord}`);
  }
}

let ta = new testArray();
// 문제 1
// array01 배열의 모든 원소를 순환하는 for, for of, forEach 3개를 구현한다.
// 모든 원소중에서 짝수값을 console.log 에 출력한다.
ta.test01_02(2);

// 문제 2
// array01 배열의 모든 원소를 순환하는 for, for of, forEach 3개를 구현한다.
// 3의 배수인 원소 값을 console.log 에 출력한다.
ta.test01_02(3);

// 문제3
// array01 배열의 모든 원소를 문자열로 변환해서 문자열 배열로 추출하고 출력하세요
ta.test03();

// 문제4
// 새로운배열 [{value:5, index:0}, {value:, index:1} ...] 추출 
ta.test04();

// 문제5
// 새로운배열 [{value:5, index:0, vip:"50"}, {value:2, index:1, vip:"21"} ...] 추출
ta.test05();

// 문제6
// 새로운배열 ["50", "21", ...]을 오름차순 정렬하여 추출
ta.test06();

// 문제7
// array01 배열에서 길이가 3이상인 원소만 가진 새로운 배열 추출하고 출력
ta.test07();

// 문제8
// array01 배열에서 길이가 1인 원소만 가진 새로운 배열 추출하고 출력
ta.test08();

// 문제9
// 새로운배열은 value 와 index 의 차값(value - index)이 20 이하인 값만 원소로 가지고 있으세요.
ta.test09();

// 문제10
// array01 배열 원소의 값이 짝수인 것만 합을 구하세요.
ta.test10();

// 문제11
// array01 배열 원소의 평균값을 구하세요.
ta.test11();

// 문제12
// localArray 배열 원소의 단어를 순서대로 모두 이용하여 문장을 완성하세요
ta.test12();