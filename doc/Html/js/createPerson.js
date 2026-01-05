/*
과제 1.
  - 이름과 생년월일과 출생국가, 출생도시, 이메일
    , 폰연락처가 있는 사람 클래스 Person 를 만드세요.
  - 이름과 생년월일, 출생국가, 출생도시는
    외부에서 수정 기능 못하며, 읽는 기능만 가능해요.
  - 이메일과 폰연락처는 읽는기능과 쓰는기능으로 처리해요.
*/
/*
과제 1 테스트
  - 이름 읽는 기능함수 : getName();
  - 생년월일 읽는 기능함수 : getBirth();
  - 출생국가 읽는 기능함수 : getBirthCountry();
  - 출생도시 읽는 기능함수 : getBirthCity();
  - 이메일 읽는 기능함수 : getEmail();
  - 폰연락처 읽는 기능함수 : getPhone();
  - 이메일 쓰는 기능함수 : setEmail("abc@gmail.com");
  - 폰연락처 쓰는 기능함수 : setPhone("101-1111-1111");

  - 객체.이름 = "값이 써지면 안됨";
  - 객체.생년월일 = "값이 써지면 안됨";
  - 객체.출생국가 = "값이 써지면 안됨";
  - 객체.출생도시 = "값이 써지면 안됨";
*/
console.log("과제1");

class Person {
    //앞에 #을 붙여서 
    #name = "";
    #birth = "";
    #birthCountry = "";
    #birthCity = "";
    #email = "";
    #phone = "";

    //생성자
    constructor(name, birth, birthCountry, birthCity, email, phone) {
        this.#name = name;
        this.#birth = birth;
        this.#birthCountry = birthCountry;
        this.#birthCity = birthCity;
        this.#email = email;
        this.#phone = phone;
    }
    //getter,setter 사용
    getName() {
        return this.#name;
    }
    getBirth() {
        return this.#birth;
    }
    getBirthCountry() {
        return this.#birthCountry;
    }
    getBirthCity() {
        return this.#birthCity;
    }
    getEmail() {
        return this.#email;
    }
    getPhone() {
        return this.#phone;
    }
    setEmail(email) {
        this.#email = email;
    }
    setPhone(phone) {
        this.#phone = phone;
    }
    print() {
        let msg = `이름 - ${this.getName()}, 생년월일 - ${this.getBirth()}, 출신국 - ${this.getBirthCountry()}, 출신도시 - ${this.getBirthCity()}, 이메일 - ${this.getEmail()}, 폰번호 - ${this.getPhone()}`;
        console.log(msg);
        return msg;
    }
    static type = "사람";
    static output() {
        console.log(`나는 ${Person.type}입니다.`);
    }
    static outputInfo(person) {
        console.log(`사람 정보 : ${person.print()}`);
    }
};
// 객체 생성
let p1 = new Person("홍길동", "1731-12-22", "조선", "강릉", "그게뭔데", "그게뭔데");
let p2 = new Person("최원철", "1970-01-01", "대한민국", "대도시", "ccc@gmail.com", "010-1111-2222");
let p3 = new Person("Michael Jackson", "1965-01-01", "USA", "New York", "mjack@gmailc.om", "01-111-1111-1111");

console.log(`p1.getName = ${p1.getName()}`);
console.log(`p1.getBirth = ${p1.getBirth()}`);
console.log(`p1.getBirthCountry = ${p1.getBirthCountry()}`);
console.log(`p1.getBirthCity = ${p1.getBirthCity()}`);
console.log(`p1.getEmail = ${p1.getEmail()}`);
console.log(`p1.getPhone = ${p1.getPhone()}`);

console.log(`p2.getName = ${p2.getName()}`);
console.log(`p2.getBirth = ${p2.getBirth()}`);
console.log(`p2.getBirthCountry = ${p2.getBirthCountry()}`);
console.log(`p2.getBirthCity = ${p2.getBirthCity()}`);
console.log(`p2.getEmail = ${p2.getEmail()}`);
console.log(`p2.getPhone = ${p2.getPhone()}`);

console.log(`p3.getName = ${p3.getName()}`);
console.log(`p3.getBirth =  ${p3.getBirth()}`);
console.log(`p3.getBirthCountry = ${p3.getBirthCountry()}`);
console.log(`p3.getBirthCity = ${p3.getBirthCity()}`);
console.log(`p3.getEmail = ${p3.getEmail()}`);
console.log(`p3.getPhone = ${p3.getPhone()}`);

// 객체 쓰는 기능
p1.setEmail("u1@gmail.com");
p1.setPhone("010-7777-8888");
console.log(`쓰고 나서 p1.getEmail = ${p1.getEmail()}`);
console.log(`쓰고 나서 p1.getPhone = ${p1.getPhone()}`);

p2.setEmail("u2@gmail.com");
p2.setPhone("010-8888-8888");
console.log(`쓰고 나서 p2.getEmail = ${p2.getEmail()}`);
console.log(`쓰고 나서 p2.getPhone = ${p2.getPhone()}`);

p3.setEmail("u3@gmail.com");
p3.setPhone("010-9999-8888");
console.log(`쓰고 나서 p3.getEmail = ${p3.getEmail()}`);
console.log(`쓰고 나서 p3.getPhone = ${p3.getPhone()}`);

// 멤버변수에 값이 써지면 안됨
p1.name = "값이 써지면 안됨";
p1.birth = "값이 써지면 안됨";
console.log(`써지는 안되는데 값을 쓴 후에는 p1.getName = ${p1.getName()}`);
console.log(`써지는 안되는데 값을 쓴 후에는 p1.getBirth = ${p1.getBirth()}`);

p2.name = "값이 써지면 안됨";
p2.birth = "값이 써지면 안됨";
console.log(`써지는 안되는데 값을 쓴 후에는 p2.getName = ${p2.getName()}`);
console.log(`써지는 안되는데 값을 쓴 후에는 p2.getBirth = ${p2.getBirth()}`);

p3.name = "값이 써지면 안됨";
p3.birth = "값이 써지면 안됨";
console.log(`써지는 안되는데 값을 쓴 후에는 p3.getName = ${p3.getName()}`);
console.log(`써지는 안되는데 값을 쓴 후에는 p3.getBirth = ${p3.getBirth()}`);

/*
오후 과제 2.
  - Person 클래스가 객체로 됐을때 객체의 속성들
    (이름,생년월일,등..)을 출력하는 기능이 필요합니다.
      멤버메소드 print(); 를 만들어서 console.log 에 출력하는 기능을
      만드세요.
  - 클래스정적멤버변수 type 에는 "사람"이라는 값을 가지도록
    만드세요
  - 클래스정적메소드 output() 에는 "나는 사람 입니다."를
      출력하도록 만드세요
  - 클래스정적메소드 outputInfo(person) 에는
    "사람 정보 : " + print() 내용을 연결해서 출력하세요.
*/
console.log("과제2");

p1.print();
p2.print();
p3.print();

Person.output();

Person.outputInfo(p1);
Person.outputInfo(p2);
Person.outputInfo(p3);

/*
오후 과제 3.
  Person 클래스를 상속받는 자식 클래스 Student 를 만든다.
  Student 에는 학교이름, 학번 속성 2개를 만든다.
  let stu01 = new Student(이름, 생일, 국가, 도시, 이메일, 폰번, 학교이름, 학번); 생성하도록 한다.
  stu01.print(); 하면 기존의 이름,생일 등등 정보가 출력되는데 그 뒤로 학교이름과 학번도 출력하도록 만든다.
*/
console.log("과제3");

class Student extends Person {
    #school = "";
    #schoolNum = "";

    constructor(name, birth, birthCountry, birthCity, email, phone, school, schoolNum) {
        super(name, birth, birthCountry, birthCity, email, phone);
        this.#school = school;
        this.#schoolNum = schoolNum;
    }
    getSchool() {
        return this.#school;
    }
    getSchoolNum() {
        return this.#schoolNum;
    }
    setSchool(school) {
        this.#school = school;
    }
    setSchoolNum(schoolNum) {
        this.#schoolNum = schoolNum;
    }
    print() {
        let msg = `이름 - ${this.getName()}, 생년월일 - ${this.getBirth()}, 출신국 - ${this.getBirthCountry()}, 출신도시 - ${this.getBirthCity()}, 이메일 - ${this.getEmail()}, 폰번호 - ${this.getPhone()}, 학교 - ${this.getSchool()}, 학번 - ${this.getSchoolNum()}`;
        console.log(msg);
        return msg;
    }
}

let s1 = new Student("jameson", "1985-01-01", "USA", "New York", "abcde@gmailc.om", "01-2222-2222-2222", "abcSchool", "3921642");
let s2 = new Student("이승협", "2002-08-17", "한국", "서울", "example.gmail.com", "010-3333-5555", "명지전문대학", "202408****");

console.log(`s1.getName = ${s1.getName()}`);
console.log(`s1.getBirth = ${s1.getBirth()}`);
console.log(`s1.getBirthCountry = ${s1.getBirthCountry()}`);
console.log(`s1.getBirthCity = ${s1.getBirthCity()}`);
console.log(`s1.getEmail = ${s1.getEmail()}`);
console.log(`s1.getPhone = ${s1.getPhone()}`);
console.log(`s1.getSchool = ${s1.getSchool()}`);
console.log(`s1.getSchoolNum = ${s1.getSchoolNum()}`);
s1.print();

console.log(`s2.getName = ${s2.getName()}`);
console.log(`s2.getBirth = ${s2.getBirth()}`);
console.log(`s2.getBirthCountry = ${s2.getBirthCountry()}`);
console.log(`s2.getBirthCity = ${s2.getBirthCity()}`);
console.log(`s2.getEmail = ${s2.getEmail()}`);
console.log(`s2.getPhone = ${s2.getPhone()}`);
console.log(`s2.getSchool = ${s2.getSchool()}`);
console.log(`s2.getSchoolNum = ${s2.getSchoolNum()}`);
s2.print();
