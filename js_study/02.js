//자바스크립트 함수

//일반 함수 정의
function 함수명(매개변수1, 매개변수2) {
  console.log("함수 호출됨");
  let 리턴데이터 = null;
  console.log(매개변수1);
  console.log(매개변수2);
  return 리턴데이터;
}

const 리턴값 = 함수명();
console.log(리턴값);
const 함수명2 = 함수명; //함수 자체를 다른 변수에 할당
const 리턴값2 = 함수명2(10, 20);
console.log(리턴값2);
const 리턴값3 = 함수명2(10);
console.log(리턴값3);

//익명함수 : 이름이 없는 함수, 주로 변수에 할당하거나
// 다른 함수의 인수로 사용

const 함수명3 = function (매개변수1, 매개변수2) {
  //함수명3 라는 상수에 익명함수가 할당
};

//화살표 함수
// 1. 매개변수가 하나면 ()괄호 생략가능
// 2.실행문이 한줄이라면 {}괄호 생략가능
// 3. {}생략 안하고 return하려면 return 키워드 명시

const 함수명4 = (매개변수1, 매개변수2) => {
  //코드
  return "리턴값";
};

// function fx1(){
//     console.log("fx1호출")
// }
const fx1 = () => console.log("fx1 호출");
const fx2 = (n) => console.log(n, "출력");
const fx3 = (n) => n + 1;
const fx4 = (n) => {
  console.log(n, "출력");
  return n + 1;
};
const fx5 = (a, b) => a * b;
fx1();
console.log(fx3(10));

function a() {
  //빈 함수
}

const 리턴값4 = 함수명;
//함수를 호출한게 아님, 함수명 자체를 리턴값4에 할당
console.log(리턴값4());

//고차함수
console.log("----고차함수-----")
const aa = () => {
  console.log("aa함수 호출");
  return "aa함수 리턴값";
};

const bb = (fxx) => {
  console.log("bb함수 호출");
  return fxx;
};

const aaa = (fxx, fxx2) => {
  console.log("aaa함수 호출");
  console.log(fxx());
  console.log(fxx2());
  return "aaa함수 리턴값";
};

console.log(aaa(bb(aa), bb(aa)));
