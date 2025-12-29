var a = 10;
let b = 200;
a = "Any"
let my = "Kim";
my = "Lee";
const c = 30, PI=3.14;
const user = { 
    u_name:"Tom"
};
user.u_name = "Jerry"; // 이건 됨

const another_user = {
    u_name:"Jon"
};

try {
    a="Jonsen"
    c=30300;
    b=400;
}
catch(e) {
    console.log('에러');
}

// user = {u_name:"Tony"}; // 이건 안됨
// another_user = user // 이것도 안됨
const obj1 = new Object();
const arr1 = [1,2,'a',"abc"];
const func1 = function() {
    alert('zxc');
};
// func1();

let c1 = 10;
c1 -= 5;
console.log(c1); //5
console.log(c1++ +3); //8 (c1 +3 이후 c1++이 됨)
console.log(++c1 +3); //10 ( ++c1이 된 이후 c1 +3 이됨)
console.log(--c1); //6
console.log(c1--); //6
console.log(c1); //5

let d = 500;

console.log( d++ / 100 * b - ++c1); //994 (500 / 100 * 200 - 6);
console.log(d); //501
console.log(c1); //6
let user1=null;
let default_user = user1 || "Jun";
console.log(default_user);
let status1 = c>31 ? 'abc' : 'cba'; //if ? true : false
console.log(status1);
console.log(
    true == 1 && false == 0 ==='1'||
    true == 1 && false == 0 === 1 || 
    true == 1 && false == 0 === "true" ? "boolean타입형이 하나라도 있음" : "모두 boolean타입형이 아님"
);
console.log(
    true == 1 && false == 0 ==='1'||
    true == 1 && false == 0 === 1 || 
    true == 1 && false == 0 === 'true' ||
    true == 1 && false == 0 === true ? "boolean타입형이 하나라도 있음" : "모두 boolean타입형이 아님"
);

