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
    return `hello, ${name}`; //실행 x
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
//JSON
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
    arrow_in_arrow: function () {
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
Object.entries(my_name).forEach(([key, value]) => {
    console.log(`객체 entries ${key}: ${value}`); //키, 밸류라는 임시 가상명칭(인자)를 가지고 순환
});
const original2 = {
    a: 1,
    b: 2,
    nested: { x: 10, y: 20 }
    //nested는 { x: 10, y: 20 }라는 객체의 참조주소임. 그래서 nested.x의 값을 바꾸면 이 객체를 복사한 객체의 nested.x도 바뀜.
};
const shallowCopy2 = { ...original2 }; //객체 얕은 복사
const shallowCopy3 = Object.assign({}, original2); // 객체 얕은 복사
// 1단계 속성 변경
shallowCopy2.a = 999;
console.log(original2.a); // 1 (원본 영향 없음 ✓)
// 중첩 객체 변경
shallowCopy2.nested.x = 999;
console.log(original2.nested.x); // 999 (원본도 변경됨! ✗)
//객체 깊은 복사 (Deep Copy) : 모든 단계의 중첩 객체까지 완전히 복사
//JSON.parse(JSON.stringify(original)) 
const original1 = {
    date: new Date(), //date타입
    func: function () { return "함수"; },
    undef: undefined,
    symbol: Symbol('sym'), //심볼
    regex: /test/g, //정규식
    infinity: Infinity,
    nan: NaN
};
for (let key in original1) {
    console.log(`${key} : ${String(original1[key])}`);
}
const copy1 = JSON.parse(JSON.stringify(original1)); //객체 깊은 복사 방법1
for (let key in copy1) { //하지만 일부 데이터가 손실되는 문제가 발생(Date, Function, Symbol) 등 
    console.log(`${key} : ${String(copy1[key])}`);
}

const original3 = {
    a: 1,
    nested: {
        x: 10,
        deepNested: {
            y: 20
        }
    },
    arr: [1, 2, { z: 3 }],
    date: new Date(),
    regex: /test/gi,
    map: new Map([['key', 'value']]),
    set: new Set([1, 2, 3]),
    error: new Error('에러'),
    undef: undefined,
    infinity: Infinity,
    nan: NaN
    //func: function() { return "함수"; },  // 함수, Symbol 등은 복사 불가
    //symbol: Symbol('sym'),  // 함수, Symbol 등은 복사 불가
};

const copy2 = structuredClone(original3); //객체 깊은 복사 방법2

copy2.nested.deepNested.y = 999;
console.log(original3.nested.deepNested.y); // 20 (원본 영향 없음!)
console.log(copy2.nested.deepNested.y); // 999 (원본 영향 없음!)
console.log(copy2.date instanceof Date); // true
console.log(copy2.map instanceof Map); // true
console.log(copy2.set instanceof Set); // true

console.log(original3);
for (let key in original3) {
    console.log(`${key} : ${original3[key]}`);
}

console.log(copy2);
for (let key in copy2) {
    console.log(`${key} : ${copy2[key]}`);
}

// deepCopy 라는 객체 복사 기능의 재귀호출 함수를 만들 수 있다.
function deepCopy(obj) {
    // null이거나 객체가 아니면 그대로 반환
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    // Date 객체
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    // RegExp 객체
    if (obj instanceof RegExp) {
        return new RegExp(obj);
    }
    // Map 객체
    if (obj instanceof Map) {
        return new Map(obj);
    }
    // Set 객체
    if (obj instanceof Set) {
        return new Set(obj);
    }
    // Error 객체
    if (obj instanceof Error) {
        return obj;
    }
    // 배열
    if (Array.isArray(obj)) {
        const arrCopy = [];
        for (let i = 0; i < obj.length; i++) {
            arrCopy[i] = deepCopy(obj[i]);  // 재귀호출 복사
            //1차원 배열에서 재귀될 값은 첫번째 if문에 의해서 순수 obj[i]값이 호출될 것임
            //n차원 배열에서 재귀될 값은 현재 if문에 의해서 n-1차원 배열 obj[i]값이 호출될 것임
        }
        return arrCopy;
    }
    // 일반 객체
    const objCopy = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            objCopy[key] = deepCopy(obj[key]);  // 재귀호출 복사
        }
    }
    return objCopy;
}
const copy4 = deepCopy(original1); 
//객체 깊은 복사 방법3