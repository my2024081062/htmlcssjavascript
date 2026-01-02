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
    //Promise는 resolve, reject함수를 인자로 가진 함수를 인자로 가짐.
    //resolve()가 실행되면 fulfilled상태가 됨(true)
    //reject()가 실행되면 rejected상태가 됨(false)
    //두 함수에 임의의 값 n을 넣으면 then(resolve_n),catch(reject_n)으로 그 인자를 사용할 수 있음.
    //then(resolve_n,reject_n)로 reject_n값을 사용 못함.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${n}단`)
            for (let i = 1; i <= 9; i++) {

                console.log(`${n} * ${i} = ${i * n}`)
            }
        }, 1000)
        resolve(`a`); //값을 resolve시킴
    })
};
guguPromise(5)
    .then((a) => { console.log(`별 관계가 없는것 같음`) });
guguPromise(6)
    .then((a) => { console.log(`${a}값이 올것`) });

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

/* 구구단 2~9까지 출력1 (재귀함수)
function gugudan29(n) {
    if (n > 9) return;
    for (let i = 1; i <= 9; i++) {
        console.log(`${n} * ${i} = ${i * n}`);
    }
    gugudan29(n + 1);
};
gugudan29(2);
*/
/* 구구단 2~9까지 출력2 (클로저 활용)
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

