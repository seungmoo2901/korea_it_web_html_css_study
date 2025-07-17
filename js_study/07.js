//비구조 할당(구조분해)
//배열이나 객체의 속성을 해체하여 개별 변수에 할당하는 문법

const student = {
  name: "이승무",
  age: 26,
  adress: "김해시",
};

//객체 비구조 할당을 사용하지 않은 일반적인 방식
const studentName = student.name;
const studentAge = student.age;

const { name: studentName2, age: studentAge2 } = student;
console.log(studentName);
console.log(studentName2);
console.log(studentAge);
console.log(studentAge2);

//함수에서 비구조 할당
//address: addr은 "address"속성을 "addr"이라는 이름으로 할당
function printStudentInfo({ name, adress: addr, age }) {
  console.log("이름은", name);
  console.log("나이는", age);
  console.log("주소는", addr);
}
printStudentInfo(student);
//객체를 매개변수로 전달하면 비구조 할당을 사용

//객체의 구조분해를 사용할때 주의할점
const s1 = {
  name: "이승무",
  age: 26,
};
const s2 = {
  name: "삼승무",
  age: 27,
};
//서로 다른 객체지만 속성명이 같아서 충돌이 일어날 수 있다.
const { name: n1, age: a1 } = s1;
const { name: n2, age: a2 } = s2;

//배열 비구조 할당: 배열의 요소를 순서대로 새로운 변수에 할당
const numbers = [1, 2, 3, 4, 5];
const [num1, num2, num3] = numbers;
console.log(num1);
console.log(num2);
console.log(num3);
