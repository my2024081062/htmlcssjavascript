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
while(cnt1 <3){
    console.log(cnt1++);
};

let cnt2 = 0;
do{
    console.log(cnt2++);
} while(cnt2 <3);



const nums = [1,2,3];
// for(값 of 배열){}; 배열 끝까지 순환
for(let num of nums){
    num+=5;
    console.log(num);
};

const users1 = { name: "Tom", age:25, kor:88, eng:85, mat:83};
// for(키 of 객체){}; 키값을 가지고 객체 끝까지 순환
for(const key in users1){
    console.log(key, users1[key]);
};
console.log("aabbcc".replace(/[ab]/g, "."));