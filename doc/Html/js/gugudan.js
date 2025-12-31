function guguDan(n) {
    for (let i = 1; i <= 9; i++) {
        console.log(`${n} * ${i} = ${i * n}`)
    }
};
console.log(`2단`)
guguDan(2);
console.log(`3단`)
guguDan(3);
function guguCallBack(n) {
    setTimeout(guguDan(n), 1000);
};
console.log(`4단`)
guguCallBack(4);
console.log(`5단`)
guguCallBack(5);
function guguPromise(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${n}단`)
            for (let i = 1; i <= 9; i++) {
                
                console.log(`${n} * ${i} = ${i * n}`)
            }
        }, 1000)
        resolve(); //값을 resolve시킴
    })
};
guguPromise(5)
    .then(() => {console.log(`별 관계가 없는것 같음`)});
guguPromise(6)
    .then(() => {console.log(`...`)});

async function guguAsync() {
    try {
        await guguPromise(7);
        await guguPromise(8);
    }
    catch (error) {
        console.log(`에러 발생 ${error}`)
    }
};
guguAsync();
/* 구구단 2~9까지 출력1;
function gugudan29(n) {
    if (n > 9) return;
    for (let i = 1; i <= 9; i++) {
        console.log(`${n} * ${i} = ${i * n}`);
    }
    gugudan29(n + 1);
};
gugudan29(2);
*/
/* 구구단 2~9까지 출력2
function createCounter(n) {
    let count = n;
    for (let i = 1; i <= 9; i++) {
        console.log(`${n} * ${i} = ${i * n}`);
    }
    return function () {
        count++;
        return count;
    };
}
createCounter(createCounter(createCounter(createCounter(createCounter(createCounter(createCounter(createCounter(2)())())())())())())()); 
*/

const promise1 = new Promise((resolve, reject) => {
  resolve("Success!"); 
});

promise1
  .then((value) => {
  console.log(value); 
}).then(()=> {
    console.log(`성공`);
}).catch(()=>{
    console.log(`실패`);
});
