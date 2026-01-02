/*
C 구조체
struct {
    int a;
    char b;
    boolean c;
    float d[1];
    함수(); x
}
c++ 클래스 
class {
    int a;
    char b;
    boolean c;
    float d[1];
    함수(); o
}
*/
let a=12;
class A {
    a = 0;
    constructor(aa){
        this.a = aa; //js class의 멤버변수 접근에는 항상 this 사용
        a=aa; //this 없으면 외부 변수에 접근하게됨
    }
}
let aaa = new A(123);
console.log(aaa.a); //123
console.log(a); //123

class Mammal {
    #name ="";
    constructor(name){
        this.#name = name;
    }
    getName(){
        return this.#name;
    }
    eat(food){
        console.log(`${this.getName()}이(가) ${food}를 먹는다.`);
    }
    sleep(){
        console.log(`${this.getName()}이(가) 잔다.`);
    }
}

class Person extends Mammal{
    //앞에 #을 붙여서 씀
    #birth = 0;
    #birthCountry = "";
    #birthCity = "";
    #email = "";
    #phone = "";
    
    //생성자
    constructor(name, birth, birthCountry, birthCity, email, phone) {
        super(name);
        this.#birth = birth;
        this.#birthCountry = birthCountry;
        this.#birthCity = birthCity;
        this.#email = email;
        this.#phone = phone;
    }
    //getter,setter 사용
    getBirth(){
        return this.#birth;
    }
    getBirthCountry(){
        return this.#birthCountry;
    }
    getBirthCity(){
        return this.#birthCity;
    }
    getEmail(){
        return this.#email;
    }
    getPhone(){
        return this.#phone;
    }
    setEmail(email){
        this.#email = email;
    }
    setPhone(phone){
        this.#phone = phone;
    }
};

class Person2 extends Person { //상속
    constructor(name, birth, birthCountry, birthCity, email, phone) {
        super(name,birth,birthCountry,birthCity,email,phone); //super()로 부모생성자 호출
    }
}

let me = new Person2("ccc",20020818,"korea","seoul","ccc@gamil.com","010-3333-2222");
console.log(me.getName()); //변수 접근 여전히 잘됨. 자바 protected정도의 제한자인듯.
// console.log(me2.#name); 안됨 굿.

me.sleep();

class Car {
    #carName = "";
    #carColor = "";
    #carSize = "";
    #model = "";
    #carYear = "";
    #speed = 0;
    #manufact = "";

    constructor(name,color,size,model,year,speed,manufact){
        this.#carName = name; this.#carColor = color; this.#carSize = size; 
        this.#model = model; this.#carYear = year; this.#speed = speed; this.#manufact = manufact;
    }

    getCarName() {
        return this.#carName;
    }
    getCarColor() {
        return this.#carColor;
    }
    getCarSize() {
        return this.#carSize;
    }
    getModel() {
        return this.#model;
    }
    getCarYear() {
        return this.#carYear;
    }
    getSpeed() {
        return this.#speed;
    }
    getManufact() {
        return this.#manufact;
    }
    setCarName(name) {
        this.#carName = name;
    }
    setCarColor(color) {
        this.#carColor = color;
    }
    setCarSize(size) {
        this.#carSize = size;
    }
    setModel(model) {
        this.#model = model;
    }
    setCarYear(year) {
        this.#carYear = year;
    }
    setSpeed(speed) {
        this.#speed = speed;
    }
    setManufact(manufact) {
        this.#manufact = manufact;
    }

    upSpeed(speed){
        this.setSpeed(Number(this.getSpeed())+speed);
    }
    downSpeed(speed){
        this.setSpeed(this.getSpeed()-speed < 0 ? 0 : this.getSpeed()-speed);
    }
    tootHorn(){
        console.log(`${this.getCarName()}가 경적을 울렸다.`);
    }
}

let myCar = new Car("내 차","red","500","allThan","2020","90","ABC제조사");
console.log(myCar.getCarName());
console.log(myCar.getCarColor());
console.log(myCar.getCarSize());
console.log(myCar.getModel());
console.log(myCar.getCarYear());
console.log(myCar.getSpeed());
console.log(myCar.getManufact());

myCar.upSpeed(30);
console.log(myCar.getSpeed());

myCar.downSpeed(130);
console.log(myCar.getSpeed());

myCar.tootHorn();

class Dog extends Mammal(){

    constructor(name){
        super(name);
    }
}
let myDog = new Dog("개");
myDog.sleep();

