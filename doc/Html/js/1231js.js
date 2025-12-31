//클로저
function createUser(name) {
    let visitCount = 0;  // 이 변수는 외부 함수가 종료되어도 내부 함수(클로저)에 의해 기억됨

    // 반환 될때 내부 함수는 외부 함수의 지역 변수들을 기억합니다.
    return { //객체 리턴
        name,  // 매개변수 스코프
        visit() {
            visitCount++;
            console.log(`${name}의 방문 횟수: ${visitCount}`);
        },
    };
}

const user1 = createUser("Tom");
user1.visit(); // Tom의 방문 횟수: 1
user1.visit(); // Tom의 방문 횟수: 2

const user2 = createUser("Jerry");
user2.visit(); // Jerry의 방문 횟수: 1


function createCounter() {
    let count = 0; // 이 변수는 외부 함수가 종료되어도 내부 함수(클로저)에 의해 기억됨

    // 이 내부 함수가 바로 클로저입니다.
    return function () {
        count = count + 1;
        return count;
    };
}

const counterA = createCounter();
console.log(counterA()); // 출력: 1
console.log(counterA()); // 출력: 2

const counterB = createCounter(); // 새로운 독립적인 클로저 환경 생성
console.log(counterB()); // 출력: 1


// 실용적인 클로저 데이터 은닉
function createBankAccount(initialBalance) {
    let balance = initialBalance; // balance 는 마치 java의 private 변수

    return {
        getBalance() {
            return balance;
        },
        deposit(amount) {
            if (amount > 0) {
                balance += amount;
                return `${amount}원 입금됨. 잔액: ${balance}원`;
            }
            return "유효하지 않은 금액입니다.";
        },
        withdraw(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                return `${amount}원 출금됨. 잔액: ${balance}원`;
            }
            return "출금 불가능합니다.";
        },
        getRemain() {
            return `현재 잔액: ${balance}원`;
        }
    };
}
const myAccount = createBankAccount(10000);
console.log(myAccount.getBalance());    // "현재 잔액: 10000원"
console.log(myAccount.deposit(5000));   // "5000원 입금됨. 잔액: 15000원"
console.log(myAccount.withdraw(3000));  // "3000원 출금됨. 잔액: 12000원"
console.log(myAccount.getRemain());     // "현재 잔액: 12000원"
console.log(myAccount.withdraw(15000)); // "출금 불가능합니다."
// console.log(myAccount.balance);      // undefined (직접 접근 불가)

// 실용적인 클로저 이벤트 핸들러
function setupButtons() {
    const buttons = ["버튼1", "버튼2", "버튼3"];

    buttons.forEach((buttonName, index) => {
        // 각 버튼은 자신의 index를 기억
        setTimeout(() => { //setTimeout(함수,시간); 시간만큼 지연시키고 함수 실행
            console.log(`${buttonName} 클릭됨 (인덱스: ${index})`);
        }, (index + 1) * 1000);
    });
}
setupButtons();
// 1초 후: "버튼1 클릭됨 (인덱스: 0)"
// 2초 후: "버튼2 클릭됨 (인덱스: 1)"
// 3초 후: "버튼3 클릭됨 (인덱스: 2)"


// 클로저 주의사항: 반복문에서의 클로저 (var 를 사용하면 안됨)
// 잘못된 예
function createFunctionsFailuire() {
    const functions = []; //함수를 인자로 가질 배열

    for (var i = 0; i < 3; i++) {
        functions.push(function () {
            console.log(i); // var는 함수 스코프라서 모두 3
        });
    }

    return functions;
}

const funcs = createFunctionsFailuire();
funcs[0](); // 3
funcs[1](); // 3
funcs[2](); // 3

// 올바른 예 1: let 사용
function createFunctionsCorrect1() {
    const functions = [];

    for (let i = 0; i < 3; i++) { // let은 블록 스코프
        functions.push(function () {
            console.log(i);
        });
    }

    return functions;
}

const correctFuncs1 = createFunctionsCorrect1();
correctFuncs1[0](); // 0
correctFuncs1[1](); // 1
correctFuncs1[2](); // 2


// 복잡한 클로저 예제
function outermost() {
    const outerValue = "가장 바깥";

    function middle() {
        const middleValue = "중간";

        function innermost() {
            const innermostValue = "가장 안쪽";

            // 모든 상위 렉시컬 환경에 접근 가능
            console.log(outerValue);     // "가장 바깥"
            console.log(middleValue);    // "중간"
            console.log(innermostValue); // "가장 안쪽"
        }

        return innermost;
    }

    return middle;
}

const middleFunc = outermost();
const innermostFunc = middleFunc();
innermostFunc(); // 모든 값 출력 가능 (정적 스코프)

// 예제 설정 관리자
function createConfigManager() {
    const config = {
        apiUrl: "https://api.example.com",
        timeout: 5000,
        retries: 3
    };

    // 반환되는 함수들은 config에 접근 (정적 스코프)
    return {
        getConfig() {
            return { ...config }; // 복사본 반환
        },
        updateConfig(updates) {
            Object.assign(config, updates);
        },
        resetConfig() {
            config.apiUrl = "https://api.example.com";
            config.timeout = 5000;
            config.retries = 3;
        }
    };
}

const configManager = createConfigManager();
console.log(configManager.getConfig());
configManager.updateConfig({ timeout: 10000 });
console.log(configManager.getConfig());

// 예제 이벤트 핸들러
function setupEventHandlers(userId) {
    // userId는 이 렉시컬 환경에 속함

    const handlers = {
        onClick: function () {
            console.log(`User ${userId} clicked`);
            // userId에 접근 가능 (정적 스코프)
        },
        onHover: function () {
            console.log(`User ${userId} hovered`);
        },
        onSubmit: function () {
            console.log(`User ${userId} submitted`);
        }
    };

    return handlers;
}

const user123Handlers = setupEventHandlers(123);
user123Handlers.onClick();  // "User 123 clicked"
user123Handlers.onSubmit(); // "User 123 submitted"

// 예제 함수 팩토리
function createMultiplier(multiplier) {
    // multiplier는 이 렉시컬 환경에 캡처됨

    return function (number) {
        return number * multiplier;
        // multiplier에 접근 가능 (정의된 위치의 스코프)
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(double(5));     // 10
console.log(triple(5));     // 15
console.log(quadruple(5));  // 20

function show1to10() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
};
function show11to20() {
    for (let i = 11; i <= 20; i++) {
        console.log(i);
    }
};
function show21to30() {
    for (let i = 21; i <= 30; i++) {
        console.log(i);
    }
};
//동기 프로그래밍 : 명령어 1줄 종료후 다음 명령어가 실행
//종료시간이 ns정도면 비동기 할 필요가 없음
// show1to100();
// console.log("a");
// show1to100();
// console.log("b");
// show1to100();
// console.log("c");


//비동기 프로그래밍 : 명령어 1줄 종료될 필요없이 다른 명령어가 실행됨
//실행시간이 너무 길어서 컴퓨터가 멈춘듯이 보일때
setTimeout(show1to10, Math.floor(Math.random() * 100)); //랜덤써서 쓰레드처럼해봄
console.log("a");
setTimeout(show11to20, Math.floor(Math.random() * 100));
console.log("b");
setTimeout(show21to30, Math.floor(Math.random() * 100));
console.log("c");

//함수호출과 함수()호출은 다르다
function sumOf1toThis(maxNumber) {
    let sum = 0;
    for (let i = 1; i <= maxNumber; i++) {
        sum += i;
    }
    return sum;
};
console.log(sumOf1toThis(1000));
function myPromise(max) {
    return new Promise((resolve, reject) => {
        let t = Math.floor(Math.random() * 100);
        let sum = 0;
        if (t <= 50) {
            setTimeout(() => {
                sum = sumOf1toThis(max);
                resolve(sum);
            }, 2000);
        }
        else {
            reject("Non");
        }
    });
};
myPromise(10000)
    .then(function (suc) {
        console.log(`값 : ${suc}`);
    })
    .catch(function (err) {
        console.error(`에러 : ${err}`)
    })
    .finally(function () {
        console.log(`완료했습니다.`);
    });




