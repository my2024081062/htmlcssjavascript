class ArrayTest{
    #users = [
        { id: 1, name: "김철수", age: 28, active: true,  scores: [90, 85, 88], role: "admin" },
        { id: 2, name: "이영희", age: 17, active: false, scores: [70, 75, 95], role: "user" },
        { id: 3, name: "박민수", age: 34, active: true,  scores: [88, 92, 78], role: "user" },
        { id: 4, name: "최지연", age: 22, active: true,  scores: [95, 88, 91], role: "moderator" },
        { id: 5, name: "정우성", age: 45, active: false, scores: [60, 65, 70], role: "user" }
    ];
    constructor(){}
    testFor(){
        let sum = 0;
        for(let i = 0 ; i < this.#users.length; i++){
            sum +=this.#users[i].age;
            console.log("for : " + JSON.stringify(this.#users[i]));
        }
        console.log(sum);

        sum = 0;
        this.#users.forEach((user, ndx) => {
            sum += user.age;
            console.log("forEach : " + JSON.stringify(user));
        });
        console.log(sum);
    }
    test1(){
        for(let i = 0 ; i < this.#users.length; i++){
            if(this.#users[i].active === true){
                console.log(`for 이름 : ${this.#users[i].name}, 나이 : ${this.#users[i].age}`);
            }
        }

        this.#users.forEach((user)=>{
            if(user.active === true){
                console.log(`forEach 이름 : ${user.name}, 나이 : ${user.age}`);
            }
        });
    }
    test2(){
        for(let user of this.#users){
            if(user.role === "user"){
                let scoreJum = "";
                for(let score of user.scores) {
                    scoreJum = scoreJum + "" + score + "점, "
                }
                console.log(`for of 이름 : ${user.name}, 점수 : ${scoreJum}`);
            }
        }

        this.#users.forEach((user)=>{
            if(user.role === "user"){
                let scoreJum = "";
                for(let score of user.scores) {
                    scoreJum = scoreJum + "" + score + "점, "
                }
                console.log(`forEach 이름 : ${user.name}, 점수 : ${scoreJum}`);
            }
        });
    }
    test3(){
        let activeName = this.#users.map(u => ({name : u.name , active : u.active}));
        console.log(activeName);
    }
    test4(){ //for 안쓰고 해봄
        let sumScore = new Array(this.#users.length).fill(0); //users 길이와 같은 배열 생성하고 0으로 초기화
        let addNewElementSum = this.#users.map((u , index) => ({ //인덱스를 여기서 구해야함(0 ~ users.length-1)
            ...u, sum: u.scores.map((score) => sumScore[index]+=score)[u.scores.length-1]
             //scores길이만큼 순환하여 배열요소에 있는 값을 계속 추가하여 저장함, 마지막값이 곧 총합이 될것이기에 마지막 요소 값을 리턴하면됨.
        }));
        console.log(addNewElementSum);
    }
    test5(){
        let roles = this.#users.map(u => u.role);
        console.log(roles);
    }
    test6(){
        let IdNameAge = this.#users.map(u => {
            return ({
                id : u.id, name : u.name, age : u.age
            });
        });
        console.log(IdNameAge);
    }
    test7(){
        let names = ["홍길동", "이순신", "신사임당", "Micheal Jackon", "을지문덕"];
        let nameLength = names.map(
          (item) => {
            return { name : item , len : item.length };
          }
        );
        console.log(nameLength);
    }

}
let at = new ArrayTest();
// at.testFor();
//at.forEach((x)=>console.log(x)); 안됨

// 문제1 : active 가 true 인 user 의 이름과 나이를 출력하세요.
console.log(`문제 1`);
at.test1();
// 문제2 : role 이 "user" 인 user 의 이름과 scores 를 출력하세요.
console.log(`문제 2`);
at.test2();
// 문제3 : this.#users 배열의 모든원소에서 원소의 이름과 active [{name:"홍길동", active:true}, {name, active}, {name, active}, ...]를 새로운 배열로 추출하여 출력console.log(`문제 1`);
console.log(`문제 3`);
at.test3();
// 문제4 : this.#users 배열의 모든원소에서 scores배열의 값을 모두 더한 새로운 속성 sum을 추가한 객체 배열을 추출하고 출력.
console.log(`문제 4`);
at.test4();
// 문제5 : this.#users 배열의 모든원소에서 role 속성의 값 "user"/"admin" 을 원소로 하는 ["user", "admin", ...] 배열을 추출하고 출력.
console.log(`문제 5`);
at.test5();
// 문제6 : this.#users 배열의 모든원소에서 {id: ?, name: "???", age: ?,} 을 원소로 하는 [{}, {}, {}, ...] 새로운 배열을 추출하고 출력.
console.log(`문제 6`);
at.test6();
// 문제7 : names 배열을 이용하여 {name:문자열값, len:문자열값의길이} 원소의 배열로 추출하고 출력
// let names = ["홍길동", "이순신", "신사임당", "Micheal Jackon", "을지문덕"];
console.log(`문제 7`);
at.test7();

