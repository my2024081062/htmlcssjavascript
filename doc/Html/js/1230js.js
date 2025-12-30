console.log(typeof (true)); //boolean
console.log(typeof ("")); //string
console.log(typeof (NaN)); //number
console.log(typeof (undefined)); //undefined
console.log(typeof ([])); //object
console.log(typeof ({})); //object
console.log(typeof (null)); //object
console.log(typeof ((e) => { })); //function
console.log(typeof (1n)); //bigint

let string1 = "abc";
let string2 = "bca";
let string3 = "cab";
switch (string1) {
    case "abc":
        console.log("is abc");
        break;
    case "bca":
        console.log("is bca");
        break;
    case "cab":
        console.log("is cab");
        break;
};
if (string2 === "abc") {
    console.log("is abc");
}
else if (string2 === "bca") {
    console.log("is bca");
}
else {
    console.log("is cab");
};
let cnt1 = 0;
while (cnt1 < 3) {
    console.log(cnt1++);
};

let cnt2 = 0;
do {
    console.log(cnt2++);
} while (cnt2 < 3);



const nums = [1, 2, 3];
// for(값 of 배열){}; 배열 끝까지 순환
for (let num of nums) {
    num += 5;
    console.log(num);
};

const users1 = { name: "Tom", age: 25, kor: 88, eng: 85, mat: 83 };
// for(키 of 객체){}; 키값을 가지고 객체 끝까지 순환
for (const key in users1) {
    console.log(key, users1[key]);
};
console.log("aabbcc".replace(/[ab]/g, ".")); // 정규식 : /[대상]/g
function greet(name) {
    return `hello, ${name}`;
    return `hello, ${name}`;
};
console.log(greet("Lee"));

sum1(1, 2, 3, 4, 5); //호이스팅 됨
function sum1(title, ...nums) {
    let j = 0;
    for (let num of nums) j += num;
    console.log(`${title}, ${j}`);
}
//sum2(1,2,3,4,5); 호이스팅안됨 
const sum2 = function (title, ...nums) {
    let j = 0;
    for (let num of nums) j += num;
    console.log(`${title}, ${j}`);
};
sum2(1, 2, 3, 4, 5);

//sum3(1,2,3,4,5); 호이스팅안됨 
const sum3 = (title, ...nums) => {
    let j = 0;
    for (let num of nums) j += num;
    console.log(`${title}, ${j}`);
}
sum3(1, 2, 3, 4, 5);

const create_user = (firstname, lastname, age) => ({ firstname, lastname, age });
let my_name = create_user("seung hyup", "Lee", 23);

const nums1 = [1, 2, 3, 4, 5];
const sliced = nums1.slice(1, 4);
console.log(`${sliced} / ${nums1}`);
nums1.splice(2, 1, 6, 7, 8); //(a,b,...c) a번째 요소부터 b개 제거후 ...c삽입
console.log(`${nums1}`);

let colors = ["red", "blue", "green"];
const upperColors = colors.map(item => item.toUpperCase());
console.log(`${colors}/ upper /${upperColors}`);

let str1 = JSON.stringify(my_name); //객체 -> 문자열 배열
console.log(str1);
let stu1 = JSON.parse(str1); //문자열 배열 -> 객체
console.log(stu1);

const cal = {
    value: 0,
    add(num) {
        this.value += num;
        return this;
    },
    subtract(num) {
        this.value -= num;
        return this;
    },
    getValue() {
        return this.value;
    }
};
let cal_result = cal.add(10).add(5).subtract(4).getValue();
console.log(cal_result);


const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1); // 재귀 호출(7,6,5,4,3,2,1); 0이하되면 1로 고정
};
const square = x => x * x; // 괄호생략 리턴생략
console.log(square(4));
const obj = {
    name2: "객체",
    regular: function () {
        console.log(this.name2); // "객체"
    },
    arrow: () => {
        console.log(this.name2); // undefined (상위 스코프(window)의 this)
    },
    arrow_in_arrow: function() {
        const arrow1 = () => {
            console.log(this.name2); // "객체"(상위 스코프(arrow_in_arrow)의 this)
        }
        arrow1();
    }
};
obj.regular(); // "객체"
obj.arrow();   // undefined
obj.arrow_in_arrow();
const evens = nums1.filter(n => n % 2 === 0);
console.log(evens);   // [2, 6, 8, 4]

const fruits = ["사과", "바나나", "오렌지"];
fruits.forEach((fruit, index) => { //(요소,인덱스)
    console.log(`과일: ${index}: ${fruit}`);
});
const sum4 = nums1.reduce((acc, curr) => acc + curr, 0); //누산기(계속 더해서 값을 acc 저장, curr가 더할 것 마지막 숫자는 추가값)
console.log(sum4); // 1 + 2 + 6 + 7 + 8 + 4 + 5
//Object.entries(객체) 키와 값을 가진 배열들이 모인 배열을 리턴(2차원)

//얕은,깊은 복사는 참조,창조차이